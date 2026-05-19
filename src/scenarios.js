// scenarios.js — five ADDIE-phase decision points for the L&D consulting simulation.
// Each scenario follows the rubric: one strong consultative, one partially effective,
// one order-taker, one over-engineered. Options are deliberately calibrated so none
// announces its archetype — feedback is nuanced, not right/wrong.

export const SCENARIOS = [
  // ─────────────────────────────────────────────────────────────── 1. ANALYSIS
  {
    id: "s1",
    phase: "Analysis",
    phaseNumber: 1,
    title: "The three-week ask",
    summary:
      "A new request lands the morning of project kickoff. Joe is feeling the pressure of recent audit scores and is reaching for training as the lever.",
    channel: "Phone call · 09:12 · Voicemail transcribed",
    from: {
      name: "Joe Martinez",
      role: "Operations Director · Bayline Manufacturing",
      initials: "JM",
    },
    message: [
      "Hey Sam — Joe. We're getting hammered on our floor 5S audit scores again, third month in a row. Corporate is starting to ask questions.",
      "I need you to spin up 5S training for our 240 operators. Three weeks max — I'd like it live before the next audit cycle. Thirty-minute eLearning, knowledge check at the end, the usual deal.",
      "We've used PowerPoints in the past but they don't stick. Maybe make it more interactive this time. Give me a call back when you can.",
    ],
    prompt: "What do you say back to Joe?",
    options: [
      {
        id: "A",
        verdict: "strongest",
        label: "Strongest response",
        text:
          "\"Three weeks works on our end. Before I start storyboarding, can I get out to the floor this week — sit in on an audit, grab time with a couple of operators and a shift supervisor? I'll come back Friday with what I'm hearing and two or three ways we could go at it.\"",
        why:
          "Accepts the timeline without accepting the diagnosis. The floor visit looks like project hygiene — but it's where Sam will find out whether the audit gap is about operator knowledge or supervisor behavior. Commits to a Friday read-out so Joe doesn't feel stalled, and offers options rather than a counter-proposal.",
      },
      {
        id: "B",
        verdict: "partial",
        label: "Partially effective",
        text:
          "\"Three weeks works. I'll get a short survey out to a sample of operators and supervisors this week so we're targeting the right content — knowledge gaps, common mistakes, what's gotten in their way. Draft outline back to you Monday.\"",
        why:
          "Sounds like analysis, and it is — just not the right kind. Operators self-reporting on 5S is unreliable without observation to triangulate, and a content-focused survey quietly accepts the assumption that the gap is a content problem. You'll have an outline by Monday and a course that doesn't move the number.",
      },
      {
        id: "C",
        verdict: "order-taker",
        label: "Risky · order-taker",
        text:
          "\"Got it — 30-minute module, knowledge check, 240 seats, live before the next audit. I'll have the storyboard over by end of next week. Want me to add a refresher for supervisors at the same time?\"",
        why:
          "Reads as responsive, organized, and even a little proactive — that supervisor add-on is good instinct. But the whole reply takes Joe's framing as the brief, which is the move that quietly costs the project. The diagnosis hasn't happened. Sam is about to build the right deliverable to the wrong question.",
      },
      {
        id: "D",
        verdict: "over",
        label: "Premature · too broad",
        text:
          "\"Before we lock the format, I'd want to do proper diagnostics — interviews across all three shifts, observations, a quick benchmark against the other Bayline plants. Let me scope a phased plan and bring it back next week.\"",
        why:
          "Every individual move in this answer is defensible. The problem is the cumulative scope inside a three-week window — by the time Sam has interviewed across three shifts and benchmarked peer plants, the audit cycle is gone. The rigor is right; the calibration to the operational rhythm is off.",
      },
    ],
    commonCore:
      "Acknowledge the constraints out loud, pause the format decision, and earn the right to redesign the ask by getting on the floor first. Lead with curiosity, not a counter-proposal.",
    facilitatorQuestion:
      "When does \"show me you understand the business\" tip over into \"you're slowing me down\"? How do you signal investigation without sounding like you're stalling?",
  },

  // ───────────────────────────────────────────────────────────────── 2. DESIGN
  {
    id: "s2",
    phase: "Design",
    phaseNumber: 2,
    title: "The pushback on practice",
    summary:
      "After two floor audits, Sam has the real picture: operators broadly know 5S — supervisors aren't reinforcing it at shift start. Sam drafts a training matrix with two tracks. Joe pushes back.",
    channel: "Design review meeting · Conference Room 2B",
    from: {
      name: "Joe Martinez",
      role: "Operations Director · Bayline Manufacturing",
      initials: "JM",
    },
    message: [
      "Sam, this is good — but it's two separate courses. One for operators, one for supervisors. Can we just combine them? I don't want to manage two SCORM packages and two completion reports for HR.",
      "Also — can we cut the role-play piece in the supervisor track? My guys hate that stuff. Half of them have been here 25 years; they're not going to act out a script in front of each other.",
    ],
    prompt: "How do you respond to Joe in the room?",
    options: [
      {
        id: "A",
        verdict: "strongest",
        label: "Strongest response",
        text:
          "\"I can fix the reporting side — one dashboard, two enrollments underneath, you get one number for HR. On the role-play piece, let me show you what we built before you decide. Can I walk you through 15 minutes of the supervisor module on Thursday? If it lands flat, we pull it.\"",
        why:
          "Concedes on the operational ask (reporting) and holds on the design element, but doesn't argue principle in the abstract — it offers a Thursday demo as the deciding test. Joe stays in the driver's seat. Sam keeps the lever that makes the project work. The trade is named and small.",
      },
      {
        id: "B",
        verdict: "partial",
        label: "Partially effective",
        text:
          "\"Reporting — easy, I'll consolidate. On the role-play, what if we replaced it with branching scenarios inside the eLearning? Supervisors still work through the same situations, but on a screen instead of in front of each other.\"",
        why:
          "A real second-best, and easy to mistake for the strongest answer. Branching scenarios are credible learning design. The catch: the gap isn't whether supervisors can pick the right response in a quiet moment — it's whether they'll do it at 5:55 a.m. with a peer they've known for 20 years. The screen version designs around the discomfort that is the actual skill.",
      },
      {
        id: "C",
        verdict: "order-taker",
        label: "Risky · order-taker",
        text:
          "\"Fair points. I'll merge into a single track with role-based paths inside it and take the role-play out. Revised storyboard tomorrow morning.\"",
        why:
          "Polished, decisive, accommodating — and a quiet trade of the project's outcome for the client's short-term comfort. In twelve weeks Joe won't remember asking for this. He'll remember that the training didn't move the audit number, and that conversation lands on Sam.",
      },
      {
        id: "D",
        verdict: "over",
        label: "Premature · over-escalates",
        text:
          "\"I'd want to push back on both of those, honestly. The two roles need different content and they need different practice — that's foundational. Want me to put together a rationale we can take to your leadership together before we change the design?\"",
        why:
          "The instinct to defend the design is right. The escalation isn't. Sam is taking a one-on-one design conversation and turning it into a political document Joe didn't ask for — which reframes Joe as the obstacle and signals Sam doesn't trust the room she's already in.",
      },
    ],
    commonCore:
      "Trade on the operational ask. Hold on the performance-critical design element. Offer a tangible, dated check-in instead of arguing the principle in the abstract.",
    facilitatorQuestion:
      "Where is the line between client-centered (giving them what they ask for) and outcome-centered (giving them what works)? What do you do when those diverge mid-project — and who owns that call?",
  },

  // ──────────────────────────────────────────────────────────────── 3. DEVELOP
  {
    id: "s3",
    phase: "Develop",
    phaseNumber: 3,
    title: "The SME who keeps adding",
    summary:
      "Three weeks into development. Marcus, your SME, has reviewed the storyboard and come back with fourteen new slides — the ISO audit rubric, a TPS history section, and three corporate case studies.",
    channel: "Email · Re: 5S Storyboard v2 — review feedback",
    from: {
      name: "Marcus Lin",
      role: "Lead Industrial Engineer · SME",
      initials: "ML",
    },
    message: [
      "Sam — went through v2 carefully. Good bones. I've added some content I really think we need to include:",
      "(1) the full ISO 5S audit rubric so operators can see exactly what's being scored, (2) a short TPS history section so people understand where this comes from, (3) three case studies from the corporate parent's other plants — they have great before/after photos.",
      "If we're going to do this, let's do it right. Total adds: 14 slides. I can have it back to you by Thursday.",
    ],
    prompt: "How do you reply to Marcus?",
    options: [
      {
        id: "A",
        verdict: "strongest",
        label: "Strongest response",
        text:
          "\"Marcus — appreciate the depth here. Can we grab 20 minutes tomorrow? I want to walk through which of these tie back to the three behaviors we agreed to move. The rest is good content — might belong as a reference doc next to the course rather than inside it. Want to sort it together?\"",
        why:
          "Anchors back to a shared criterion — the performance objectives — without making Marcus feel rejected. Moves the conversation off email, where SME volleys tend to escalate. Offers Marcus a role in the cut so his expertise still has somewhere to land.",
      },
      {
        id: "B",
        verdict: "partial",
        label: "Partially effective",
        text:
          "\"Strong additions, Marcus. Let me sort which fit best inside the course and which we can pull out as a supplementary resource. Revised outline back to you by Friday.\"",
        why:
          "Reads as the responsible move and it's not wrong — but the cut is happening offline, against a criterion Marcus never sees. Whatever comes back will read as Sam's judgment, not a shared rule, and the next round of additions will arrive on schedule. The principle isn't getting set.",
      },
      {
        id: "C",
        verdict: "order-taker",
        label: "Risky · silent absorption",
        text:
          "\"Thanks Marcus — really appreciate the depth. I'll work these into v3 and circulate Friday.\"",
        why:
          "Looks like good collaboration. It's silent absorption. SMEs read no pushback as agreement, and Sam has just doubled the runtime without a conversation. In three weeks Sam is defending a bloated module to a client who asked for thirty minutes.",
      },
      {
        id: "D",
        verdict: "over",
        label: "Premature · process-heavy",
        text:
          "\"Before I integrate, let me pull our senior ID in for a review — good content here, but I want a second pair of eyes on flow and pacing before we double the runtime. Might mean an extra week.\"",
        why:
          "Sounds careful. Treats a scope conversation as a quality-assurance problem. Heavy process for what should be a 20-minute working session between Sam and Marcus — and it sets a pattern where every SME interaction triggers escalation. Marcus will stop bringing his honest take.",
      },
    ],
    commonCore:
      "Anchor to the agreed performance objectives. Make the conversation live, not asynchronous. Give the SME a role in the cut rather than executing the cut for them.",
    facilitatorQuestion:
      "Marcus is the SME, but he's also a stakeholder. How do you push back on scope without making him feel like his expertise is being dismissed? What changes if Marcus is more senior than Sam in the organization?",
  },

  // ────────────────────────────────────────────────────────────── 4. IMPLEMENT
  {
    id: "s4",
    phase: "Implement",
    phaseNumber: 4,
    title: "The labor sensitivity",
    summary:
      "Eight days before launch. The HR business partner emails Sam directly — the project's first political complication.",
    channel: "Email · Marked Confidential",
    from: {
      name: "Renee Okafor",
      role: "HR Business Partner · Plant 4",
      initials: "RO",
    },
    message: [
      "Sam — quick heads up. We're in the middle of annual labor negotiations, and there's been some sensitivity from the union recently about \"more required training\" being pushed on the floor.",
      "Nothing formal yet, but I'd rather not light a match. Can we hold the launch until after negotiations conclude? Probably four to six weeks out.",
      "Looping Joe so he's aware. Thanks for understanding.",
    ],
    prompt: "What do you propose?",
    options: [
      {
        id: "A",
        verdict: "strongest",
        label: "Strongest response",
        text:
          "\"Thanks for the heads-up, Renee — really glad you flagged it early. Can we grab 20 minutes this week, the three of us? I want to understand the specific sensitivity. There may be a version of this that isn't 'hold or launch' — for example the two cells that already volunteered, framed as continuous improvement. Want to look at it together?\"",
        why:
          "Resists the binary without rejecting Renee's read. Pulls Joe into the room before a decision gets made about his project. Surfaces a concrete third option to make the conversation tangible — but offers it, doesn't sell it. Tone is collaborative, not defensive.",
      },
      {
        id: "B",
        verdict: "partial",
        label: "Partially effective",
        text:
          "\"Understood — I'll hold launch. Let me use the time to fold in the supervisor feedback from the pilot review and tighten the eLearning. We'll come back stronger.\"",
        why:
          "Respects the HR signal, uses the time productively, reads as good partnership. It also accepts the binary on offer and quietly hands the launch decision to Renee without Joe in the room. The work doesn't suffer — but Sam misses the chance to find a rollout that works for both sides.",
      },
      {
        id: "C",
        verdict: "order-taker",
        label: "Risky · passive",
        text:
          "\"No problem — I'll push launch six weeks and let Joe know. I'll update the project plan and the stakeholder comms accordingly.\"",
        why:
          "Reads as responsive project management. It's actually order-taking at the exact moment that called for facilitation. Sam has outsourced a strategic decision to whichever stakeholder spoke last, and Joe — who hasn't been consulted yet — finds out from a status update.",
      },
      {
        id: "D",
        verdict: "over",
        label: "Premature · political overreach",
        text:
          "\"Worth getting your labor relations folks involved early. We could co-develop the rollout with the union — make it look like something we're doing with the floor, not to them. Happy to sketch a joint comms plan if it helps.\"",
        why:
          "On first read this is the most thoughtful answer in the room. The problem is whose place it is to propose. Sam is an external consultant walking into an active labor negotiation; co-developing comms with the union is HR and legal's call, not Sam's. Even a smart suggestion across that line damages trust.",
      },
    ],
    commonCore:
      "Resist the binary. Bring the right people into the same conversation. Offer a third option that respects the constraint without forfeiting the schedule.",
    facilitatorQuestion:
      "When a stakeholder presents you with a constraint, when do you accept it, when do you negotiate it, and how do you tell which is which in the moment? What signals tell you which mode to be in?",
  },

  // ──────────────────────────────────────────────────────────────── 5. EVALUATE
  {
    id: "s5",
    phase: "Evaluate",
    phaseNumber: 5,
    title: "The Tuesday QBR",
    summary:
      "Six weeks post-launch. Joe stops by Sam's desk during a site visit. Quarterly business review is next Tuesday.",
    channel: "Hallway conversation · 14:40",
    from: {
      name: "Joe Martinez",
      role: "Operations Director · Bayline Manufacturing",
      initials: "JM",
    },
    message: [
      "Hey — leadership wants to know if the training worked. QBR is Tuesday. Can you send me something I can drop in the deck? One slide ideally. Just want to show we're on top of it.",
    ],
    prompt: "What do you commit to?",
    options: [
      {
        id: "A",
        verdict: "strongest",
        label: "Strongest response",
        text:
          "\"Sure — let me come back tomorrow with what we have and what's still in flight. Completion rates and assessment scores are in, and we've got first-look audit data from the two pilot cells, which is the more interesting number. I'll put it on one slide and flag what's still preliminary.\"",
        why:
          "Separates activity metrics (completions) from outcome metrics (audit scores) without making it a lecture. Labels what's preliminary so leadership doesn't overweight an early read — and Sam doesn't get caught if the next cell's numbers come in differently. Matches the artifact to the venue: one slide, not a deck.",
      },
      {
        id: "B",
        verdict: "partial",
        label: "Partially effective",
        text:
          "\"Yes — I'll put completion rates, average assessment scores, and the post-course satisfaction read on one slide. Have it to you tomorrow.\"",
        why:
          "Responsive, on format, on time. It also stays entirely inside the activity layer — 98% completion, 87% assessment, smiley faces — which leadership will (reasonably) read as \"the training worked.\" Sam has missed the small window to introduce outcome thinking into the executive narrative before it sets.",
      },
      {
        id: "C",
        verdict: "order-taker",
        label: "Risky · fastest, weakest",
        text:
          "\"On it — I'll pull the LMS metrics into a one-pager and send it over this afternoon.\"",
        why:
          "Fastest, cleanest, lowest-effort answer in the room. Also the one that tells leadership the least. LMS data on its own says people clicked Next. It says nothing about whether anything on the floor changed — which is the question Joe actually has, even if it's not the question he asked.",
      },
      {
        id: "D",
        verdict: "over",
        label: "Premature · right model, wrong moment",
        text:
          "\"For Tuesday — honestly, the data we have right now isn't going to land. I'd rather come back with a real evaluation plan: audit trend over two quarters, behavior observation, ROI. Let me draft something this week.\"",
        why:
          "Diagnoses the same gap as the strongest answer — completion data alone won't move leadership — but answers it by missing Tuesday entirely. The right framework, wrong moment. A bigger evaluation plan belongs as a follow-up after the QBR, not as a reason to skip it.",
      },
    ],
    commonCore:
      "Lead with what changed on the floor, not what happened in the LMS. Label what's preliminary. Match the artifact to the venue. Save the bigger evaluation conversation for after Tuesday.",
    facilitatorQuestion:
      "How do you move leadership past \"did everyone complete it?\" toward \"did anything actually change?\" — especially when completion data is what's easiest to report and easiest to celebrate?",
  },
];

export default SCENARIOS;
