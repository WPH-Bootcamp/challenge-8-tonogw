import heroImage from "../../assets/heroright_dark.png";

import { companyInfo } from "../../data/company";

export default function HeroSection() {
  return (
    // HERO CONTAINER
    <section
      id="hero"
      className="
    w-full
    bg-white
     text-gray-900
      dark:bg-gray-900
       dark:text-white
    "
    >
      <div
        className="
    mx-auto
    flex
    max-w-7xl

    flex-col
    items-center
    justify-between
    gap-16

    px-6
    py-24

    lg:flex-row
    lg:px-8
    "
      >
        {/* HERO LEFT CONTENT */}
        <div
          className="
      max-w-162
      flex-1

      "
        >
          <h1
            className="
      text-5xl
      font-bold
      leading-tight

      lg:text-7xl
      "
          >
            {companyInfo.tagline.split("for")[0]}for
            <span
              className="
            block text-[#FF623E]
            "
            >
              {companyInfo.tagline.split("for")[1]}
            </span>
          </h1>

          <p
            className="
          mt-8
          max-w-145
          text-lg
          leading-relaxed

          bg-white
          text-gray-900

          dark:bg-gray-900
          dark:text-white
          "
          >
            {companyInfo.description}
          </p>

          <button
            className="
          mt-10
          flex
          h-14
          w-45

          items-center
          justify-center

          rounded-full
          bg-[#FF623E]

          text-lg
          font-semibold

          transition
          duration-300

          hover:scale-105

          "
          >
            Let's Talk
          </button>
        </div>

        {/* HERO IMAGE RIGHT */}
        <div
          className="
        flex
        flex-1
        justify-center

        "
        >
          <img
            src={heroImage}
            alt="Hero Image"
            className="
          w-full
          max-w-150

          object-contain
          "
          />
        </div>
      </div>
    </section>
  );
}
