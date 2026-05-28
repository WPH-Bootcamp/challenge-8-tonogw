import { end2endItems, end2endHeader } from "../../data/end2end";

export default function End2EndSection() {
  return (
    <section
      id="end2end"
      className="
      px-4
      w-full
        bg-white
        dark:bg-black
          dark:text-white 
          py-24
          "
    >
      {/* CONTAINER SECTION E2E */}
      <div
        className="
      font-quicksand 
      text-center
      bg-white
        dark:bg-black"
      >
        <h2
          className="
          text-[28px]
        md:text-4xl
        font-bold
          text-gray-900
          dark:text-white
        "
        >
          {end2endHeader.title}
        </h2>
        <p
          className="
          
        mt-4 
        text-[14px]
        md:text-lg
          text-gray-800
          dark:text-gray-400
        "
        >
          {end2endHeader.description}
        </p>
      </div>
      {/* CARD CIRCLE SHAPE */}
      <div
        className="
      mt-20
      flex
      flex-wrap
      justify-center
      gap-4
      md:gap-6        
      "
      >
        {end2endItems.map((e2e) => (
          <div
            key={e2e.id}
            className="
            flex flex-col
            items-center
            justify-center
            aspect-square
            w-43
            h-43
            md:w-52
            md:h-52
            lg:w-68.75
            lg:h-68.75
            rounded-full
            border
          border-[#DEDCDC]
          dark:border-[#181D27]
          bg-[#FAFAFA]
          dark:bg-[#0A0D12]
            text-center
            p-6
            "
          >
            <p
              className="
            lg:text-5xl
            font-bold
            text-[#FF623E]
            "
            >
              {e2e.icon}
            </p>
            {/* TITLE */}
            <p
              className="
              text-wrap
            text-sm
            md:text-base
            lg:text-xl 
            font-semibold text-gray-900 dark:text-white
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
