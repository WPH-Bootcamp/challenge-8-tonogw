import heroImage from "../../assets/heroright_dark.png";

import { companyInfo } from "../../data/company";

export default function HeroSection() {
  return (
    // HERO CONTAINER
    <section
      id="hero"
      className="
      px-2
    w-full
    bg-white
     text-gray-900
      dark:bg-black

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

    flex-1
    lg:px-8
    "
      >
        {/* HERO LEFT CONTENT */}
        <div
          className="
          px-6
      
      flex-2

      "
        >
          <h1
            className="
            px-6
            lg:px-0
      text-3xl
      font-bold
      leading-tight

      lg:text-[56px]
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
            px-6
          mt-8
          max-w-145
          text-[16px]
          leading-relaxed

          bg-white
          text-gray-900

          dark:bg-black
          dark:text-white
          "
          >
            {companyInfo.description}
          </p>

          <button
            className="
            w-90
          mt-10
          flex
          h-14
            lg:w-45

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
