// @flow
import * as d3 from 'd3'

export type TrackId = 'SKILLS_DEPTH' | 'SKILLS_BREADTH' | 'ARCHITECTURE' | 'PRACTICES_QUALITY' |
  'OPERATIONAL_EXCELLENCE' | 'CUSTOMER' | 'BUSINESS' | 'MENTORSHIP' |
  'PROJECT_MANAGEMENT' | 'CUMMUNICATION' | 'ACCOUNTABILITY';

// ADD MILESTONE HERE
export type Milestone = 0 | 1 | 2 | 3;

export type MilestoneMap = {
  'SKILLS_DEPTH': Milestone,
  'SKILLS_BREADTH': Milestone,
  'ARCHITECTURE': Milestone,
  'PRACTICES_QUALITY': Milestone,
  'OPERATIONAL_EXCELLENCE': Milestone,
  'CUSTOMER': Milestone,
  'BUSINESS': Milestone,
  'MENTORSHIP': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'ACCOUNTABILITY': Milestone
}

// ADD MILESTONE HERE
export const milestones = [0, 1, 2, 3]

// ADD MILESTONE HERE
export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
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
  'ARCHITECTURE': Track,
  'PRACTICES_QUALITY': Track,
  'OPERATIONAL_EXCELLENCE': Track,
  'CUSTOMER': Track,
  'BUSINESS': Track,
  'MENTORSHIP': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'ACCOUNTABILITY': Track
|}

// ADD MILESTONE HERE IN EACH MILESTONE ARRAY
export const tracks: Tracks = {
  "SKILLS_DEPTH": {
    "displayName": "Skills Depth",
    "category": "A",
    "description": "Develops deep expertise in a discipline",
    "milestones": [{
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Prototypes simple new features quickly",
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Migrates code from old patterns to new patterns",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of platform constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Acts a caretaker for code across multiple repositories",
        "Performs systemic tasks to significantly improve performance",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that increase developer productivity",
        "Makes architectural decisions that eliminate entire classes of bugs",
        "Implements complex UI transitions that bring delight",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "SKILLS_BREADTH": {
    "displayName": "Skills Breadth",
    "category": "A",
    "description": "Develops a broad set of competencies across multiple platforms",
    "milestones": [{
      "summary": "Has a good understanding of a variety of platforms and approaches outside of their core competency",
      "signals": [
        "Understands how changes are made to the the team's full stack",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Constistently makes changes across multiple platforms	",
      "signals": [
        "Designs and implements complex solutions end-to-end across multiple platforms",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Is skilled (level 2 in knowledge depth) in multiple platforms outside of their core competency",
      "signals": [
        "LoremSafetyCultureIpsums",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "ARCHITECTURE": {
    "displayName": "Practices & Quality",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality of SafetyCulture's products and services",
    "milestones": [{
      "summary": "Reduces complexity, increases robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
        "Implements systems that enable better testing",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of error",
        "Focuses the team on quality with regular reminders",
        "Drives initiatives to ensure SPOC processes are improved over time",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "PRACTICES_QUALITY": {
    "displayName": "Manage Complexity",
    "category": "B",
    "description": "LoremSafetyCultureIpsum",
    "milestones": [{
      "summary": "Understands high level architecture of their team's areas of ownership",
      "signals": [
        "Regularly seeks and incorporates early feedback from peers when working on new features or capabilities",
        "Avoids duplication by investing time to understand what is already implemented",
        "Writes clear and concise architecture documentation so that new team members can quickly familiarise with team's architectures",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Designs, documents and implements reliable, testable and elegant solutions to problems	",
      "signals": [
        "Demonstrates an understanding of the ETTO principle and can articulate its use in technical decision making",
        "Facilitates dialogue within teams, driving to a shared understanding of the problem at-hand",
        "Generates hypothesis about whether a described problem can be solved in a less complete way while generating equivalent impact",
      ],
      "examples": [
        "Presented multiple alternative solutions to a given problem during planning, clearly articulating the trade-offs and impacts of choosing one over the other",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Identifies opportunities to address architectural technical debt as part delivering user value outside of their immediate team	",
      "signals": [
        "Defines and uses heuristics to make sense of complex or difficult scenarios",
        "Facilitates dialogue across teams, driving to a shared understanding of the problem at-hand",
        "Identifies complex or nuanced unintended consequences in up or downstream systems if taking a described approach",
      ],
      "examples": [
        "Diagnosed and patched a complex production outage involving cascading failures across multiple services",
        "Researched and instigated a major new architectural paradigm, delivering outstanding value to SafetyCulture",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "OPERATIONAL_EXCELLENCE": {
    "displayName": "Operational Excellence",
    "category": "B",
    "description": "LoremSafetyCultureIpsum",
    "milestones": [{
      "summary": "Aware of operational concerns when building features & functionality",
      "signals": [
        "Defines and implements alarms which capture failure modes for business critical use-cases",
        "Maintains ongoing awareness of how their team's systems perform in production",
        "Uses production telemetry to understand possible contributing factors and focus problem-solving when investigating SPOC or user issues",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "Maintains or updates team dashboard to ensure that most impactful metrics are available to the team at a glance",
      ],
    }, {
      "summary": "Owns and improves operational excellence for the team	",
      "signals": [
        "Defines and implements context enabling metrics, which aid with debugging and illuminate how a system came to be in an alarm state",
        "Continually improves how their systems operate in production",
        "Consistently considers the potentially problematic side effects of our architecture (latency, eventual consistency etc.) and puts in place robust solutions to handle them gracefully",
      ],
      "examples": [
        "Held a tech talk for the wider eng. team on 'configuring your postgres instance for scalabiility'",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Identifies trends in operational concerns and champions tribe/guild wide initiatives that improve operational excellence broadly",
      "signals": [
        "Regularly identifies and solves operational issues outside of their direct team's areas of responsibility",
        "Educates others on leading-edge and best practice in operational patterns",
        "Pioneers large-scale efforts which dramatically shorten the feedback cycle for developers testing new code",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "Researched and introduced the 'circuit breaker pattern' as a standard when designing production-ready, high-volume services at SafetyCulture",
        "Drove SafetyCulture's initiative to rollout a kubernetes-based deployment capability",
      ],
    }],
  },

  "CUSTOMER": {
    "displayName": "Project Management",
    "category": "B",
    "description": "LoremSafetyCultureIpsum",
    "milestones": [{
      "summary": "Able to break down, plan and manage incremental development of stories, communicating progress effectively",
      "signals": [
        "Break down stories into smaller tasks, with a clear idea around timeframe",
        "Estimates small tasks accurately",
        "Identifies and communicates risk to delivery of assigned tasks early and to the appropriate people",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Able to break down, plan and manage incremental development of features for the team",
      "signals": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "Identifies and communicates risk to delivery of team's projects early and to the appropriate people",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Able to break down, plan and manage incremental development of complex features that could span multiple teams",
      "signals": [
        "Delegates tasks to others appropriately",
        "Manages dependencies on other projects and teams",
        "Anticipates future risk to team's projects and takes appropriate mitagating action to ensure projects stay on track",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "BUSINESS": {
    "displayName": "Customer",
    "category": "C",
    "description": "LoremSafetyCultureIpsum",
    "milestones": [{
      "summary": "Continually uses relevant metrics to help teams make decisions",
      "signals": [
        "Identifies and correct areas of code lacking analytics",
        "Participates in customer calls, shares learnings and assists customer experience by answering support requests",
        "Contributes to building and maintaining team metrics dashboard and uses it to focus team discussions",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Continually voices customer and product impact when discussing features & functionality ",
      "signals": [
        "In product discussions refers to numerous specific customers by name and can explain their particular set of problems",
        "Continually evaluates product success metrics, identifying when particular metrics have outlived their usefulness and suggests suitable alternatives",
        "Builds 'first-name' relationships with numerous SafetyCulture users who they can turn to to validate assumptions made in their team",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Drives initiatives to enhance mission and customer obsession across the wider team  ",
      "signals": [
        "Identifies an industry need, and enacts a program to address it",
        "Maintains a deep understanding of the competitive landscape and uses that knowledge to inform team direction and prioritisation decisions",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsumr",
      ],
    }],
  },


  "MENTORSHIP": {
    "displayName": "Company",
    "category": "C",
    "description": "LoremSafetyCultureIpsum",
    "milestones": [{
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote a high performance culture",
      "signals": [
        "Regularly provides thoughtful feedback in team retrospective",
        "Identifies problems and suggests corrective course of action mid-sprint",
        "Takes on additional SPOC shifts at short notice",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities",
      "signals": [
        "Regularly attends planning and retrospective sessions of other teams to share learnings",
        "Holds self and immediate team members accountable for team commitments",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Lives by SafetyCulture's values, guards our culture, and introduces initiatives that support connectedness between teams",
      "signals": [
        "Regularly looks for opportunities to help other teams achieve their deadlines without compromising their own teamwork",
        "Brings separate teams together to build connectedness",
        "Holds individuals, teams, and leadership accountable to SafetyCulture's values",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Coaching & Mentoring",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside of formal reporting structures",
    "milestones": [{
      "summary": "Actively seeks and provides constructive feedback from team members",
      "signals": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Mentors colleagues proactively, helping to guide to realisations through targeted questioning rather than providing answers",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "Talked at a Girl Geek event hosted at SafetyCulture",
      ],
    }, {
      "summary": "Fosters a culture of mentorship by encouraging people across the business to mentor one another, and creates opportunities for them to do so",
      "signals": [
        "Provides guidance and mentorship to senior engineering staff and to individuals outside of engineering",
        "Allows others to lead major high-impact initiatives, providing ongoing guidance and course-correction",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsums",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Organisational",
    "category": "D",
    "description": "LoremSafetyCultureIpsum",
    "milestones": [{
      "summary": "Identifies opportunities to improve existing processes and suggests changes that positively affect the team",
      "signals": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Develops processes to solve ongoing or long-standing organisational problems",
      "signals": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Recognises patterns of organisational issues and identifies hidden dynamics that contribute to them. Maintains deep understanding of industry trends and good practice through reading and research",
      "signals": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }],
  },

  "ACCOUNTABILITY": {
    "displayName": "Communication",
    "category": "D",
    "description": "LoremSafetyCultureIpsum",
    "milestones": [{
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Ensures stakeholders are aware of current blockers",
        "Collaborates with others with humility, respect and trust",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders	",
      "signals": [
        "Practises active listening and suspension of attention",
        "Presents information in a clear and concise manner and in a format appropriate to the audience",
        "Resolves communication difficulties between others",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
      ],
    }, {
      "summary": "Communicates complex ideas skilfully, with attention to detail and nuance. Establishes alignment within the wider organisation	",
      "signals": [
        "Contextualises and clarifies ambiguous direction and strategy for others",
        "Negotiates technical or resourcing compromises with other teams",
        "Anticipates and shares schedule deviations before they become critical",
      ],
      "examples": [
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
        "LoremSafetyCultureIpsum",
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
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
