export interface AffiliateOffer {
  id: string;
  nicheName: string;
  badgeText: string;
  productName: string;
  tagline: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  heroImage: string;
  productIntroImage: string;
  specialOfferImage: string;
  affiliateUrl: string;
  ctaText: string;
  secondaryCtaText: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercent: string;
  billingFrequency: string;
  guaranteeDays: number;
  customersCount: string;
  starRating: string;
  ratingCount: string;
  urgencyText: string;
  benefits: {
    iconName: string;
    title: string;
    description: string;
  }[];
  features: {
    iconName: string;
    title: string;
    description: string;
  }[];
  steps: {
    step: string;
    title: string;
    description: string;
    note: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    quote: string;
    highlight: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}
