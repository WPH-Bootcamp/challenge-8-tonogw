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
    lg:flex-row
    items-center

    gap-16

   
   

    lg:px-8
    "
      >
        {/* HERO LEFT CONTENT */}
        <div
          className="
          px-6
      
     

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

          bg-white
          text-gray-900

          dark:bg-black
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

        {/* HERO IMAGE RIGHT */}
        <div
          className="
        flex
        flex-1
        justify-center

        "
        >
          <img
            className="
          hidden dark:block
          w-full
          object-contain
          lg:w-186.75
          lg:h-186.75
          "
            src={heroImage}
            alt="Hero Image"
          />

          <img
            className="
            block dark:hidden
            
          w-full
          object-contain
          md:w-186.75
          md:h-186.75
          "
            src={heroImageLight}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
