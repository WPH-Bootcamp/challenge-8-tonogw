import { questionnaires } from "../../data/questionnaires";
import { FAQHeader } from "../../data/questionnaires";
import { Minus, Plus } from "lucide-react";

import { useState } from "react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section
      id="faq"
      className="
        bg-white
        dark:bg-black
        mx-4
        lg:mx-30
        "
    >
      {/* HEADER */}
      <div
        className="
            grid grid-cols-1 lg:grid-cols-3 gap-4
            
            "
      >
        <div
          className="
        grid-cols-1 lg:w-82.75 
        
        "
        >
          <h2
            className="
          text-[28px] lg:text-[40px]
          font-bold
          dark:text-white
          "
          >
            {FAQHeader.title}
          </h2>
        </div>
        <div
          className="col-span-2 mb-6
        flex items-end
        justify-end
        
        "
        >
          <p
            className="
            lg:w-61.25
             align-bottom
            text-right
          text-sm
          lg:text-lg
          text-[#717680]
         
          dark:text-white
          "
          >
            {FAQHeader.subtitle}
          </p>
        </div>
        {/* QUESTIONNAIRES */}
        {/* WITH VALIDATION PLUS / MINUS */}
        <div
          className="
        mt-16
        lg:col-span-2
        flex flex-col
      
        "
        >
          {questionnaires.map((item) => (
            <div
              key={item.id}
              className="
             
             border-y border-[#E4E7EC]
             dark:border-[#252B37]
             bg-[#FAFAFA]
             dark:bg-gray-900
             py-7
             
             lg:col-span-2
             "
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="
            flex w-full
            justify-between
            "
              >
                <h3
                  className="
                text-left text-base lg:text-lg font-semibold
                dark:text-white
                "
                >
                  {item.question}
                </h3>

                <div
                  className="
                shrink-0
                text-gray-900
                dark:text-white
                "
                >
                  {openId === item.id ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </div>
              </button>

              {/* ANSWER */}
              {openId === item.id && (
                <p
                  className="
                    mt-4 text-sm leading-relaxed
                    dark:text-[#A4A7AE]
                    "
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div
          className="
          mt-20
          bg-[#CC4E32]
          ml-18
          rounded-2xl
          lg:rounded-3xl

        "
        >
          test
        </div>
      </div>
    </section>
  );
}
