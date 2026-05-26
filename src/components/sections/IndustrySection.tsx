import { IndustryHeader, industryItems } from "../../data/industry";
import { useState } from "react";

export default function IndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState("fintech");

  const selectedIndustry = industryItems.find(
    (item) => item.slug === activeIndustry,
  );
  // useEffect(()=>{
  //     if (istryPage === "fintech") {
  //         document.documentElement.classList.add("fintech");
  //         document.documentElement.classList.remove("ecommerce");
  //         document.documentElement.classList.remove("healthcare");
  //     }
  // });

  return (
    <section
      id="industry"
      className="
        bg-white
        dark:bg-black
        py-24
        text-left
        "
    >
      {/* HEADER */}
      <div
        className="
      lg:px-35
      "
      >
        <h2
          className="
        
        
        text-[32px]


        lg:mt-12.5
        lg:py-7.5
        
        lg:text[40px]
         dark:text-[#FDFDFD]

         font-bold
         
         "
        >
          {IndustryHeader.title}
        </h2>
        <p
          className="
          font-medium
        text-sm
        text-[#717680]

        lg:py-7.5
        lg:text-lg

        dark:text-[#A4A7AE]
        
        
        "
        >
          {IndustryHeader.description}
        </p>
      </div>

      {/* CONTENT */}
      <div
        className="
      lg:px-35

      text-[#AAAAAA]
      dark:text-[#535862]
      lg:grid-cols-[240px_1fr]
      "
      >
        {/* LEFT MENU */}
        <div className="flex flex-col">
          {industryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveIndustry(item.slug)}
              className={`
                border-l-4
      
                py-5
                pl-4
                text-left
                text-2xl
                font-semibold
                transition-all
                duration-300

                ${
                  activeIndustry === item.slug
                    ? "border-[#FF623E] text-white"
                    : "border-gray-700 text-gray-500"
                }
            `}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/*  RIGHT CONTENT */}
        {/* FINTECH */}
        <div
          className="
                rounded-3xl
              
                
                p-8
              "
        >
          <p
            className="
                    text-lg
                    leading-relaxed
                    text-gray-900
                    dark:text-[#FDFDFD]
                    "
          >
            {selectedIndustry?.description}
          </p>

          <img
            src={selectedIndustry?.image}
            alt={selectedIndustry?.title}
            className="
                    mt-8
                    w-full
                    rounded-3xl
                    object-cover
                    "
          />
        </div>
      </div>
    </section>
  );
}
