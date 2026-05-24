import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    // SECTION TESTIMONIALS HEIGHT max-h-723
    <section
      id="testimonials"
      className="
      
      w-full 
       bg-white
        dark:bg-black
         py-24
        "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-4xl  font-bold text-gray-900 dark:text-white">
            What Partners Say About Working With Us
          </h2>

          <p className="m-10 text-lg text-gray-500 dark:text-gray-400">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        <div className="relative">
          {/* FADE LEFT */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
          {/* FADE RIGHT */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />
          {/* CAROUSEL */}
          <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-20" />
          {/* TESTIMONIAL  */}
          <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-20">
            {testimonials.map((message) => (
              <div
                key={message.id}
                className="
              relative min-w-88 
              overflow-visible
              rounded-3xl border
                border-gray-600
                 dark:border-s-[#FF623E]
                  bg-white
                   dark:bg-[#0A0D12]
                    pb-20 shadow-sm
                    "
              >
                {/* QUOTE ICON */}

                <img
                  src={message.icon}
                  alt="quote icon "
                  className="
                          absolute 
                          -top-12
                          left-6
                          z-20
                          h-24 
                          w-24
                          object-contain
                          "
                />

                {/* RATING */}
                {message.rating && (
                  <p
                    className="
                  mb-6 pt-6 text-center text-2xl tracking-wide
                text-yellow-400
                "
                  >
                    {"★".repeat(message.rating)}
                  </p>
                )}

                {/* TESTIMONI */}
                <p className="mb-8 text-center leading-relaxed text-gray-700 dark:text-gray-300">
                  {message.message}
                </p>
                {/* PERSON NAME and */}
                <h3 className="mt-2 text-center  text-sm font-semibold text-gray-900 dark:text-white">
                  {message.name}
                </h3>
                {/* ROLE AND COMPANY NAME */}
                <p className="text-sm text-[#FF623E] flex justify-center">
                  {message.role} from {message.company}
                </p>

                {/* AVATAR */}
                <div className="mt-8 flex justify-center">
                  <img
                    src={message.avatar}
                    alt={message.name}
                    className="absolute -bottom-10  h-20 w-20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
