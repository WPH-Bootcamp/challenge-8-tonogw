import type { SolutionItem } from "../types";
import uix from "../assets/solutions/web.png";
import web from "../assets/solutions/web.png";
import mobile from "../assets/solutions/mobile.png";
import cloud from "../assets/solutions/Cloud.png";
import software from "../assets/solutions/Software.png";
import ti from "../assets/solutions/TI.png";
import it from "../assets/solutions/it.png";
import qa from "../assets/solutions/qa.png";
import cs from "../assets/solutions/cs.png";

export const solutionHeader = {
  title: "Smart IT Solutions That Grow With You",
  description: "Tailored tech to boost efficiency, security, and results.",
};

export const solutions: SolutionItem[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly",
    icon: web,
  },

  {
    id: 2,
    title: "Mobile App Development",
    description: "Native & cross-platoform apps tailored to user needs",
    icon: mobile,
  },

  {
    id: 3,
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces",
    icon: uix,
  },

  {
    id: 4,
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth",
    icon: cloud,
  },

  {
    id: 5,
    title: "Software Development",
    description: "Custom solutions built around your business logic",
    icon: software,
  },

  {
    id: 6,
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    icon: ti,
  },

  {
    id: 7,
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security",
    icon: cs,
  },

  {
    id: 8,
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks",
    icon: qa,
  },

  {
    id: 9,
    title: "IT Consulting & SUpport",
    description: "Make smarter tech decisions with expert guidance",
    icon: it,
  },
];
