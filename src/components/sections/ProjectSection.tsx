import { ProjectHeader } from "../../data/projects";
import { projects } from "../../data/projects";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="
        bg-white
        dark:bg-black
        "
    >
      {/* HEADER */}
      <div
        className="
      text-center
     text-gray-900
     dark:text-white
      "
      >
        <h2
          className="
          text-[28px]
        lg:text-[40px]
        font-bold
        "
        >
          {ProjectHeader.title}
        </h2>
        <p
          className="
        text-sm

        text-gray-900
        dark:text-[#A4A7AE]
        "
        >
          {ProjectHeader.subtitle}
        </p>
      </div>
      {/* CONTENT */}

      <div
        className="
        text-lg
         grid
      lg:grid-cols-3
      gap-4
       mx-4
        lg:mx-35
       
        "
      >
        {projects.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt=""
              className="
              w-90.25
             lg:w-93.25
             mt-4
             "
            />
            <h3
              className="
            text-[#FF623E]
            text-base
            font-medium
            "
            >
              {item.name}
            </h3>
            <p
              className="
            py-4
            text-base
            lg:text-xl
            font-bold
            
            text-[#0A0D12]
            dark:text-white
            "
            >
              {item.portofolio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
