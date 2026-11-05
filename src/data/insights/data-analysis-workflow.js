// src/data/insights/data-analysis-workflow.js

export default {
  id: "data-analysis-workflow",
  slug: "data-analysis-workflow",
  title: "How Data Analysis Improves Our Project Workflow — Inside ISC's Approach",
  excerpt:
    "Data analysis isn't a buzzword for us — it's how we decide what to specify, when to intervene, and where a project is drifting. Here's how we use it across the lifecycle.",
  category: "Technical",
  tags: ["Data Analysis", "Project Management", "Workflow", "Engineering"],
  author: {
    name: "Rashad Nazer",
    role: "Data Analyst",
    avatar: "/images/team/rashad-nazer.png",
  },
  date: "2025-04-10",
  readingTime: 8,
  coverImage: "/images/insights/data-analysis-workflow.jpg",
  content: `
## The problem with "we'll know it when we see it"

For years, systems integration projects ran on instinct. A senior engineer walked a site, looked at the drawings, and made the call. That worked — until projects grew bigger, the number of trades multiplied, and the cost of guessing wrong went from thousands to millions.

Today, at ISC, we treat the project itself as a data source. Every RFI, every commissioning log, every fault ticket, every schedule slip becomes a data point. When you accumulate enough of them, patterns emerge that no single engineer could spot from experience alone.

This is not about replacing engineering judgment. It's about giving engineering judgment better inputs.

## Where data analysis actually helps

We've found four specific points in the project lifecycle where data analysis changes the outcome.

### 1. Specification — from "what we usually do" to "what this site actually needs"

Historically, system specifications were built from templates: same fire alarm spec, same CCTV density, same control room layout as the last project. Templates are efficient, but they miss context.

Now, when we receive a new project, we cross-reference:

- **Facility type** and **hazard classification** from previous similar projects
- **Coverage requirements** derived from historical inspection findings
- **Failure patterns** from comparable installations over the last five years
- **Client-specific standards** from their own historical submission approvals

The result is a specification that's still built from proven components — but tuned to the specific facility rather than the average facility. On our last three major industrial bids, this reduced specification changes after submission by roughly 40%.

### 2. Coordination — catching trade conflicts before they hit the site

Every low-current system has to physically coexist with electrical, HVAC, structural, and IT infrastructure. Historically, trade clashes were caught during installation — meaning rework, delays, and frustration.

We now run a **digital clash detection pass** across all trades before mobilization. This isn't just 3D modeling — it's pairing the geometry data with historical clash frequency data. Certain junctions are statistically more likely to clash (cable trays versus ductwork, for example), and we flag those for early review.

On a recent hospital project, this caught 127 potential clashes before a single cable was pulled. Half of them would have been caught on-site anyway; the other half would have caused schedule impact.

### 3. Installation — tracking progress in real units, not percentages

"60% complete" is a phrase that has caused more arguments between contractor and client than almost any other.

Percentages are subjective. What we've moved to is a **countable progress model**. Every device, every cable run, every panel has a discrete installation milestone. Progress is calculated by counting actual installed units against the planned total.

This gives the project manager something they can show the client: "We installed 412 of the planned 680 access control points this week." That's a number. It's defensible. It's the basis for good decisions about resource allocation.

### 4. Commissioning — using the data to find the outliers

Every system we commission produces a log. Historically, that log was reviewed by a commissioning engineer, signed off, and filed.

Now, we run those logs through a comparison model against historical commissioning data from similar systems. When a device reports a response time, an uptime metric, or a fault state that deviates from the norm for that model and configuration, it's flagged for investigation.

The majority of flags turn out to be benign. But the ones that aren't — a misconfigured detector, a network bottleneck, a firmware mismatch — get caught before handover instead of during the first 90 days of operation.

## What it's improved, concretely

Comparing projects we ran three years ago to projects we run today, with data analysis embedded:

- **Rework rate:** down approximately 30% on average across comparable projects
- **Commissioning duration:** reduced by 15–20% on complex installations
- **Post-handover fault calls in first 90 days:** halved
- **Client change requests during construction:** down significantly — mostly because specs are better the first time

None of these are revolutionary. They're the natural consequence of making decisions with more information.

## Where data analysis doesn't help

I want to be honest about the limits. Data analysis doesn't fix:

- **Bad drawings** — if the design is wrong, the data tells you it's wrong, but you still have to redesign
- **Client indecision** — better projections don't make decisions easier, they just make the cost of delay visible
- **Trade partner performance** — we can measure it, we can't control it
- **Site conditions** — a survey says one thing, the ground says another

The right way to think about data analysis is this: it improves the quality of every decision you make with it. It doesn't make the decisions for you.

## Where this is going

Three things we're actively working on for the next 18 months:

1. **Live progress dashboards for clients** — a shared view of the project, updated daily, showing countable progress rather than a percentage bar
2. **Predictive maintenance from operational data** — using the first year of operating data to predict which components will need attention in the second year
3. **Cross-project learning loops** — every project feeds its lessons back into the specification templates for the next one

The goal isn't to automate engineering. It's to make sure that every project benefits from everything we've learned in the last one.

## The bottom line

Data analysis is not a product we sell. It's how we work. It sits under everything — the proposals we submit, the way we run a site, the systems we hand over, and the service we provide for the next decade.

If you're evaluating an integrator, this is one of the questions worth asking: *"How do you use the data from your previous projects?"* The answer will tell you whether you're dealing with a company that learns, or one that just repeats.
  `,
};