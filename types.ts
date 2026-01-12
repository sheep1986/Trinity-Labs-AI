
export interface NavItem {
  label: string;
  path: string;
}

export interface PricingTier {
  name: string;
  description: string;
  features: string[];
  cta: string;
  for: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCase {
  industry: string;
  outcome: string;
  description: string;
}
