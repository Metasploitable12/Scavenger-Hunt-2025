export interface GameConfig {
  codes: string[];
  hints: string[];
  title: string;
  rules: string[];
}

export const gameConfig: GameConfig = {
  codes: [
    "SEC2024A",
    "PHISH789",
    "VAULT321", 
    "GUARD456",
    "CYBER999"
  ],
  hints: [
    "Great start! Now check the Confluence page about phishing awareness to find your next code.",
    "Excellent! Head over to the password security guidelines page for the next clue.",
    "Well done! Look for the next code on the data protection policy page.",
    "Amazing progress! Find your next code on the incident response procedures page.",
    "Outstanding! You're almost there! Check the security training resources page for the final code."
  ],
  title: "Syncron Security Awareness Scavenger Hunt",
  rules: [
    "Navigate through the Syncron Internal Confluence space to find 5 hidden security codes",
    "Each code will be hidden within a logo",
    "Enter each code in the correct sequence to progress",
    "After each correct code, you'll receive a hint for the next location",
    "Complete all 5 codes to receive your unique completion code",
    "Share your completion code with the the InfoSec team to enter the prize draw!"
  ]
};

export const generateCompletionCode = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `SYNC-${timestamp}-${random}`.toUpperCase();
};
