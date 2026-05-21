import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    // SECTION TESTIMONIALS HEIGHT max-h-723
    <section className="w-full min-h-[723px] bg-white dark:bg-gray-900 flex py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl  font-semibold text-gray-900 dark:text-white">
            What Partners Say About Working With Us
          </h2>
        </div>
        <div className="overflow-x-auto scroll-smooth  pb-4">
          {testimonials.map((message) => (
            <div
              key={message.id}
              className="w-[85vw] sm:w-[350px] snap-center rounded-3xl bg-gray-100 dark:bg-gray-800 p-8 shadow-lg"
            >
              {/* RATING */}
              {message.rating && (
                <p className="text-white">{"★".repeat(message.rating)}</p>
              )}

              {/* TESTIMONI */}
              <p className="mb-8 text-left landing-relaxed text-gray-700 dark:text-gray-300">
                {message.message}
              </p>
              {/* PERSON NAME */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {message.name}
              </h3>
              <p className="text-sm text-gray-500">
                {message.role} from {message.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
