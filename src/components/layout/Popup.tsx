import { success } from "../../data/success";
import type { PopupProps } from "../../types/index";

export default function Popup({ type }: PopupProps) {
  const item = success.find((s) => s.success === type);

  if (!item) return null;

  return (
    <div
      className="
    fixed inset-0
    z-50

    flex items-center justify-center

    bg-black/80
    "
    >
      <div
        id="success"
        className="
      
      
      w-88.25
      md:w-129.5
      rounded-3xl
      border border-gray-300
      bg-white
      
      p-8
        text-center

        dark:border-[#252B37]
        dark:bg-black

        "
      >
        <img src={item.image} alt={item.title} />
        <h3
          className="
        mt-6
        text-xl
        font-bold
        "
        >
          {item.title}
        </h3>
        <p
          className="
        mt-3
        text-sm
        text-gray-500
        "
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
