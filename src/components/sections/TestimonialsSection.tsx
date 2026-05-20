import { testimonial } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    // SECTION TESTIMONIALS HEIGHT max-h-723
    <section className="min-h-[723px] bg-white dark:bg-gray-900 flex py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl  font-semibold text-gray-900 dark:text-white">
            What Partners Say About Working With Us
          </h2>
        </div>
        <div className="flex gap-8 overflow-x-auto scroll-smooth  pb-4">
          {testimonial.map((item) => (
            <div
              key={item.personName}
              className="w-[85vw] sm:w-[350px] snap-center rounded-3xl bg-gray-100 dark:bg-gray-800 p-8 shadow-lg"
            >
              {/* TESTIMONI */}
              <p className="mb-8 text-left landing-relaxed text-gray-700 dark:text-gray-300">
                {item.testimoni}
              </p>
              {/* PERSON NAME */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.personName}
              </h3>
              <p className="text-sm text-gray-500">
                {item.role} from {item.partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
