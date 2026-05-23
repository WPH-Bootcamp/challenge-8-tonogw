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
    description: "Service description here...",
    icon: one,
  },

  {
    id: 2,
    title: "Planning & Strategy",
    description: "",
    icon: two,
  },

  {
    id: 3,
    title: "Design & Prototyping",
    description: "",
    icon: three,
  },

  {
    id: 4,
    title: "Development & Implementation",
    description: "",
    icon: four,
  },

  {
    id: 5,
    title: "Testing & Optimization",
    description: "",
    icon: five,
  },

  {
    id: 6,
    title: "Launch & Growth",
    description: "",
    icon: six,
  },
  // Add more services...
];
