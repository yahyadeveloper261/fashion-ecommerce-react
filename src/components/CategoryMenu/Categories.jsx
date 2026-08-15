import { useNavigate } from "react-router-dom";
import men from "../../assets/men.png";
import women from "../../assets/women.png";
import kids from "../../assets/kids.png";
import accessories from "../../assets/acc.png";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export default function Categories({ dark }) {
  const navigate = useNavigate();
  const { search } = useContext(SearchContext);

  const categories = [
    {
      name: "Men",
      path: "/men",
      image: men,
    },
    {
      name: "Women",
      path: "/women",
      image: women,
    },
    {
      name: "Kids",
      path: "/kids",
      image: kids,
    },
    {
      name: "Accessories",
      path: "/accessories",
      image: accessories,
    },
  ];

  const filterCategory = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className={`py-12 sm:py-14 px-4 rounded-2xl ${
        dark ? "text-white" : "text-gray-900"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Shop by Category
      </h2>

      <p
        className={`text-center mt-10 text-xl ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {filterCategory.length === 0 && "No category matched 😕"}
      </p>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-2
          gap-6
          max-w-7xl
          mx-auto
        "
      >
        {filterCategory.map((item) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`
              group
              cursor-pointer
              overflow-hidden
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              ${
                dark
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-100"
              }
            `}
          >
            <div className="h-50 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
              />
            </div>

            <div className="px-5 py-2 text-center">
              <h3
                className={`
                  text-xl
                  font-semibold
                  transition-colors
                  duration-200
                  ${
                    dark
                      ? "text-white group-hover:text-blue-400"
                      : "text-gray-900 group-hover:text-blue-600"
                  }
                `}
              >
                {item.name}
              </h3>

              <p
                className={`text-sm mt-2 ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Explore Collection
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}