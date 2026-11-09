export type MilestoneIcon = "football" | "scout" | "book" | "trophy" | "mic" | "cap" | "gear";

export type MilestoneTag = "sport" | "scouts" | "academic" | "competition" | "college";

export type Milestone = {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: MilestoneIcon;
  tag?: MilestoneTag;
};

export type Achievement = {
  id: string;
  title: string;
  detail: string;
  grade?: string;
  featured?: boolean;
  icon: string;
};

export type Score = {
  id: string;
  label: string;
  value: number;
  outOf: number;
  note?: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  role: string;
  college: string;
  school: string;
  email: string;
  socials: SocialLink[];
  milestones: Milestone[];
  achievements: Achievement[];
  scores: Score[];
  skills: string[];
  tagline: string;
  aboutStory: string[];
  currentGoals: string[];
};

