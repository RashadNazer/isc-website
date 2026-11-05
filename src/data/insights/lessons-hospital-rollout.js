// src/data/insights/lessons-hospital-rollout.js

export default {
  id: "lessons-hospital-rollout",
  slug: "lessons-hospital-rollout",
  title: "Lessons from a Hospital Rollout: What We Learned Integrating 3,000 Devices",
  excerpt:
    "Integrating low-current systems in a live hospital is a unique challenge. Here are the lessons that shaped our approach to healthcare projects.",
  category: "Project Stories",
  tags: ["Healthcare", "Project Management", "Nurse Call"],
  author: {
    name: "Ghassan Sayegh",
    role: "General Manager",
    avatar: "/images/team/ghassan-sayegh.jpg",
  },
  date: "2025-01-10",
  readingTime: 8,
  coverImage: "/images/insights/hospital-rollout.jpg",
  content: `
## The brief

A major healthcare facility in the Eastern Province needed to replace its aging nurse call, fire alarm, access control, and CCTV systems — across a fully operational campus, 24/7, with no interruption to patient care.

That's 3,000+ endpoints across 6 buildings, installed while the hospital remained at full capacity.

## Lesson 1: Design around clinician workflow, not just code

Early in the design phase, we realized the nurse call system the hospital *had* was code-compliant but clinically frustrating. Alerts went to the wrong stations. Response times were longer than they should have been. Nurses worked around the system instead of with it.

We spent three weeks shadowing nursing staff on different shifts. The redesign that came out of that — different escalation paths, different station groupings — was not something that could have been produced from drawings alone.

**Takeaway:** In healthcare, "compliant" and "good" are not the same thing. Spend the time to understand the actual workflow.

## Lesson 2: Privacy is a design constraint, not an afterthought

CCTV in patient-adjacent areas is sensitive. We deployed cameras only in corridors and common areas — never inside patient rooms or treatment spaces, unless required by specific protocols. Access control is zoned so staff and patient privacy is preserved.

**Takeaway:** Healthcare clients value privacy highly. Designing for it upfront avoids costly retrofits and rebuilds trust with clinical teams.

## Lesson 3: Phased handover, zone by zone

We didn't wait until the entire project was finished to hand over. Instead, we commissioned in 12 phased zones, each handed over to the hospital for live use as soon as it was complete.

Benefits:
- Hospital started seeing value early
- Clinical teams had time to adapt
- Issues caught in early zones informed later ones
- Cash flow was smoother for both sides

**Takeaway:** Phased handover is harder to plan but dramatically better for both parties. It's the right approach for any live-facility integration.

## Lesson 4: Training is not a checkbox

We trained clinical staff in two phases: initial handover (basic operation) and final handover (advanced features + escalation handling). Both phases included simulation scenarios, not just slide decks.

The result: 94% of staff passed the certification on first attempt. Average response time for nurse call alerts dropped 34% within 6 months.

**Takeaway:** Invest in real training. It pays back in operational performance.

## Lesson 5: Documentation is a service

Hospital facilities teams turn over. The people who operate the systems in year 3 are not the people who signed off in year 1. Detailed as-built drawings, O&M manuals, and a searchable documentation portal became one of the client's most valued deliverables.

**Takeaway:** "Complete documentation" is more than a contractual requirement — it's how your work survives its first leadership change.

## The outcome

The facility opened on schedule for its 2026 handover. Zero safety incidents during construction. Zero privacy incidents in the first 6 months of operation. Clinical sign-off on first walkthrough.

None of these are guarantees — but the approach we took made them much more likely.

## Applying this to your project

If you're planning a healthcare systems integration, three questions to answer early:

1. What is the actual clinical workflow, and where does the current system frustrate it?
2. What phasing plan lets us deliver value continuously, not just at the end?
3. What documentation will be useful in 5 years, not just at handover?

Answer these well and the rest follows.
  `,
};