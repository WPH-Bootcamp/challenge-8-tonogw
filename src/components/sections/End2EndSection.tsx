import { end2endItems, end2endHeader } from "../../data/end2end";

export default function End2EndSection() {
  return (
    <section
      id="end2end"
      className="w-full  bg-white dark:bg-black dark:text-white py-24"
    >
      {/* CONTAINER SECTION E2E */}
      <div className="font-quicksand text-center bg-white dark:bg-black">
        <h2
          className="
          
        text-4xl font-bold text-gray-900 dark:text-white
        "
        >
          {end2endHeader.title}
        </h2>

        <p
          className="
          
        mt-4 text-lg text-gray-400 dark:text-gray-400
        "
        >
          {end2endHeader.description}
        </p>
      </div>
      {/* CARD CIRCLE SHAPE */}
      <div
        className="
      mt-20  flex flex-wrap items-center justify-center gap-4
      "
      >
        {end2endItems.map((e2e) => (
          <div
            key={e2e.id}
            className="
            w-68 h-68
            flex  flex-col items-center justify-center
            rounded-full border border-[#DEDCDC] dark:border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12]
            text-center shadow-rm"
          >
            {/* ICON */}
            <img
              src={e2e.icon}
              alt={e2e.title}
              className="mb-6  w-auto object-contain
            "
            />

            {/* TITLE */}
            <p
              className="
            text-2xl font-display text-gray-900 dark:text-white
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
