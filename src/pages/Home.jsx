import React from "react";
import hero from "./../assets/hero.png";
import Categories from "../components/CategoryMenu/Categories";
import { useNavigate } from "react-router-dom";

export default function Home({ dark }) {
  const navigate = useNavigate();

  return (
    <section
      className={`w-full rounded-2xl ${dark ? "bg-gray-950" : "bg-[#f8f5f1]"}`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Hero Image */}
       <div className="w-full h-[320px] sm:h-[380px] lg:h-[420px]">
  <img
    src={hero}
    alt=""
    className="w-full h-full object-cover"
  />
</div>

          {/* Dark Overlay */}
          <div
            className={`absolute inset-0 ${dark ? "bg-black/40" : "bg-black/20"}`}
          ></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 sm:px-10 md:px-14">
              <p className="uppercase tracking-[5px] text-white text-xs sm:text-sm mb-3">
                New Collection 2026
              </p>

              <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-5xl lg:text-7xl">
                Elevate
                <br />
                Your Style
              </h1>

              <p className="text-gray-200 mt-5 text-sm sm:text-base md:text-lg max-w-md">
                Discover premium fashion crafted for modern lifestyles. Timeless
                designs with unmatched quality.
              </p>

              <div className="flex gap-4 mt-8 flex-wrap">
                <button
                  onClick={() => navigate("/products")}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    bg-black
                    text-white
                    px-7
                    py-3
                    rounded-full
                    font-semibold
                    shadow-md
                    hover:bg-pink-600
                    transition-all
                    duration-300
                  "
                >
                  Shop Now
                  <span
                    className="
                      group-hover:translate-x-1
                      transition-transform
                      duration-300
                    "
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Categories dark={dark} />
    </section>
  );
}
