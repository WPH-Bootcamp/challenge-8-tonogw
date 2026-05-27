import { processes, ProcessHeader } from "../../data/proceses";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function OurProcessSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  return (
    <section
      id="services"
      className="
    bg-[#FFFFFF]
    text-gray-900
    text-center

    dark:bg-black
    dark:text-[#FDFDFD]
    py-3
    px-4

    "
    >
      {/* OUR PROCESS HEADER  */}
      <div>
        <h2
          className="
          font-bold
            text-[28px] md:text-[34px] py-2 lg:text-[40px]
      "
        >
          {ProcessHeader.title}
        </h2>

        <p
          className="
        text-sm md:text-base lg:text-lg
      text-gray-900
      dark:text-[#A4A7AE]
      py-2
      pb-4
      "
        >
          {ProcessHeader.description}
        </p>
      </div>

      {/* OUR SERVICES LIST */}

      <div
        className="
      mx-auto max-w-6xl
    
      "
      >
        {/* WITH VALIDATION ODD/EVEN NUMBER */}
        {processes.map((item, index) => {
          const isOdd = index % 2 === 0;

          return (
            <div
              key={item.id}
              className="
            relative
            mb-12

            grid
            grid-cols-[60px_1fr]
            
            items-center
            

            lg:grid-cols-[1fr_60px_1fr]
         "
            >
              {/* DESKTOP LEFT CARD */}
              <div
                className={`
            hidden
            lg:block
            justify-end
            ${isOdd ? "justify-end" : "justify-start"}
            `}
              >
                {isOdd && (
                  <div
                    className={`
                    
                    w-full
                    sm:max-w-77.25

                    lg:max-w-133
                    
                    rounded-2xl
                    border
                    border-gray-200

                    bg-[#FAFAFA]
                
                    shadow-sm

                    dark:border-gray-800
                    dark:bg-[#0A0D12]
                
                ${openId === item.id ? "h-29" : "min-h-20.5"}

                `}
                  >
                    <div
                      className="
                flex 
                items-start
                justify-between
                p-1
                "
                    >
                      <h3
                        className="
                        pt-4
                    text-left
                        text-base
                        lg:text-xl
                    font-bold
                    "
                      >
                        {item.title}
                      </h3>

                      <button
                        onClick={() =>
                          setOpenId(openId === item.id ? null : item.id)
                        }
                        className="
                   
                    text-gray-900
                    dark:text-white
                    transition-transform
                    duration-300

                    "
                      >
                        {openId === item.id ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </button>
                    </div>

                    {openId === item.id && (
                      <p
                        className="
                        
                mt-4
                text-gray-600
                dark:text-gray-400
                text-left
                "
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* CENTER  */}
              <div
                className="
            relative
            flex
            flex-col
            items-center
            "
              >
                {/* LINE */}
                {index !== processes.length - 1 && (
                  <div
                    className="
                absolute
                top-10
                lg:top-12
                h-27
                bottom-0
                w-0.5
                bg-[#DFDFDF]
                dark:bg-[#252B37]
                "
                  />
                )}

                {/* NUMBER  */}
                <div
                  className="
            z10 flex 
            text-xs lg:text-base
            font-bold
            h-[40px] w-[40px]
            lg:h-12 lg:w-12
            items-center
            justify-center

            rounded-full
            bg-[#FF623E]
            
            text-white
            "
                >
                  {item.id}
                </div>
              </div>

              {/* DESKTOP RIGHT CARD */}
              <div
                className={`
                    
                    hidden
                    lg:block
                    justify-start
                    ${isOdd ? "justify-start" : "justify-end"}

                    `}
              >
                {!isOdd && (
                  <div
                    className={`
                        w-full
                        max-w-133
                        rounded-2xl
                        border
                        border-gray-200
                        bg-[#FAFAFA]
                        
                        shadow-sm

                        dark:border-gray-800
                        dark:bg-[#0A0D12]
                        ${openId === item.id ? "h-29" : "min-h-20.5"}
                        `}
                  >
                    <div
                      className="
                    flex items-start justify-between
                    p-1
                    "
                    >
                      <h3
                        className="

                        pt-4
                        text-left
                        text-base
                        lg:text-xl font-bold
                        "
                      >
                        {item.title}
                      </h3>

                      <button
                        onClick={() =>
                          setOpenId(openId === item.id ? null : item.id)
                        }
                        className="
                   
                    text-gray-900
                    dark:text-white
                    transition-transform
                    duration-300

                    "
                      >
                        {openId === item.id ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </button>
                    </div>

                    {openId === item.id && (
                      <p
                        className="
                        p-1
                      text-left
                    mt-4
                    text-gray-400
                    dark:text-gray-200
                    "
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* MOBILE CARD */}
              <div
                className="
            lg:hidden
            "
              >
                <div
                  className={`
                  
                  w-full
                  sm:max-w-77.25
                  md:max-w-167.5
            rounded-2xl
            border
            border-gray-200

            bg-[#FAFAFA]
            
            shadow-sm

            dark:border-gray-800
            dark:bg-[#0A0D12]
             ${openId === item.id ? "h-23.5" : "h-15"}
            
            p-4 

            `}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-left text-base lg:text-lg font-bold">
                      {item.title}
                    </h3>
                    <button
                      onClick={() =>
                        setOpenId(openId === item.id ? null : item.id)
                      }
                      className="
                   
                    text-gray-900
                    dark:text-white
                    transition-transform
                    duration-300

                    "
                    >
                      {openId === item.id ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>

                  {openId === item.id && (
                    <p
                      className="
                    text-left
                mt-3 text-sm
                text-gray-600 dark:text-gray-400
                "
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
