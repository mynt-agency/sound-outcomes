/** Shared marketing content for the platform site. */

export const PUBLISHERS = [
  "Spotify",
  "iHeartRadio",
  "Pandora",
  "SiriusXM",
  "SoundCloud",
  "TuneIn",
  "Univision",
];

export const REACH_STAT = "170M+";
export const MIN_BUDGET = "$250";

export const STEPS = [
  {
    icon: "dollar",
    title: "Set your budget & schedule",
    body: "Choose how much to spend and when your campaign runs. Start from $250, with no contracts and no long-term commitment.",
  },
  {
    icon: "upload",
    title: "Add your audio ad",
    body: "Upload your own spot, generate one free with synthetic voice in seconds, or have a real voice actor record it for $10 with 24-hour turnaround.",
  },
  {
    icon: "sliders",
    title: "Choose your audience",
    body: "Target by age, gender, location, device, language, music and podcast genre, plus hundreds of interests and behavioral segments. Then launch.",
  },
] as const;
