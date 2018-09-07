// @flow
import * as d3 from 'd3'

export type TrackId = 'SKILLS_DEPTH' | 'SKILLS_BREADTH' | 'PRACTICES_QUALITY' | 'MANAGE_COMPLEXITY' |
  'OPERATIONAL_EXCELLENCE' | 'PROJECT_MANAGEMENT' | 'CUSTOMER' | 'COMPANY' |
  'MENTORSHIP' | 'COMMUNICATION';

// ADD MILESTONE HERE
export type Milestone = 0 | 1 | 2 | 3 | 4;

export type MilestoneMap = {
  'SKILLS_DEPTH': Milestone,
  'SKILLS_BREADTH': Milestone,
  'PRACTICES_QUALITY': Milestone,
  'MANAGE_COMPLEXITY': Milestone,
  'OPERATIONAL_EXCELLENCE': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'CUSTOMER': Milestone,
  'COMPANY': Milestone,
  'MENTORSHIP': Milestone,
  'COMMUNICATION': Milestone
}

// ADD MILESTONE HERE
export const milestones = [0, 1, 2, 3, 4]

// ADD MILESTONE HERE; 
//TODO: revisit points
export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 5
    case 4: return 8
    case 5: return 13
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '8': '1.3',
  '10': '2.1',
  '17': '2.2',
  '21': '2.3',
  '25': '3.1',
  '32': '3.2',
  '35': '3.3',
  '40': '4.1',
  '50': '4.2',
  '60': '4.3',
  '70': '5.1',
  '85': '5.2',
  '100': '5.3',
  '110': '6.1',
  '115': '6.2',
  '120': '6.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'SKILLS_DEPTH': Track,
  'SKILLS_BREADTH': Track,
  'PRACTICES_QUALITY': Track,
  'MANAGE_COMPLEXITY': Track,
  'OPERATIONAL_EXCELLENCE': Track,
  'PROJECT_MANAGEMENT': Track,
  'CUSTOMER': Track,
  'COMPANY': Track,
  'MENTORSHIP': Track,
  'COMMUNICATION': Track
|}

// ADD MILESTONE HERE IN EACH MILESTONE ARRAY
export const tracks: Tracks = {
  "SKILLS_DEPTH": {
    "displayName": "Skills Depth",
    "category": "A",
    "description": "Builds deep understanding within their main areas/platforms of competency, developing a thorough knowledge of nuances and latest industry trends",
    "milestones": [{
      "summary": "Focuses on growing as an engineer, learning existing tools, languages and processes",
      "signals": [
        "Builds a solid understanding of engineering fundamentels – e.g.: data structures, classes, references, debugger usage",
        "Writes code in a style consistent with the codebase and agreed conventions, creates tests for their work",
        "Builds small features and contributes bug fixes in a reasonable time frame with guidance from senior team members",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Prototypes simple new features quickly",
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Migrates code from old patterns to new patterns",
      ],
      "examples": [
        "Migrated a service from soter-forward to soter-jwt for authentication",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of platform constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Acts a caretaker for code across multiple repositories",
        "Performs systemic tasks to significantly improve performance",
      ],
      "examples": [
        "Researched and drove the implementation of the Repository Pattern as a mechanism to imprrove cycle time of stories",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that increase developer productivity",
        "Makes architectural decisions that eliminate entire classes of bugs",
        "Pioneers the introduction of new databases / persistence technologies to meet an underserved need",
      ],
      "examples": [
        "TODO",
      ],
    }],
  },

  "SKILLS_BREADTH": {
    "displayName": "Skills Breadth",
    "category": "A",
    "description": "Develops a breadth of complementary understanding and knowledge in areas/platforms outside of their core competencies ",
    "milestones": [
      {
        "summary": "Seeks out opportunities to build a broad understanding of SafetyCulture's stack ",
        "signals": [
          "Capable of tracing through execution of calls between client and backend",
          "Spends time pairing with engineers outside of their immediate area of competency",
          "Capable of making substantive changes to infrastructure configuration with minimal support",
        ],
        "examples": [
          "TODO",
        ],
      }, {
      "summary": "Has a good understanding of a variety of platforms and approaches outside of their core competency",
      "signals": [
        "Designs and builds features of medium complexity end-to-end, with a back-end and front-end component",
        "Regularly participates in and contributes to workshops focused on areas outisde of their core competency",
        "Regularly finds opportunities to pair or shadow with others to further their understanding of new areas/platforms",
      ],
      "examples": [
        "Debugged a syncing error across iOS and services",
      ],
    }, {
      "summary": "Constistently and confidently makes changes across multiple areas/platforms with successful outcomes",
      "signals": [
        "Designs and builds complex stories end-to-end that have both a back-end and front-end component",
        "Contributes significantly to the quality/testing strategy in areas outside of core competency",
        "Acts a caretaker for code across multiple repositories in areas outside of core competency",
      ],
      "examples": [
        "Implemented complex stories across both Android and iOS / Backend and Web etc.",
        "Competently wore the hat of UX-Designer in their team when no UX-er was available or was away on leave",
      ],
    }, {
      "summary": "Is skilled (level 2 in knowledge depth) in multiple platforms outside of their core competency",
      "signals": [
        "Designs and builds complex stories end-to-end that have both a back-end and front-end component",
        "Contributes significantly to the quality/testing strategy in areas outside of core competency",
        "Acts a caretaker for code across multiple repositories in areas outside of core competency",
      ],
      "examples": [
        "TODO",
      ],
    }],
  },

  "PRACTICES_QUALITY": {
    "displayName": "Practices & Quality",
    "category": "B",
    "description": "Works towards continuous and compounding improvements in our development practices to ensure we deliver the best possible experience to our users, faster",
    "milestones": [{
      "summary": "Consistently follows SafetyCulture Engineering Practice with minimal prompting",
      "signals": [
        "Creates pull requests that clearly articulate why the change is being made, and what impact it will have",
        "Addresses pull request feedback fully before merging PRs",
        "Tests code locally and in production; code is only considered shipped when it’s been verified in production",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Builds and maintains awareness of industry best-practice in the quality space and shares learnings within team and guild",
      "signals": [
        "Refactors existing code to make it more testable",
        "Proactively adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
        "Implements systems that enable better testing",
      ],
      "examples": [
        "Implemented testing infrastructure that alleviated major friction to writing tests on a particular platform, and delivered at the guild level",
      ],
    }, {
      "summary": "Drives company-wide initiatives focused on release-safety and repeatability",
      "signals": [
        "Builds systems so as to eliminate entire classes of error",
        "Focuses the team on quality with regular reminders",
        "Introduces and envangalises new and modern paradigms in quality-engineering or test automation, leading to higher coverage and confidence in releases",
      ],
      "examples": [
        "TODO",
      ],
    }],
  },

  "MANAGE_COMPLEXITY": {
    "displayName": "Manage Complexity",
    "category": "B",
    "description": "Consistently strives to reduce complexity in existing systems, refactoring and simplifying code which has become difficult to update. Minimises complexity when building new systems",
    "milestones": [{
      "summary": "Seeks to build awareness of existing technical debt and limitations; Forms opinions on the impacts of known complexity and seeks to improve ability to build maintainable software",
      "signals": [
        "Builds an understanding of technical trade-offs in the decision making process",
        "Builds an awareness of dependencies which exist between their team's area of ownership and outside systems, internal or external to SafetyCulture",
        "Proactively seeks coaching and advice from senior peers on how to minimise code-complexity; Actively considers and values maintainable code",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Understands and clearly articulates their team's areas of accumulated complexity and works actively to address and reduce technical debt as part of delivering user-value",
      "signals": [
        "Regularly seeks and incorporates early feedback from peers when working on new features or capabilities",
        "Avoids duplication by investing time to understand what is already implemented",
        "Writes clear and concise architecture documentation so that new team members can quickly familiarise with team's architectures",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Designs, documents and implements reliable, testable and elegant solutions to problems	",
      "signals": [
        "Demonstrates an understanding of the ETTO (Efficiency/Time Trade-off) principle and can articulate its use in technical decision making",
        "Facilitates dialogue within teams, driving to a shared understanding of the problem at-hand",
        "Generates hypothesis about whether a described problem can be solved in a less complete way while generating equivalent impact",
      ],
      "examples": [
        "Presented multiple alternative solutions to a given problem during planning, clearly articulating the trade-offs and impacts of choosing one over the other",
        "TODO",
      ],
    }, {
      "summary": "Addresses architectural debt as part delivering user-value outside of their immediate team",
      "signals": [
        "Defines and uses heuristics to make sense of complex or difficult scenarios",
        "Facilitates dialogue across teams, driving to a shared understanding of the problem at-hand",
        "Identifies complex or nuanced unintended consequences in up or downstream systems if taking a described approach",
      ],
      "examples": [
        "Diagnosed and patched a complex production outage involving cascading failures across multiple services",
        "Researched and instigated a major new architectural paradigm, delivering outstanding value to SafetyCulture",
        "TODO",
      ],
    }],
  },

  "OPERATIONAL_EXCELLENCE": {
    "displayName": "Operational Excellence",
    "category": "B",
    "description": "Designs, builds and supports systems for performance, reliability and scalability considering growth requirements and future needs of our business",
    "milestones": [{
      "summary": "Proactively takes on tasks and initiatives which help to build out better operational understanding and capabilities",
      "signals": [
        "Runs incident management competently for issues in their team; working with senior team members to define and document meaningful improvement actions",
        "Seeks out opportunities to shadow on production incident debugging and on-call support",
        "Proactively seeks out opportunities to build a detailed understanding of the operational stack at SafetyCulture; eg.: Observibility, logging & alarming systems",
      ],
      "examples": [
        "TODO",
      ], },
      {
      "summary": "Builds and maintains awareness of operational concerns when building features & functionality",
      "signals": [
        "Defines and implements alarms which capture failure modes for business critical use-cases",
        "Maintains ongoing awareness of how their team's systems perform in production",
        "Uses production telemetry to understand possible contributing factors and focus problem-solving when investigating SPOC or user issues",
      ],
      "examples": [
        "TODO",
        "Maintains or updates team dashboard to ensure that most impactful metrics are available to the team at a glance",
      ],
    }, {
      "summary": "Owns and improves operational excellence for the team",
      "signals": [
        "Defines and implements context enabling metrics, which aid with debugging and illuminate how a system came to be in an alarm state",
        "Continually improves how their systems operate in production",
        "Consistently considers the potentially problematic side effects of our architecture (latency, eventual consistency etc.) and puts in place robust solutions to handle them gracefully",
      ],
      "examples": [
        "Held a tech talk for the wider eng. team on 'configuring your postgres instance for scalabiility'",
        "TODO",
      ],
    }, {
      "summary": "Identifies trends in operational concerns and champions tribe/guild wide initiatives that improve operational excellence broadly",
      "signals": [
        "Regularly identifies and solves operational issues outside of their direct team's areas of responsibility",
        "Educates others on leading-edge and best practice in operational patterns",
        "Pioneers large-scale efforts which dramatically shorten the feedback cycle for developers testing new code",
      ],
      "examples": [
        "TODO",
        "Researched and introduced the 'circuit breaker pattern' as a standard when designing production-ready, high-volume services at SafetyCulture",
        "Drove SafetyCulture's initiative to rollout a kubernetes-based deployment capability",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project Management",
    "category": "B",
    "description": "Works effectively within and across teams to ensure efficient delivery and prioritisation of work",
    "milestones": [{
      "summary": "Able to effectively manage own work; sets and delivers on realistic expectations",
      "signals": [
        "Prioritises and organises own work to deliver to agreed deadlines",
        "Makes steady progress on tasks; knows when to ask for help in order to get themselves unblocked",
        "Communicates assumptions and gets clarification on tasks up front to minimize the need for rework",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Able to break down, plan and manage incremental development of stories, communicating progress effectively",
      "signals": [
        "Break down stories into smaller tasks, with a clear idea around timeframe",
        "Estimates small tasks accurately",
        "Identifies and communicates risk to delivery of assigned tasks early and to the appropriate people",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Able to break down, plan, prioritise and manage incremental development of features for the team",
      "signals": [
        "Facilitates effective Stand-Up, Planning, Retrospective & Showcase meetings within their team",
        "Confidently wears the Scrum-master or Iteration Lead hat within their team as needed",
        "Identifies and communicates risk to delivery of team's projects early and to the appropriate people",
      ],
      "examples": [
        "When planning a new change or feature which impacted customer experience, made sure everyone was well informed and sought input about the change from external groups, e.g. product, design, customer success, customer experience",
      ],
    }, {
      "summary": "Able to break down, plan and manage incremental development of complex features that could span multiple teams",
      "signals": [
        "Delegates to and prioritises tasks for others appropriately",
        "Effectively manages dependencies on other projects and teams",
        "Anticipates future risk to team's projects and takes appropriate mitagating action to ensure projects stay on track",
      ],
      "examples": [
        "TODO",
      ],
    }],
  },

  "CUSTOMER": {
    "displayName": "Customer",
    "category": "C",
    "description": "Builds meaningful and mutually beneficial relationships with SafetyCulture's customers, leveraging those relationships to help their teams deliver experiences that bring delight",
    "milestones": [{
      "summary": "Invests time and effort to understand customer use cases; Can readily articulate the value proposition of our product suite",
      "signals": [
        "Understands the business and customer-relevance of their team's backlog and features",
        "Maintains an on-going awareness of how their team is tracking towards the desired customer outcome for the period",
        "Proactively seeks out opportunities to shadow customer-facing folks in customer calls",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Diligently seeks out umprompted opportunites to connect with customers over multiple channels",
      "signals": [
        "Identifies and correct areas of code lacking analytics",
        "Regularly participates in customer calls, shares learnings and assists customer experience by answering support requests",
        "Contributes to building and maintaining team metrics dashboard and uses it to focus team discussions",
      ],
      "examples": [
        "Actively routed customer concerns that fall outside of team responsibilities to the teams that own those features",
      ],
    }, {
      "summary": "Continually voices customer and product impact when discussing features & functionality",
      "signals": [
        "In product discussions refers to numerous specific customers by name and can explain their particular set of problems",
        "Continually evaluates product success metrics, identifying when particular metrics have outlived their usefulness and suggests suitable alternatives",
        "Builds 'first-name' relationships with numerous SafetyCulture users who they can turn to to validate assumptions made in their team",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Drives initiatives to enhance mission and customer obsession across the wider team aiming to solve problems at their core",
      "signals": [
        "Identifies an industry need, and enacts a program to address it",
        "Maintains a deep understanding of the competitive landscape and uses that knowledge to inform team direction and prioritisation decisions",
        "Analyses or mines large data-sets to build insights and to identify otherwise untapped customer opportunities",
      ],
      "examples": [
        "TODO",
      ],
    }],
  },


  "COMPANY": {
    "displayName": "Company",
    "category": "C",
    "description": "Focuses intensely on making SafetyCulture better in every way. Holds themself and others around them accountable for contribution and for results",
    "milestones": [{
      "summary": "Demonstrates an authentic desire to understand the working culture at SafetyCulture and a desire to influence it for the better",
      "signals": [
        "Actively contributes in team meetings",
        "Actively seeks out opportunities to understand and demonstrate company values",
        "Participates in team events, both within engineering and the broader team at SafetyCulture",
      ],
      "examples": [
        "TODO",
      ],
    },  {
      "summary": "Seeks out and acts upon opportunities to build relationships and connections with others at SafetyCulture",
      "signals": [
        "Regularly provides thoughtful feedback in team retrospective",
        "Identifies problems and suggests corrective course of action mid-sprint",
        "Holds self accountable for commitments to their team",
      ],
      "examples": [
        "Readily identified when people from different teams needed to be brought together to solve a problem",
        "Took on additional on-call shifts at short notice",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities",
      "signals": [
        "Regularly attends planning and retrospective sessions of other teams to share learnings",
        "Holds self and immediate team members accountable for team commitments",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "Used a personal failure or shortcoming as a teaching example during team retro. Showed confidence in being vulnerable",
        "Took on additional on-call shifts for another team when team members were unavailable or on leave",
      ],
    }, {
      "summary": "Lives by SafetyCulture's values, guards our culture, and introduces initiatives that support connectedness between teams",
      "signals": [
        "Regularly looks for opportunities to help other teams achieve their deadlines without compromising their own teamwork",
        "Brings separate teams together to build connectedness",
        "Holds individuals, teams, and leadership accountable to SafetyCulture's values",
      ],
      "examples": [
        "TODO",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Coaching & Mentoring",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside of formal reporting structures",
    "milestones": [{
      "summary": "Takes responsibility for their own personal development, has a growth mindset",
      "signals": [
        "Solicits feedback from others and is eager to find ways to improve",
        "Demonstrates ability to learn from mistakes; rarely makes the same mistake twice",
        "Accepts feedback graciously and learns from everything they do",
      ],
      "examples": [
        "TODO",
      ],
    }, 
      {
      "summary": "Actively seeks and provides constructive feedback from team members",
      "signals": [
        "Regularly seeks out opportunities to participate in initiatives that place them out of their comfort zone",
        "Engages in activities and initiatives aimed at increasing self-awareness & emotional intelligence",
        "Consistently provides timely, behaviour-focused feedback to peers, delivered in a constructive and respectful manner",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Mentors colleagues proactively, helping to guide to realisations through targeted questioning rather than providing answers",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Facilitated a group-pairing exercise to up-skill multiple individuals on a particular technology or set of technologies",
      ],
    }, {
      "summary": "Fosters a culture of mentorship by encouraging people across the business to mentor one another, and creates opportunities for them to do so",
      "signals": [
        "Provides guidance and mentorship to senior engineering staff and to individuals outside of engineering",
        "Allows others to lead major high-impact initiatives, providing ongoing guidance and course-correction",
        "Fosters and develops coaching skills in others",
      ],
      "examples": [
        "Held an impactful workshop for engineers on 'Developing your coaching skills'",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "D",
    "description": "Delivers the right amount of information to the right people at the right time in a respectful and thoughful manner",
    "milestones": [{
      "summary": "Starts to build a reputation as a clear and concise communicator; Invests intentional effort to improve communication skills",
      "signals": [
        "Finds the right balance between persevering on a problem and asking for help",
        "Asks questions frequently to confirm alignment and understanding",
        "Provides explanations clearly and concisely",
      ],
      "examples": [
        "TODO",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Keeps team aware of risks or blockers, communicating impacts clearly and succinctly",
        "Collaborates with others with humility, respect and trust",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Manned a SafetyCulture sponsored booth at a conference / recruiting event, communicating proactively and effectively with attendees",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders	",
      "signals": [
        "Listens actively and attentively when engaging with colleages at all levels showing care and empathy for the other parties",
        "Presents information in a clear and concise manner and in a format appropriate to the audience",
        "Resolves communication difficulties between others",
      ],
      "examples": [
        "Represented SafetyCulture by presenting at a meetup with a medium to large audience",
      ],
    }, {
      "summary": "Communicates complex ideas skilfully, with attention to detail and nuance. Establishes alignment within the wider organisation	",
      "signals": [
        "Contextualises and clarifies ambiguous direction and strategy for others",
        "Negotiates technical or resourcing compromises with other teams",
        "Anticipates and shares schedule deviations before they become critical",
      ],
      "examples": [
        "TODO",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Junior Engineer', minPoints: 0, maxPoints: 10},
  {label: 'Engineer', minPoints: 10, maxPoints: 40},
  {label: 'Senior Engineer', minPoints: 25, maxPoints: 60},
  {label: 'Staff Engineer', minPoints: 40, maxPoints: 80},
  {label: 'Senior Staff Engineer', minPoints: 70, maxPoints: 110},
  {label: 'Principal Engineer', minPoints: 110, maxPoints: 130},
  {label: 'Senior Principal Engineer', minPoints: 110},
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
