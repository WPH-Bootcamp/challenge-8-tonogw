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
              grid grid-cols-2 gap-4
      md:grid-cols-4
      mt-20   flex-wrap items-center justify-center 
      "
      >
        {end2endItems.map((e2e) => (
          <div
            key={e2e.id}
            // className="
            // sm:w-40 sm:h-40
            // md:w-48 md:h-48
            // lg:w-68 lg:h-68
            // gap-1
            // flex sm:grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center
            // rounded-full border border-[#DEDCDC] dark:border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12]
            // text-center shadow-rm pb-4"

            className="
            flex flex-col
            items-center
            justify-center

            aspect-square
            w-full
            max-w-[220px]

            mx-auto

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
            {/* ICON */}
            <img
              src={e2e.icon}
              alt={e2e.title}
              className="mb-4  w-11 h-11 object-contain
            "
            />

            {/* TITLE */}
            <p
              className="
              text-wrap
            text-[14px] 
            md:text-xl font-display text-gray-900 dark:text-white
            "
            >
              {e2e.title}
            </p>
          </div>
        ))}
      </div>

      {/* <!-- Hero Card --> */}
      <div
        className="
      bg-white
       dark:bg-slate-800 
       rounded-2xl p-6 shadow-sm border
        border-slate-100
         dark:border-slate-700
          transition-colors duration-300
          "
      >
        <div
          className="
        flex items-start 
        gap-4
        "
        >
          <div
            className="
          w-12 h-12 bg-blue-500 
          rounded-2xl 
          flex-shrink-0 
          flex items-center 
          justify-center
           text-white
            text-xl 
            font-black
            "
          >
            B
          </div>
          <div>
            <h2
              className="
              p-2
              bg-gray-500
              rounded-2xl
            text-lg 
            font-bold
             text-slate-900
              dark:text-white"
            >
              Selamat Belajar Tailwind!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <script>
    function toggleDark() {
      const html = document.documentElement;
      html.classList.toggle('dark');

      const isDark = html.classList.contains('dark');
      document.getElementById('toggle-icon').textContent = isDark ? '☀️' : '🌙';
      document.getElementById('toggle-text').textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
  </script> */
}
