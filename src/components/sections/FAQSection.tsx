import { questionnaires } from "../../data/questionnaires";
import { FAQHeader } from "../../data/questionnaires";
import { Minus, Plus } from "lucide-react";
import imgConsult from "../../assets/consultation.png";
import { useState } from "react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section
      id="faq"
      className="
        bg-white
        dark:bg-black
        px-4
        lg:px-34
        lg:py-20
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
          className="col-span-2
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

         
          dark:text-[#A4A7AE]
          "
          >
            {FAQHeader.subtitle}
          </p>
        </div>
      </div>
      <div
        className="        
      grid grid-cols-1 lg:grid-cols-3
      gap-8 
      "
      >
        {/* QUESTIONNAIRES */}
        {/* WITH VALIDATION PLUS / MINUS */}
        <div
          className="
        mt-16
        lg:col-span-2
        flex flex-col      
        border-t 
        border-[#E4E7EC]
        dark:border-[#252B37]
        "
        >
          {questionnaires.map((item) => (
            <div
              key={item.id}
              className="
              border-b border-[#E4E7EC]
              dark:border-[#252B37]
              bg-[#FAFAFA]
              dark:bg-black
              py-7              
              lg:col-span-2
              "
            >
              {/* QUESTIONS */}
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="
                flex w-full
                justify-between
                "
              >
                <h3
                  className="
                text-left text-base lg:text-2xl font-semibold
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
                cursor-pointer
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
                    mt-4 text-sm lg:text-xl leading-relaxed
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
          w-full
          p-6
          bg-[#CC4E32]          
          rounded-2xl
          lg:rounded-3xl        
          dark:text-white
          lg:self-start
          "
        >
          <h3
            className="
              text-[28px]
              lg:text-[36px]
              text-white
              font-bold
              "
          >
            Let's talk it through
          </h3>
          <p
            className="
                mt-1
              text-lg
              text-white
              "
          >
            book a free consultation with our team
          </p>
          <img
            src={imgConsult}
            alt="Consultation"
            className="
              mt-6
              "
          />
          <a
            href="#letstalk"
            className="
            block
            w-full
            rounded-full
            mt-8
            bg-[#FFFFFF]
            font-bold
            p-2
            text-black
            cursor-pointer
            text-center
            "
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
