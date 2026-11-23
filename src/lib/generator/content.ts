export const CONTENT = {
  productNames: { en: ["Wireless Headphones", "Smart Watch", "Ceramic Mug", "Desk Lamp", "Running Shoes", "Laptop Stand", "Water Bottle", "Bluetooth Speaker"] },
  productCategories: { en: ["Electronics", "Home", "Fashion", "Sports", "Office", "Beauty"] },
  jobTitles: { en: ["Frontend Developer", "Product Designer", "Data Analyst", "Marketing Manager", "DevOps Engineer", "Customer Success", "Backend Developer", "HR Specialist"] },
  departments: { en: ["Engineering", "Design", "Marketing", "Sales", "Operations", "People"] },
  postTitles: { en: ["Designing for speed", "Shipping smaller diffs", "A practical guide to forms", "Mocking APIs without pain", "Building reliable interfaces"] },
  reviewComments: { en: ["Really useful and easy to use.", "Great quality for the price.", "Arrived quickly, would buy again.", "Solid build, minor quirks.", "Exactly what I needed."] },
  bios: { en: ["Writes about design systems and product craft.", "Journalist covering technology and culture.", "Independent essayist and newsletter author.", "Technical writer focused on developer tools."] },
} as const;

export function contentList<K extends keyof typeof CONTENT>(key: K): readonly string[] {
  return CONTENT[key].en;
}
