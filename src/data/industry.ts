import type { IndustryItem } from "../types";
import card from "../assets/industry/card.png";
import hand from "../assets/industry/handed.png";
import health from "../assets/industry/pills.png";

export const IndustryHeader = {
  title: "Built for your Industry",
  description:
    "We've helped companies across industries launch smarter, faster, and more securely.",
};

export const industryItems: IndustryItem[] = [
  {
    id: 1,
    slug: "fintech",
    title: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions - from digital wallets to core banking systems - tailored to modern financial needs.",
    image: card,
  },

  {
    id: 2,
    slug: "ecommerce",
    title: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: hand,
  },

  {
    id: 3,
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: health,
  },
];
