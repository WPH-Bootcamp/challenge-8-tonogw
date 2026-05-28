import type { Success } from "../types";
import sent from "../assets/icon/sent.png";
import failed from "../assets/icon/failed.png";

export const success: Success[] = [
  {
    id: "sent",
    success: true,
    title: "Message Received!",
    description:
      "Thanks for reaching out - we'll get back to you as soon as possible.",
    image: sent,
  },

  {
    id: "failed",
    success: false,
    title: "Oops! Something went wrong.",
    description:
      "We couldn't send your message. Please try again or check your connection.",
    image: failed,
  },
];
