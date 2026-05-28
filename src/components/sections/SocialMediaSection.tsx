import fb from "../../assets/logo/fb.png";
import ig from "../../assets/logo/ig.png";
import ttok from "../../assets/logo/tiktok.png";
import lin from "../../assets/logo/linkedin.png";

import darkFB from "../../assets/logo/fb-light.png";
import darkIN from "../../assets/logo/linkedin-light.png";
import darkTtok from "../../assets/logo/tiktok-light.png";
import darkIG from "../../assets/logo/ig-light.png";

export default function SocialMediaSection() {
  return (
    <div className="justify-start  lg:pe-0">
      {/* DARK MODE */}
      <div className=" hidden dark:flex gap-4 h-10  lg:justify-between text-gray-900 dark:text-white">
        <a href="https://facebook.com" target="blank">
          <img
            src={darkFB}
            alt="facebook"
            className="bg-gray-800 rounded-full border border-gray-600"
          />
        </a>
        <a href="https://instagram.com" target="blank">
          <img
            src={darkIG}
            alt=""
            className="bg-gray-800 rounded-full border border-gray-600"
          />
        </a>
        <a href="https://linkedin.com" target="blank">
          <img
            src={darkIN}
            alt="linkedin"
            className="bg-gray-800 rounded-full border border-gray-600"
          />
        </a>
        <a href="https://tiktok.com" target="blank">
          <img
            src={darkTtok}
            alt="tiktok"
            className="bg-gray-800 rounded-full border border-gray-600"
          />
        </a>
      </div>

      {/* LIGHT MODE */}
      <div className="flex dark:hidden gap-4 h-10 justify-end text-gray-900 dark:text-white">
        <a href="https://facebook.com" target="blank">
          <img
            src={fb}
            alt="facebook"
            className="bg-gray-300 rounded-full border border-gray-400"
          />
        </a>
        <a href="https://instagram.com" target="blank">
          <img
            src={ig}
            alt=""
            className="bg-gray-300 rounded-full border border-gray-400"
          />
        </a>
        <a href="https://tiktok.com" target="blank">
          <img
            src={ttok}
            alt="tiktok"
            className="bg-gray-300 rounded-full border border-gray-400"
          />
        </a>
        <a href="https://linkedin.com" target="blank">
          <img
            src={lin}
            alt="linkedin"
            className="bg-gray-300 rounded-full border border-gray-400"
          />
        </a>
      </div>
    </div>
  );
}
