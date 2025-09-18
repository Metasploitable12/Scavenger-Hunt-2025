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
    "Great start! Now look out for the page where you can learn how to report suspicious activities. Hint: The code is PHISH789",
    "Excellent! Head over to the document that shares insights baout the recent change sto our Trust Center for the next clue. Hint: The code is VAULT321",
    "Well done! Look for the next code on the document that gives you a quick tour of the Trust Center from the users perspective. Hint: The code is GUARD456 ",
    "Amazing progress! Find your next code on the document that walks you through the security review procedure for a new software purchase page. Hint: The code is CYBER999",
    "Outstanding! You're almost there! Check the InfoSec Services documentation for the final code. Hint: The code is CYBER999"
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
