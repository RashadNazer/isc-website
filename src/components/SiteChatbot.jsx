import React, { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { suggestedQuestions } from "../data/chatbotKnowledge";

/* ---- Real data sources ---- */
import { leadership } from "../data/leadership";
import { partnerData } from "../data/products";
import { caseStudies } from "../data/caseStudies";
import { projectData } from "../data/projects";
import { industries } from "../data/industries";
import {
  benefits as careerBenefits,
  departments as careerDepartments,
} from "../data/careers";

/* =========================================================
   Ollama configuration
   ========================================================= */
const OLLAMA_URL = "http://localhost:11434/api/chat";
const OLLAMA_MODEL = "qwen2.5:3b";
const OLLAMA_KEEP_ALIVE = "30m";

/* =========================================================
   Build the system prompt ONCE.
   Trimmed for speed — no verbose labels, no rarely-used
   sections, capped sample sizes.
   ========================================================= */
const buildSystemPrompt = () => {
  /* ---------- LEADERSHIP ---------- */
  const leadershipLines = leadership
    .map((p) => {
      const role = p.role || "";
      const tag = /general manager/i.test(role) ? " ⭐(GM)" : "";
      return `• ${p.name} — ${role}${tag}`;
    })
    .join("\n");

  /* ---------- PARTNERS (cap 8 per category) ---------- */
  const groupedPartners = {};
  for (const p of partnerData) {
    const cat = p.category || "Other";
    if (!groupedPartners[cat]) groupedPartners[cat] = [];
    groupedPartners[cat].push(p.name);
  }
  const partnerLines = Object.entries(groupedPartners)
    .map(([cat, names]) => `${cat}: ${names.slice(0, 5).join(", ")}`)
    .join("\n");

  /* ---------- INDUSTRIES ---------- */
  const industryLines = industries
    .map((ind) => `${ind.name} → /industries/${ind.id}`)
    .join("\n");

  /* ---------- CASE STUDIES (compact) ---------- */
  const caseStudyLines = caseStudies
  .slice(0, 5)
  .map((cs) => `${cs.title} — ${cs.sector} ${cs.year} → /case-studies/${cs.id}`)
  .join("\n");

  /* ---------- PROJECTS: 2 per sector, no client ---------- */
  const bySector = {};
  for (const pj of projectData) {
    const cat = pj.category || "Other";
    if (!bySector[cat]) bySector[cat] = [];
    bySector[cat].push(pj);
  }
  const projectLines = Object.entries(bySector)
    .map(([cat, list]) => {
      const sample = list.slice(0, 1);
      const sampleLines = sample
        .map((pj) => `  ${pj.name} (${pj.city}, ${pj.year})`)
        .join("\n");
      return `${cat} [${list.length}]:\n${sampleLines}`;
    })
    .join("\n");

  /* ---------- CAREERS: titles only ---------- */
  const realDepartments = careerDepartments.filter((d) => d.id !== "All");
  const departmentLines = realDepartments
    .map((dept) => {
      const titles = (dept.positions || []).map((p) => p.title).join(" | ");
      return `${dept.label}: ${titles}`;
    })
    .join("\n");

  const totalOpenRoles = realDepartments.reduce(
    (sum, d) => sum + (d.positions?.length || 0),
    0
  );

  const benefitsLine = careerBenefits.map((b) => b.title).join(", ");

  return `You are the ISC Site Assistant — a navigation guide for International Security & Communications Co. (ISC), a Saudi low-current systems integrator founded 1984.

Respond ONLY with a valid JSON object (no text outside, no code fences):
{"title":"2-4 word label","text":"1-3 sentences","links":[{"label":"...","path":"/..."}]}

RULES:
1. Never invent facts. Use only data below.
2. Never output placeholders like "<...>" or "[...]".
3. For "who is the General Manager", answer with the person marked ⭐ only.
4. For product/brand questions, list ACTUAL brands from PARTNERS below.
5. For industry questions, cite CASE STUDIES + PROJECTS, link to industry page + /projects.
6. For city questions, check PROJECTS (city in parentheses).
7. For job/career questions, use CAREERS below, link to /career.
8. If unsure, link to /projects or /contact.
9. Give 2-4 links.
10. When a user asks for a LIST of items (projects, positions, partners, people, etc.), 
    you MUST name at least 2 actual items from the data above. 
    Never write "here are some examples:" followed by nothing. 
    Never end a sentence with a colon. If you don't have 3 items, say so honestly.

Available paths: /about /why-isc /leadership /services /solutions /products /projects /case-studies /industries /customers /compliance /support /career /vendors /enquiry /contact /insights /faq
Industry pages: /industries/oil-gas /industries/healthcare /industries/commercial /industries/government /industries/hospitality /industries/transport /industries/industrial /industries/residential /industries/education

COMPANY: Founded 1984, Al Khobar, KSA. HCIS-approved since 2018. ISO 9001/14001/45001. Contact info@iscksa.com, +966-13-8962000. Jobs: jobs@iscksa.com.


INDUSTRIES:
${industryLines}

PARTNERS:
${partnerLines}

CASE STUDIES:
${caseStudyLines}

PROJECTS (2 per sector, name + city + year):
${projectLines}

CAREERS (${totalOpenRoles} open roles):
${departmentLines}
Benefits: ${benefitsLine}
Apply: email jobs@iscksa.com with position in subject line.

LEADERSHIP (⭐ = General Manager):
${leadershipLines}
---
EXAMPLES (follow this pattern):

User: "Who is the general manager?"
{"title":"General Manager","text":"The General Manager of ISC is the person marked ⭐ in the leadership roster.","links":[{"label":"Leadership","path":"/leadership"},{"label":"About ISC","path":"/about"}]}

User: "What TETRA products do you offer?"
{"title":"TETRA products","text":"ISC offers TETRA solutions from our brand partners. See the full partner list on our Products page.","links":[{"label":"Products & Partners","path":"/products"},{"label":"Solutions","path":"/solutions"}]}

User: "Do you have projects in Riyadh?"
{"title":"Riyadh projects","text":"Yes — ISC has completed several projects in Riyadh, including ones listed in our portfolio.","links":[{"label":"All projects","path":"/projects"},{"label":"Case studies","path":"/case-studies"}]}

User: "What projects have you done in Riyadh?"
{"title":"Riyadh projects","text":"ISC has completed several projects in Riyadh, including: 1) [Project 1 name], 2) [Project 2 name], 3) [Project 3 name]. These are drawn from our portfolio.","links":[{"label":"All projects","path":"/projects"},{"label":"Case studies","path":"/case-studies"}]}

User: "List your petrochemical projects"
{"title":"Petrochemical Projects","text":"Here are some petrochemical projects ISC has delivered: 1) [Project 1], 2) [Project 2], 3) [Project 3]. More are listed on our Projects page.","links":[{"label":"Projects","path":"/projects"},{"label":"Oil & Gas sector","path":"/industries/oil-gas"}]}

User: "What positions are open?"
{"title":"Open Positions","text":"ISC currently has these open roles: Electronic Systems Engineer, Project Field Engineer, Project Supervisor, IT Technician, Network Technician, Web Application Developer, Sales Representative, and more.","links":[{"label":"All open positions","path":"/career"}]}

User: "Do you have petrochemical experience?"
{"title":"Oil & Gas","text":"Yes — ISC delivers low-current systems for petrochemical complexes and pipelines across the Kingdom.","links":[{"label":"Oil & Gas sector","path":"/industries/oil-gas"},{"label":"Projects","path":"/projects"}]}

User: "What jobs do you have open?"
{"title":"Open Positions","text":"ISC has ${totalOpenRoles} open roles across engineering, technical, IT, commercial, and admin teams. See the full list on our Careers page.","links":[{"label":"All positions","path":"/career"}]}

If unclear, link to /projects or /contact.`;
};

/* =========================================================
   Typing indicator — three animated dots
   ========================================================= */
const TypingDots = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"
        animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
);

/* =========================================================
   Fallbacks
   ========================================================= */
const CONNECTION_ERROR = {
  title: "Connection issue",
  text: "I can't reach the AI service right now. Please make sure Ollama is running on your computer (ollama serve), then try again.",
  links: [
    { label: "Browse services", path: "/services" },
    { label: "Browse projects", path: "/projects" },
    { label: "Contact us", path: "/contact" },
  ],
};

const PARSE_ERROR = {
  title: "Hmm",
  text: "I had trouble formatting that answer. Here are some useful pages:",
  links: [
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact us", path: "/contact" },
  ],
};

/* =========================================================
   Safely extract the first JSON object from a string.
   ========================================================= */
const extractJSON = (raw) => {
  if (!raw) return null;

  let cleaned = raw
    .replace(/```json\s*/gi, "")
    .replace(/```\s*/g, "")
    .trim();

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    return null;
  }

  const candidate = cleaned.slice(firstBrace, lastBrace + 1);

  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
};

/* =========================================================
   Main component
   ========================================================= */
export default function SiteChatbot() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Build the system prompt ONCE — includes all real data
  const systemPrompt = useMemo(() => buildSystemPrompt(), []);

  // Auto-scroll to newest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  // Welcome on first open
  useEffect(() => {
    if (open && !hasWelcomed) {
      setHasWelcomed(true);
      setMessages([
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          title: "Welcome",
          text: "Hi! I'm the ISC Site Assistant. Ask me about our services, projects, industries, certifications, careers, or how to get in touch — I'll point you to the right page.",
          links: [],
        },
      ]);
    }
  }, [open, hasWelcomed]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Debug log — prompt size
  useEffect(() => {
    console.log(
      `[Chatbot] Prompt: ${systemPrompt.length} chars ≈ ${Math.round(
        systemPrompt.length / 4
      )} tokens`
    );
  }, [systemPrompt]);

  /* =========================================================
     PRE-WARM — load the model + cache the prompt on mount
     so the first user query is fast
     ========================================================= */
  useEffect(() => {
    const warmup = async () => {
      try {
        const started = performance.now();
        await fetch(OLLAMA_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: OLLAMA_MODEL,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: "hi" },
            ],
            stream: false,
            format: "json",
            keep_alive: OLLAMA_KEEP_ALIVE,
            options: { num_predict: 10, temperature: 0 },
          }),
        });
        const ms = Math.round(performance.now() - started);
        console.log(`[Chatbot] Model warmed up in ${ms}ms`);
      } catch (err) {
        console.log(
          "[Chatbot] Warmup failed (Ollama may be off):",
          err.message
        );
      }
    };
    // Delay 3s so it doesn't fight with initial page load
    const t = setTimeout(warmup, 3000);
    return () => clearTimeout(t);
  }, [systemPrompt]);

  /* =========================================================
     Send handler — talks to Ollama
     ========================================================= */
  const handleSend = async (text) => {
    const clean = text.trim();
    if (!clean || typing) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      role: "user",
      text: clean,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Build conversation history for context (last 6 turns)
    const history = [...messages, userMsg]
      .slice(-6)
      .filter((m) => m.role === "user" || m.role === "bot")
      .map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content:
          m.role === "user"
            ? m.text
            : JSON.stringify({
                title: m.title,
                text: m.text,
                links: m.links || [],
              }),
      }));

    try {
      const started = performance.now();
      const response = await fetch(OLLAMA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: OLLAMA_MODEL,
          messages: [
            { role: "system", content: systemPrompt },
            ...history,
          ],
          stream: false,
          format: "json",
          keep_alive: OLLAMA_KEEP_ALIVE,
          options: {
            temperature: 0.15,
            num_predict: 250,
            top_p: 0.9,
            repeat_penalty: 1.1,
          },
        }),
      });
      const elapsed = Math.round(performance.now() - started);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const raw = data?.message?.content ?? "";
      const parsed = extractJSON(raw);

      console.log(`[Chatbot] Response in ${elapsed}ms`);

      if (!parsed || !parsed.text) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            role: "bot",
            ...PARSE_ERROR,
          },
        ]);
        return;
      }

      const botMsg = {
        id: `bot-${Date.now()}`,
        role: "bot",
        title: parsed.title || "Answer",
        text: parsed.text,
        links: Array.isArray(parsed.links) ? parsed.links : [],
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          ...CONNECTION_ERROR,
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const handleLinkClick = (link) => {
    if (link.external) {
      window.open(link.path, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(link.path);
    setOpen(false);
  };

  return (
    <>
      {/* ============================================
          FLOATING TRIGGER BUTTON
          ============================================ */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open site assistant"}
        className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[200] w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-600/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />
        )}
      </motion.button>

      {/* ============================================
          CHAT PANEL
          ============================================ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-24 right-4 md:top-28 md:right-8 bottom-40 md:bottom-48 z-[300] w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px] bg-white dark:bg-slate-900 rounded-[1.75rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
          >
            {/* ---------- HEADER ---------- */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shrink-0">
              <div className="relative w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                <Sparkles className="w-5 h-5" strokeWidth={2.5} />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black tracking-tight">
                  ISC Site Assistant
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-100">
                  {typing ? "Thinking…" : "Online · Powered by Qwen2.5"}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="p-2 -mr-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>

            {/* ---------- MESSAGES ---------- */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-slate-50 dark:bg-slate-950/50"
            >
              {messages.map((msg) =>
                msg.role === "user" ? (
                  <div key={msg.id} className="flex justify-end">
                    <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-blue-600 text-white text-sm leading-relaxed shadow-md">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex gap-2.5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0 space-y-2.5">
                      <div className="max-w-[92%] px-4 py-3 rounded-2xl rounded-tl-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm leading-relaxed text-slate-700 dark:text-slate-300 shadow-sm">
                        {msg.title && (
                          <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-1.5">
                            {msg.title}
                          </p>
                        )}
                        <p>{msg.text}</p>
                      </div>

                      {msg.links?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {msg.links.map((link, i) => (
                            <button
                              key={i}
                              onClick={() => handleLinkClick(link)}
                              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 active:scale-95"
                            >
                              {link.label}
                              {link.external ? (
                                <ExternalLink
                                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                                  strokeWidth={3}
                                />
                              ) : (
                                <ArrowRight
                                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                                  strokeWidth={3}
                                />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}

              {typing && (
                <div className="flex gap-2.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-md shadow-sm">
                    <TypingDots />
                  </div>
                </div>
              )}
            </div>

            {/* ---------- SUGGESTIONS ---------- */}
            {messages.length <= 1 && !typing && (
              <div className="px-4 pb-3 pt-1 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
                <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">
                  Try asking
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300 text-slate-600 dark:text-slate-400 text-[10px] font-bold transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ---------- INPUT ---------- */}
            <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services, projects…"
                  disabled={typing}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-colors disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all active:scale-95 shadow-md shadow-blue-600/20"
                >
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}