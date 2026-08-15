import React from "react";

export default function DarkBtn({ dark, setDark }) {
  return (
    <div>
      <button
        onClick={() => setDark(!dark)}
        className={`
          px-1.5
          py-1.5
          sm:px-2
          sm:py-1.5
          md:px-3
          md:py-2
          rounded-2xl
          md:rounded-xl
          text-[9px]
          sm:text-xs
          md:text-sm
          whitespace-nowrap
          ${
            dark
              ? "bg-white text-gray-950"
              : "bg-gray-800 text-white"
          }
        `}
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}