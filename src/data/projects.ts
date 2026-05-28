import type { Project } from "../types";
import willy from "../assets/Porto_Willy_Nielsen.png";
import thierry from "../assets/Porto_Thierry.png";
import delon from "../assets/Porto_delonLorenzo.png";

export const ProjectHeader = {
  title: "From Vision to Launch! Projects We're Proud Of",
  subtitle:
    "Take a closer look at our recent work powering startups, enterprises, and everything in between.",
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Willy Nielsen",
    portofolio: "Portofolio 1",
    image: willy,
  },

  {
    id: 2,
    name: "Thierry",
    portofolio: "Portofolio 2",
    image: thierry,
  },

  {
    id: 3,
    name: "Delon Lorenzo",
    portofolio: "Portofolio 3",
    image: delon,
  },
];
