import { solutions, solutionHeader } from "../../data/solutions";

export default function SolutionSection() {
  return (
    <section id="solutions" className="bg-white dark:bg-black">
      <div className="text-center font-bold text-gray-900 dark:text-white">
        <h2 className="text-[40px] font-bold">{solutionHeader.title}</h2>

        <p className="text-lg font-medium dark:text-gray-400">
          {solutionHeader.description}
        </p>
      </div>
      <div className="mx-auto max-w-360">
        {/*  */}
        {solutions.map((sols) => (
          <div
            key={sols.id}
            className="
            relative
                    grid sm:grid-cols-1 lg:grid-cols-3
                    "
          >
            <div className="text-left grid grid-cols-3 dark:text-white">
              <h3>{sols.title}</h3>
              <img src={sols.icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
