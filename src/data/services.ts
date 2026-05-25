import type { ServiceItem } from "../types";

import one from "../assets/icon/one.png";
import two from "../assets/icon/two.svg";
import three from "../assets/icon/three.png";
import four from "../assets/icon/four.svg";
import five from "../assets/icon/five.svg";
import six from "../assets/icon/six.png";

export const ServicesHeader = {
  title: "Our Process",
  description: "Clear steps. Smart execution. Results you can count on.",
};

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description: "Understand Your Needs & Goals",
    image: "1",
  },

  {
    id: 2,
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap",
    image: "2",
  },

  {
    id: 3,
    title: "Design & Prototyping",
    description: "Craft UX That Converts",
    image: "3",
  },

  {
    id: 4,
    title: "Development & Implementation",
    description: "Deliver With Speed & Precision",
    image: "4",
  },

  {
    id: 5,
    title: "Testing & Optimization",
    description: "Ensure Quality at Every Step",
    image: "5",
  },

  {
    id: 6,
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continously",
    image: "6",
  },
  // Add more services...
];
