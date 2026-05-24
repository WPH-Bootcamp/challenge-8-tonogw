import { brandLogos } from "../../data/partners";

export default function BrandLogosSection() {
  return (
    <section
      id="about"
      className="
      bg-white
       dark:bg-black
        py-20
        "
    >
      <div className="py-6 mx-auto max-w-7xl lg:px-8">
        {/* SECTION TITLE */}
        <div className="mb-14 text-center">
          <h2
            className="
          text-[16px]
            lg:text-lg font-semibold text-gray-900
           dark:text-white
           "
          >
            Trusted by Global Innovators & Leading Brands
          </h2>
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-10  sm:gap-x-10 lg:max-w-none lg:flex"> */}
        <div className="relative">
          {/* FADE LEFT */}
          <div
            className="
          pointer-events-none 
          absolute 
          left-0 
          top-0 
          z-10 
          h-full 
          w-24 
          bg-linear-to-r
           from-white
            dark:from-black
             to-transparent
             "
          />
          {/* FADE RIGHT */}
          <div
            className="
          pointer-events-none
           absolute
            right-0
             top-0
              z-10
               h-full
                w-24
                 bg-linear-to-l
                  from-white
                   dark:from-black
                    to-transparent
                    "
          />
          {/* LOGO CAROUSEL */}
          <div
            className="
          flex
           items-center
            gap-16 
            overflow-x-auto
             scroll-smooth
              whitespace-nowrap 
              scrollbar-hide
              py-4
              "
          >
            {brandLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.image}
                alt={logo.name}
                width={120}
                height={40}
                // HOVER TO RETURN BACK COLOR INTO ITS ORIGINAL
                className="
                  h-10
                  w-auto
                  shrink-0

                  object-contain 
                  
                  saturate-0   
                  hover:brightness-120 
                  hover:saturate-100 
                  hover:bg-blend-lighten"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
