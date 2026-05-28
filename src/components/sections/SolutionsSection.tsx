import { solutions, solutionHeader } from "../../data/solutions";

export default function SolutionSection() {
  return (
    <section
      id="solutions"
      className="
    bg-white dark:bg-black py-2 px-6
    "
    >
      {/* HEADER */}
      <div
        className="
      text-center 
      "
      >
        {/* TITLE */}
        <h2
          className="
          text-[28px] lg:text-[40px] font-bold 
      text-gray-900 dark:text-white md:text-[40px] "
        >
          {solutionHeader.title}
        </h2>

        {/* SUBTITLE */}
        <p
          className="
        text-sm md:text-lg 
        font-medium dark:text-gray-400
        "
        >
          {solutionHeader.description}
        </p>
      </div>

      {/* GRID WRAPPER */}
      <div
        className="
        mx-auto mt-16 grid max-w-360
        grid-cols-1 gap-10
        md:grid-cols-2
        lg:grid-cols-3
        "
      >
        {/* FETCH DATA */}
        {solutions.map((sols) => (
          <div
            key={sols.id}
            className="
            relative
            "
          >
            <div
              className="
              text-left 
              bg-[#FAFAFA] dark:text-white
              dark:bg-[#0A0D12]
              rounded-2xl
              p-px
              border 
              border-[#DEDCDC] 
              dark:border-[#181D27]
              
              
              hover:bg-linear-to-r
              hover:from-[#FF6C37]
              hover:to-[#DEDCDC]
                transition-all
                duration-300
              cursor-pointer
              "
            >
              {/* WRAPPER */}
              <div
                className="
                relative
                rounded-2xl

                bg-[#FAFAFA]
                dark:bg-[#0A0D12]

                dark:text-white
                w-full
                "
              >
                {/* ICON SOLUTION */}
                <img
                  src={sols.icon}
                  alt={sols.title}
                  className="
                absolute
                -top-8
                pl-5
              "
                />

                {/* SOLUTION TITLE */}
                <h3
                  className="
                    pt-16
                  p-8
                  font-bold
                  text-nowrap
                  text-xl
                  "
                >
                  {sols.title}
                </h3>

                {/* SOLUTION DESCRIPTION */}
                <p
                  className="
                
                pl-8
                text-left
              text-[#717680]
              font-medium
              dark:text-white
              "
                >
                  {sols.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
