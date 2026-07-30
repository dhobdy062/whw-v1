export type MarketMindsetAudience =
  | "seller"
  | "buyer"
  | "homeowner"
  | "agent";

export type MarketMindsetEntry = {
  slug: string;
  question: string;
  directAnswer: string;
  sections: Array<{ heading: string; body: string }>;
  audience: MarketMindsetAudience;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  sources: Array<{ label: string; href: string }>;
  relatedSlugs: string[];
  video: {
    status: "coming-soon" | "published";
    duration?: string;
    thumbnailUrl?: string;
    contentUrl?: string;
    transcript?: string;
  };
};

const publishedAt = "2026-07-13";

export const marketMindsetEntries: MarketMindsetEntry[] = [
  {
    slug: "fix-before-listing-750k-home",
    question: "What should I fix before listing a $750K+ home?",
    directAnswer:
      "Start with issues that could interrupt a buyer's confidence: known defects, deferred maintenance, obvious water or safety concerns, and unfinished work. Then compare the likely return and disruption of each improvement with the option to price and disclose the home as it is; a thoughtful pre-listing walkthrough can keep cosmetic projects from consuming money that would be better spent on presentation or negotiation flexibility.",
    sections: [
      {
        heading: "Separate confidence issues from cosmetic preferences",
        body: "A failed system, an active leak, or incomplete permitted work can create a different negotiation problem than dated finishes. Address the items that make buyers question the home's care first. Cosmetic choices are more subjective, so clean, repair, declutter, and stage before assuming a full renovation is required.",
      },
      {
        heading: "Make the decision against the selling plan",
        body: "The right scope depends on condition, competing homes, timing, and the buyers most likely to value the property. Ask an experienced local agent to walk the home with you, then price the cost, timing, and likely effect of each recommendation. No repair guarantees a higher sale price, and the market context should be refreshed when the listing plan is prepared.",
      },
    ],
    audience: "seller",
    category: "Selling strategically",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [],
    relatedSlugs: [
      "improvements-that-protect-resale-value",
      "private-valuation-vs-online-estimate",
    ],
    video: { status: "coming-soon" },
  },
  {
    slug: "buy-before-selling-raleigh",
    question: "Should I buy before I sell in today's Raleigh market?",
    directAnswer:
      "Buy first only when your financing, carrying-cost tolerance, and backup plan can absorb a slower or lower-than-expected sale. Selling first usually reduces financial exposure, while a coordinated purchase can preserve flexibility through a sale contingency, negotiated possession, bridge financing, or temporary housing; the best structure depends on current inventory and the terms available when you move.",
    sections: [
      {
        heading: "Stress-test the buy-first option",
        body: "Ask your lender to model both homes, taxes, insurance, maintenance, and reserves for longer than the optimistic timeline. Also decide what you would do if the current home needed a price adjustment. A workable plan has room for that scenario without forcing a rushed decision.",
      },
      {
        heading: "Use live conditions as context, not a promise",
        body: "Raleigh supply, days on market, price reductions, and competition vary by neighborhood and price band. Public market reports can establish context, but they cannot predict the timing or proceeds of one property. Refresh the data for both the home being sold and the target search before selecting contract terms.",
      },
    ],
    audience: "buyer",
    category: "Buying and moving up",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [
      {
        label: "Realtor.com Raleigh housing market overview",
        href: "https://www.realtor.com/local/market/north-carolina/wake-county/raleigh",
      },
      {
        label: "North Carolina REALTORS housing reports",
        href: "https://www.ncrealtors.org/wp-content/uploads/February-2026-Housing-Report.pdf",
      },
    ],
    relatedSlugs: [
      "raleigh-markets-for-move-up-buyers",
      "price-reductions-and-negotiating-leverage",
    ],
    video: { status: "coming-soon" },
  },
  {
    slug: "price-reductions-and-negotiating-leverage",
    question: "How do price reductions affect negotiating leverage?",
    directAnswer:
      "A price reduction can renew attention and reset the seller's position, but it does not automatically make the seller desperate or guarantee a buyer a discount. Leverage comes from the reason for the reduction, time on market, competing interest, property condition, financing strength, and the terms each side values beyond price.",
    sections: [
      {
        heading: "Read the signal behind the new price",
        body: "A correction after ambitious initial pricing is different from a reduction driven by timing, condition, or a change in the seller's plans. Review the listing history and comparable alternatives, then have the agent seek context that can be shared appropriately. The goal is to understand the decision, not invent a motive.",
      },
      {
        heading: "Negotiate the whole agreement",
        body: "Closing date, due-diligence structure, repair expectations, financing certainty, possession, and personal-property requests can matter alongside price. A buyer may improve acceptance with cleaner terms, while a seller may protect proceeds by resolving presentation or condition objections. Current price-reduction patterns are useful background, but the individual transaction controls the strategy.",
      },
    ],
    audience: "seller",
    category: "Financing, inspections, and negotiations",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [
      {
        label: "Redfin Raleigh housing market overview",
        href: "https://www.redfin.com/city/35711/NC/Raleigh/housing-market",
      },
    ],
    relatedSlugs: [
      "private-valuation-vs-online-estimate",
      "buy-before-selling-raleigh",
    ],
    video: { status: "coming-soon" },
  },
  {
    slug: "private-valuation-vs-online-estimate",
    question: "What makes a private valuation different from an online estimate?",
    directAnswer:
      "An online estimate is an automated starting point built from available data, while a private valuation adds an in-person view of condition, improvements, presentation, micro-location, likely buyer response, and the seller's timing. It is still an informed opinion rather than a guaranteed sale price or formal appraisal, but it can produce a more useful pricing and preparation plan.",
    sections: [
      {
        heading: "What an automated estimate may miss",
        body: "Public records and nearby sales do not always reflect renovation quality, deferred maintenance, lot characteristics, floor-plan utility, views, noise, or how competing homes present. Those details can influence buyer comparisons even when two properties appear similar in a database.",
      },
      {
        heading: "What the private process should deliver",
        body: "A useful consultation explains the most relevant comparable properties, reasonable positioning options, preparation priorities, and the tradeoffs between testing a higher price and creating early urgency. The recommendation should be updated before launch because competing inventory and buyer response can change.",
      },
    ],
    audience: "seller",
    category: "Selling strategically",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [],
    relatedSlugs: [
      "fix-before-listing-750k-home",
      "price-reductions-and-negotiating-leverage",
    ],
    video: { status: "coming-soon" },
  },
  {
    slug: "raleigh-markets-for-move-up-buyers",
    question: "Which Raleigh-area markets fit a move-up search?",
    directAnswer:
      "The best fit is not one universal list of neighborhoods; it is the set of areas that satisfy your budget, space, commute, property style, maintenance tolerance, and preferred daily routine. Begin with those practical criteria, then compare current options across Raleigh and nearby Triangle communities with an agent who can explain property-level tradeoffs without steering your choice.",
    sections: [
      {
        heading: "Build the search around property and routine",
        body: "Define the rooms, lot, age, renovation level, travel needs, and ownership costs that would make the move worthwhile. Separate requirements from preferences so the search can expand intelligently when inventory is limited. Buyers should independently evaluate schools, amenities, and community information using sources they trust.",
      },
      {
        heading: "Compare submarkets with fresh evidence",
        body: "Availability and negotiating conditions can differ across price bands and locations, and public citywide summaries may not describe a specific move-up segment. Review active competition, recent comparable sales, and property condition when the search begins, then revisit those signals as new listings arrive. Market reports provide context, not a forecast or guarantee.",
      },
    ],
    audience: "buyer",
    category: "Relocation and neighborhoods",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [
      {
        label: "Realtor.com Raleigh housing market overview",
        href: "https://www.realtor.com/local/market/north-carolina/wake-county/raleigh",
      },
      {
        label: "North Carolina REALTORS housing reports",
        href: "https://www.ncrealtors.org/wp-content/uploads/February-2026-Housing-Report.pdf",
      },
    ],
    relatedSlugs: [
      "evaluate-a-home-remotely",
      "buy-before-selling-raleigh",
    ],
    video: { status: "coming-soon" },
  },
  {
    slug: "evaluate-a-home-remotely",
    question: "How should a relocation buyer evaluate a home remotely?",
    directAnswer:
      "Use a repeatable evidence package rather than relying on a polished video tour: a live guided walkthrough, close views of condition, room and storage dimensions, exterior and street context, disclosures, inspection options, and independent research about the location. Keep contract protections aligned with what cannot be verified remotely, and visit in person whenever the decision or risk warrants it.",
    sections: [
      {
        heading: "Direct the walkthrough",
        body: "Ask the agent to move slowly, show transitions between rooms, open storage where permitted, and document signs of wear rather than only attractive features. Request views from windows, mechanical systems, grading, neighboring context, and typical sound at the time of the visit. A live call lets you redirect the tour when a detail raises a question.",
      },
      {
        heading: "Create independent checkpoints",
        body: "Review available disclosures and records, engage qualified inspectors, confirm financing and insurance considerations, and research commute and community factors independently. No remote process removes every unknown, so agree in advance on which findings would require another visit, specialist review, renegotiation, or withdrawal under the contract.",
      },
    ],
    audience: "buyer",
    category: "Relocation and neighborhoods",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [],
    relatedSlugs: [
      "raleigh-markets-for-move-up-buyers",
      "buy-before-selling-raleigh",
    ],
    video: { status: "coming-soon" },
  },
  {
    slug: "improvements-that-protect-resale-value",
    question:
      "Which improvements are most likely to help a homeowner protect resale value?",
    directAnswer:
      "Prioritize sound maintenance, moisture control, safe and functional systems, and repairs that prevent small problems from becoming expensive ones. When resale is approaching, choose improvements that fit the home's condition and likely buyer expectations; broad appeal and quality execution usually matter more than chasing a promised return from one trendy project.",
    sections: [
      {
        heading: "Protect the asset before upgrading it",
        body: "Roof, drainage, exterior envelope, heating and cooling, plumbing, electrical, and structural concerns deserve attention because neglect can compound. Keep records of service, permits, warranties, and completed work. Documentation does not guarantee value, but it can help a future buyer understand how the property was cared for.",
      },
      {
        heading: "Plan discretionary work around the exit horizon",
        body: "A homeowner staying for years can weigh personal enjoyment heavily. Someone preparing to sell should first compare the cost and disruption of a project with simpler repairs, paint, lighting, landscaping, cleaning, and presentation. Before a major renovation, seek property-specific advice and qualified cost estimates; returns vary and should not be guaranteed.",
      },
    ],
    audience: "homeowner",
    category: "Protecting and increasing home value",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [],
    relatedSlugs: [
      "fix-before-listing-750k-home",
      "private-valuation-vs-online-estimate",
    ],
    video: { status: "coming-soon" },
  },
  {
    slug: "new-agent-credible-experience-750k-market",
    question:
      "How can a new agent build credible experience in the $750K+ market?",
    directAnswer:
      "Build credibility by becoming unusually prepared and useful before claiming expertise: study the local price bands, preview properties, learn construction and transaction risks, support experienced agents, and document the quality of your process. Be candid about your experience, operate within brokerage supervision, and let specific service and verified results earn stronger positioning over time.",
    sections: [
      {
        heading: "Borrow standards, not claims",
        body: "Seek mentorship, attend inspections and relevant trainings, practice pricing analyses, and help with open houses or transaction work when authorized. Learn how higher-value properties differ in condition, systems, financing, appraisal, presentation, and negotiation. Never imply that another agent's listing, sale, designation, or volume is your own.",
      },
      {
        heading: "Create evidence through disciplined service",
        body: "Develop a repeatable consultation, research, communication, vendor, and follow-up process. Publish useful original explanations that stay within your competence and cite changing market context. Ask clients for permission before sharing outcomes, follow brokerage and advertising rules, and describe progress precisely rather than promising production or luxury-market success.",
      },
    ],
    audience: "agent",
    category: "Agent growth and higher-value real estate",
    publishedAt,
    modifiedAt: publishedAt,
    sources: [
      {
        label: "North Carolina REALTORS housing reports",
        href: "https://www.ncrealtors.org/wp-content/uploads/February-2026-Housing-Report.pdf",
      },
    ],
    relatedSlugs: [
      "private-valuation-vs-online-estimate",
      "price-reductions-and-negotiating-leverage",
    ],
    video: { status: "coming-soon" },
  },
];

export const getMarketMindsetEntry = (slug: string) =>
  marketMindsetEntries.find((entry) => entry.slug === slug);

export const getRelatedEntries = (entry: MarketMindsetEntry) =>
  entry.relatedSlugs
    .map(getMarketMindsetEntry)
    .filter((item): item is MarketMindsetEntry => Boolean(item));
