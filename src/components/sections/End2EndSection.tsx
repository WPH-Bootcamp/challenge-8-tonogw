import { end2endItems, end2endHeader } from "../../data/end2end";

export default function End2EndSection() {
  return (
    <section
      id="end2end"
      className="w-full  bg-white dark:bg-gray-900 dark:text-white py-24"
    >
      {/* CONTAINER SECTION E2E */}
      <div className="text-center">
        <h2
          className="
        text-4xl font-bold text-gray-900 dark:text-white
        "
        >
          {end2endHeader.title}
        </h2>

        <p
          className="
        mt-4 text-lg text-gray-400 dark:text-gray-400
        "
        >
          {end2endHeader.description}
        </p>
      </div>

      {/* CARD CIRCLE SHAPE */}
      <div
        className="
      mt-20  flex flex-wrap items-center justify-center gap-10
      "
      >
        {end2endItems.map((e2e) => (
          <div
            key={e2e.id}
            className="
            flex  flex-col items-center justify-center
            rounded-full border border-gray-200 bg-white dark:bg-gray-800
            text-center shadow-rm"
          >
            {/* ICON */}
            <img
              src={e2e.icon}
              alt={e2e.title}
              className="mb-6  w-auto object-contain
            "
            />

            {/* TITLE */}
            <p
              className="
            text-2xl font-semibold text-gray-900 dark:text-white
            "
            >
              {e2e.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
