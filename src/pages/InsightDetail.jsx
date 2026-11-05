import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
} from "lucide-react";
import { Reveal, MagneticButton } from "../components/UIComponents";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  getInsightBySlug,
  insights,
  formatDate,
} from "../data/insights/index";

const FullWidth = ({ children, className = "" }) => (
  <div className={`w-full px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
    {children}
  </div>
);

/* AuthorAvatar */
const AuthorAvatar = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed || !src) {
    return <User className="w-4 h-4" strokeWidth={2.5} />;
  }

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  );
};

/* Simple markdown-ish renderer */
const renderContent = (content) => {
  const blocks = content.trim().split("\n\n");

  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-12 mb-5"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }

    if (block.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight mt-8 mb-3"
        >
          {block.replace("### ", "")}
        </h3>
      );
    }

    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((line) => line.startsWith("- "));
      return (
        <ul key={i} className="space-y-2.5 my-6 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.replace("- ", "").replace(/\*\*(.+?)\*\*/g, "$1")}
              </span>
            </li>
          ))}
        </ul>
      );
    }

    if (/^\d+\./.test(block)) {
      const items = block.split("\n").filter((line) => /^\d+\./.test(line));
      return (
        <ol key={i} className="space-y-3 my-6">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-black">
                {j + 1}
              </span>
              <span className="text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                {item.replace(/^\d+\.\s*/, "")}
              </span>
            </li>
          ))}
        </ol>
      );
    }

    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p
        key={i}
        className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-[1.8] mb-6"
      >
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong
              key={j}
              className="font-black text-slate-900 dark:text-white"
            >
              {part.replace(/\*\*/g, "")}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
};

const InsightDetail = () => {
  const { slug } = useParams();
  const post = getInsightBySlug(slug);
  usePageTitle(post?.title || "Insight", "Insights");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <p className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-4">
            404
          </p>
          <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-8">
            Post not found
          </p>
          <Link
            to="/insights"
            className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest hover:underline"
          >
            ← Back to all insights
          </Link>
        </div>
      </div>
    );
  }

  const related = insights.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* HERO — full width, readable column */}
      <section className="relative pt-32 pb-16 md:pb-20 border-b border-slate-100 dark:border-slate-900">
        <FullWidth>
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Insights", path: "/insights" },
                { label: post.title },
              ]}
            />

            <Link
              to="/insights"
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={3} />
              All Insights
            </Link>

            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.25em]">
                  {post.category}
                </span>
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.05] mb-6">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 overflow-hidden">
                    <AuthorAvatar
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" strokeWidth={2.5} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" strokeWidth={2.5} />
                    {post.readingTime} min read
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </FullWidth>
      </section>

      {/* COVER IMAGE */}
      {post.coverImage && (
        <section className="-mt-8 relative z-10">
          <FullWidth>
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    onError={(e) => (e.target.style.display = "none")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </FullWidth>
        </section>
      )}

      {/* CONTENT — narrow reading column */}
      <section className="py-16 md:py-20">
        <FullWidth>
          <div className="max-w-3xl mx-auto">
            <Reveal>{renderContent(post.content)}</Reveal>
          </div>
        </FullWidth>
      </section>

      {/* RELATED — full width, 4 cols on 2xl */}
      {related.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900">
          <FullWidth>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
                <Tag className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                  More Insights
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {related.map((rel, i) => (
                <Link
                  key={rel.id}
                  to={`/insights/${rel.slug}`}
                  data-cursor="view"
                  className="group block"
                >
                  <article className="h-full p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500 flex flex-col">
                    <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-3">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3 flex-1">
                      {rel.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      Read
                      <ArrowRight
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </FullWidth>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <FullWidth>
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                    Have a project like this?
                  </h3>
                  <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                    Our team delivers integrated systems across the Kingdom.
                    Tell us about yours.
                  </p>
                  <MagneticButton>
                    <Link
                      to="/enquiry"
                      data-cursor="hover"
                      className="group inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1"
                    >
                      Start a Conversation
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </FullWidth>
      </section>
    </div>
  );
};

export default InsightDetail;