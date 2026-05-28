import { services } from "../../data/services";

import { useState } from "react";
import Popup from "../layout/Popup";

export default function LetsTalkSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [popup, setPopup] = useState<boolean | null>(null);

  const handleSend = () => {
    // SIMULATE FORM SUBMISSION (TRUE = SUCCESS, FALSE = FAILED)
    const isValid = fullName.trim() && email.trim() && message.trim();

    setPopup(!!isValid);

    setTimeout(() => {
      setPopup(null);
    }, 3000);
  };

  return (
    <section
      id="letstalk"
      className="py-16 lg:py-20 px-4 md:px-20  dark:bg-black dark:text-white"
    >
      {popup !== null && <Popup type={popup} />}
      {/* HEADER */}
      <div className="text-center">
        <h2
          className="
        text-[28px]
        lg:text-[40px]
        text-[#0A0D12]
        dark:text-[#FDFDFD]
        font-bold

        "
        >
          Ready to Start? Let's Talk.
        </h2>
        <p
          className="
          text-[#717680]
        dark:text-[#A4A7AE]
        "
        >
          Tell us what you need, and we'll get back to you soon.
        </p>
      </div>

      <div className="mx-auto w-full max-w-161">
        <div className="grid grid-cols-1 text-base">
          <h4 className="pt-12 text-sm font-bold">Name</h4>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
            className="lg:py-4 text-sm h-12 border border-gray-400 dark:border-[#252B37] rounded-xl"
          />
          <h4 className="pt-5 text-sm font-bold">Email</h4>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="py-4 text-sm h-12 border border-gray-400 dark:border-[#252B37] rounded-xl"
          />
          <h4 className="pt-5 text-sm font-bold">Message</h4>
          <textarea
            name="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="textarea"
            className="py-4 pt-5 text-sm min-h-33.5 border border-gray-400 dark:border-[#252B37] rounded-xl"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* SERVICES */}
        <div className="mt5">
          <h4 className="pt-5 font-bold text-sm">Services</h4>

          {/* 3 COLUMNS LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* FIRST COLUMN */}
            <div className="lg:col-span-2">
              {/* CHECKBOX */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {services.map((item) => (
                  <label
                    key={item.id}
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >
                    <input
                      type="checkbox"
                      className="
                        h-4 w-4
                        appearance-none
                        
                        dark:checked:bg-[#FF623E]
                        checked:bg-[#FF623E]
                        dark:bg-[#1a1a1a]
                        accent-[#FF623E] 
                        border border-gray-300
                        dark:border-[#252B37]
                        focus:ring-0
                        focus:outline-none
                        cursor-pointer
                        "
                    />
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* EMPTY COLUMN */}
            <div></div>
            <button
              onClick={handleSend}
              className="
                col-span-3
                mt-10 
                h-12 rounded-full
                bg-[#FF632E]
                text-white 
                font-bold"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
