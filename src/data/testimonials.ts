import type { Testimonial } from "../types";
import Sarah from "../assets/profile/Sarah_Tan.png";
import Emily from "../assets/profile/Emily_Chen.png";
import John from "../assets/profile/John_Lee.png";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Tan",
    role: "Product Manager",
    company: "Finovate",
    message:
      '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch."',
    rating: 5,
    image: Sarah,
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Marketing Head",
    company: "Tech Solution",
    message:
      "“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”",
    rating: 5,
    image: Emily,
  },
  {
    id: 3,
    name: "John Lee",
    role: "Creative Director",
    company: "Innovate Corp",
    message:
      '"Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively."',
    rating: 5,
    image: John,
  },
];
