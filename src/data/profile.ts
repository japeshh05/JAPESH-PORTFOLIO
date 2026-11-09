import { Profile } from './types';

export const profileData: Profile = {
  name: "Japesh",
  role: "Mechanical Engineering Student",
  college: "CIT (Coimbatore Institute of Technology)",
  school: "Avinashi Boys School",
  email: "japesh.engg@example.com",
  tagline: "From the football field to the workshop floor: the story of a mechanical engineering student who keeps showing up and leveling up.",
  aboutStory: [
    "I began my journey at Avinashi Boys School, where early mornings meant team practice and evenings were spent diving into science and mechanics.",
    "From learning grit on the football field after our first competitive loss in 6th standard, to discovering team leadership and discipline through Scouts & Guides in 8th and 9th standard, every stage taught me to rise to challenges.",
    "Earning School First in 10th boards (472/500) and receiving the Governor's Rajya Puraskar from Thiru R. N. Ravi reinforced my belief in dedication. Today, I'm channeling that exact focus into Mechanical Engineering at Coimbatore Institute of Technology (CIT)."
  ],
  currentGoals: [
    "Mastering core mechanical engineering principles and thermodynamics",
    "Learning advanced Computer-Aided Design (CAD) & digital fabrication modeling",
    "Developing real-world mechanical prototypes and hands-on workshop problem-solving"
  ],
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com"
    },
    {
      label: "GitHub",
      url: "https://www.github.com"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com"
    }
  ],
  milestones: [
    {
      id: "std-6",
      year: "6th Standard",
      title: "First Competitive Football Match Exposure",
      description: "Selected for the school football team. Faced our first outside-world competitive match; we lost that game, but it ignited my lifelong love for teamwork and resilience under pressure.",
      icon: "football",
      tag: "sport"
    },
    {
      id: "std-8",
      year: "8th Standard",
      title: "Joined Bharat Scouts & Guides",
      description: "Enrolled in Scouts and Guides, embarking on outdoor survival skills, squad discipline, pioneering, and civic responsibility.",
      icon: "scout",
      tag: "scouts"
    },
    {
      id: "std-9",
      year: "9th Standard",
      title: "Coonoor State Camp & Double Recognition",
      description: "Trained in the mountain cloud-climate of Coonoor. The Tirupur team clinched 2nd place in march-past drills, and secured 3rd place in camp event competitions.",
      icon: "trophy",
      tag: "scouts"
    },
    {
      id: "std-10",
      year: "10th Standard",
      title: "School First in 10th Board Exams",
      description: "Ranked 1st in Avinashi Boys School with 472/500 marks, setting the benchmark for academic diligence and analytical rigor.",
      icon: "book",
      tag: "academic"
    },
    {
      id: "std-11",
      year: "11th Standard",
      title: "Essay Prize, Reward Tour & State Quiz",
      description: "Won a top placing in the regional essay competition followed by an accommodation-sponsored reward tour with friends. Also stepped up to compete in the prestigious state-level quiz program.",
      icon: "mic",
      tag: "competition"
    },
    {
      id: "std-12",
      year: "12th Standard",
      title: "Higher Secondary Excellence & CIT Admission",
      description: "Scored 553/600 with an engineering cutoff of 187/200, securing merit admission to Coimbatore Institute of Technology (CIT).",
      icon: "cap",
      tag: "academic"
    },
    {
      id: "college",
      year: "Present Day",
      title: "B.E. Mechanical Engineering @ CIT",
      description: "Immersed in workshop practice, machine design concepts, and engineering fundamentals at CIT, working toward becoming an industry-ready mechanical engineer.",
      icon: "gear",
      tag: "college"
    }
  ],
  achievements: [
    {
      id: "rajya-puraskar",
      title: "Rajya Puraskar (Governor's Award)",
      detail: "Conferred the highest state honor in Bharat Scouts & Guides by the Governor of Tamil Nadu, Thiru R. N. Ravi.",
      grade: "State Governor's Honor",
      featured: true,
      icon: "Award"
    },
    {
      id: "school-first-10th",
      title: "School First Rank — 10th Board",
      detail: "Achieved top academic ranking across the entire school with 472/500 marks.",
      grade: "Academic Rank 1",
      featured: false,
      icon: "GraduationCap"
    },
    {
      id: "coonoor-marchpast",
      title: "2nd Place — March-Past Drill",
      detail: "Represented Tirupur district at the Coonoor Camp and marched to 2nd place among competing districts.",
      grade: "District Runner-up",
      featured: false,
      icon: "Medal"
    },
    {
      id: "coonoor-event-3rd",
      title: "3rd Place — Coonoor Camp Event",
      detail: "Awarded 3rd place in state camp tactical event evaluation amidst tough regional competition.",
      grade: "Podium Finish",
      featured: false,
      icon: "Trophy"
    },
    {
      id: "essay-competition",
      title: "Essay Competition Winner",
      detail: "Won a distinguished position in the regional essay competition, rewarded with an all-inclusive educational tour.",
      grade: "Prize Winner",
      featured: false,
      icon: "FileText"
    },
    {
      id: "football-exposure",
      title: "School Football Squad Debut",
      detail: "Selected for 6th standard school football squad, developing early mental toughness and field discipline.",
      grade: "Athletic Debut",
      featured: false,
      icon: "Activity"
    },
    {
      id: "quiz-participation",
      title: "State-Level Quiz Participant",
      detail: "Represented school in higher secondary general knowledge and science quiz competition.",
      grade: "School Representative",
      featured: false,
      icon: "Compass"
    }
  ],
  scores: [
    {
      id: "score-10th",
      label: "10th Board Exam",
      value: 472,
      outOf: 500,
      note: "School First Rank (94.4%)"
    },
    {
      id: "score-12th",
      label: "12th Board Exam",
      value: 553,
      outOf: 600,
      note: "Higher Secondary (92.2%)"
    },
    {
      id: "score-cutoff",
      label: "TNEA Engineering Cutoff",
      value: 187,
      outOf: 200,
      note: "Merit Seat at CIT"
    }
  ],
  skills: [
    "Teamwork & Collaboration",
    "Discipline & Focus",
    "Scout Leadership",
    "Grit & Resilience",
    "Public Speaking & Writing",
    "Analytical Problem Solving",
    "Mechanical Workshop Practice",
    "Learning CAD & 3D Modeling"
  ]
};

/**
 * Validates the profile dataset in development mode to catch schema issues early.
 * Follows BACKEND_SCHEMA.md specifications.
 */
export function validateProfile(profile: Profile): void {
  if (!import.meta.env.DEV) return;

  const errors: string[] = [];

  if (!profile.name) errors.push("Missing name");
  if (!profile.email) errors.push("Missing email");

  // Check unique IDs in arrays
  const checkUniqueIds = (arr: { id: string }[], name: string) => {
    if (!Array.isArray(arr)) {
      errors.push(`${name} is not an array`);
      return;
    }
    const ids = new Set<string>();
    for (const item of arr) {
      if (!item.id) errors.push(`Item in ${name} has no id`);
      if (ids.has(item.id)) errors.push(`Duplicate id in ${name}: ${item.id}`);
      ids.add(item.id);
    }
  };

  checkUniqueIds(profile.milestones, "milestones");
  checkUniqueIds(profile.achievements, "achievements");
  checkUniqueIds(profile.scores, "scores");

  // Validate socials URLs
  if (Array.isArray(profile.socials)) {
    for (const s of profile.socials) {
      if (!s.url.startsWith("https://")) {
        errors.push(`Social URL must start with https://: ${s.url}`);
      }
    }
  }

  // Validate scores
  if (Array.isArray(profile.scores)) {
    for (const score of profile.scores) {
      if (score.value < 0 || score.value > score.outOf) {
        errors.push(`Score invalid range: ${score.label} (${score.value}/${score.outOf})`);
      }
    }
  }

  if (errors.length > 0) {
    console.error("[profile] invalid:", errors);
  }
}

// Dev-only validation check on import
validateProfile(profileData);

