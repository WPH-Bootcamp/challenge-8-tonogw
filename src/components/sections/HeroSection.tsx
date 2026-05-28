import heroImage from "../../assets/heroright_dark.png";
import heroImageLight from "../../assets/hero-light.png";
import { companyInfo } from "../../data/company";

export default function HeroSection() {
  return (
    // HERO CONTAINER
    <section
      id="hero"
      className="
      relative
      overflow-hidden
    bg-white
    text-gray-900
    dark:bg-black
    dark:text-white
    "
    >
      <div
        className="
        relative
        md:h-125
        lg:h-186.75
        flex
        flex-col
        lg:block
        "
      >
        {/* HERO LEFT CONTENT */}
        <div
          className="
          relative
          z-20
          px-6
          pt-20

          lg:max-w-180
          lg:pl-20
          lg:pt-40
          "
        >
          <h1
            className="
            z-20
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
            mt-8
            max-w-145
            text-[16px]
            leading-relaxed
            text-gray-900
            dark:text-white
            "
          >
            {companyInfo.description}
          </p>

          <a
            href="#letstalk"
            className="
              w-full
              mt-10
              flex
              h-11
              lg:h-14
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
          </a>
        </div>
      </div>

      {/* HERO IMAGE RIGHT */}
      <div
        className="
          mt-12
          lg:absolute
          lg:-top-24
          lg:right-0
          lg:mt-0
         "
      >
        {/* DARK IMAGE */}
        <img
          className="
          z-100
          hidden dark:block
          w-full
          object-contain
          lg:w-186.75
          "
          src={heroImage}
          alt="Hero Image"
        />

        {/* LIGHT IMAGE */}
        <img
          className="
          z-100
          block dark:hidden
          w-full
          object-contain
          lg:max-w-186.75
          "
          src={heroImageLight}
          alt="Hero Image"
        />
      </div>
    </section>
  );
}
