import products from "../data/products";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import ProductCard from "../components/Products/ProductCard";
import Pagination from "../components/Pagination";
export default function Women({ dark }) {
  const navigate = useNavigate();
  const { subCategory } = useParams();
  const { search } = useContext(SearchContext);
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPages = 8;

  const filterSearch = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const womenProducts = filterSearch.filter(
    (item) => item.category === "Women",
  );

  const filterProduct = !subCategory
    ? womenProducts
    : womenProducts.filter(
        (item) => item.subCategory?.toLowerCase() === subCategory.toLowerCase(),
      );

  const sortedBy =
    sortBy === ""
      ? filterProduct
      : [...filterProduct].sort((a, b) =>
          sortBy === "low"
            ? a.price - b.price
            : sortBy === "high"
              ? b.price - a.price
              : sortBy === "a-z"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name),
        );

  const totalPages = Math.ceil(sortedBy.length / productsPerPages);
  const startIndex = (currentPage - 1) * productsPerPages;
  const endIndex = startIndex + productsPerPages;
  const currentProducts = sortedBy.slice(startIndex, endIndex);

  return (
    <div
      className={`min-h-screen w-full rounded-2xl ${
        dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Title */}
        <h1
          className={`text-3xl font-bold mb-1 ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          Women Collection
        </h1>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`my-2 w-44 appearance-none rounded-xl px-4 py-2 pr-9
           text-sm font-medium shadow-sm transition-all duration-200
           cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400/30  ${
             dark
               ? "bg-indigo-500 text-gray-200 border border-gray-700 hover:border-pink-400"
               : "bg-white text-gray-700 border border-gray-200 hover:border-pink-400"
           }`}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="a-z">Name: A to Z</option>
          <option value="z-a">Name: Z to A</option>
        </select>

        {/* Sub Categories */}
        <div
          className={`sticky top-28 z-40 py-4 ${
            dark ? "bg-gray-950" : "bg-white"
          }`}
        >
          <div
            className={`flex gap-3 overflow-x-auto p-3 rounded-2xl shadow-sm ${
              dark ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            {/* All */}
            <button
              onClick={() => navigate("/women")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                !subCategory
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>

            {/* T-Shirts */}
            <button
              onClick={() => navigate("/women/t-shirts")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "t-shirts"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              T-Shirts
            </button>

            {/* Jeans */}
            <button
              onClick={() => navigate("/women/jeans")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "jeans"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Jeans
            </button>

            {/* Dresses */}
            <button
              onClick={() => navigate("/women/dresses")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "dresses"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Dresses
            </button>

            {/* Skirts */}
            <button
              onClick={() => navigate("/women/skirts")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "skirts"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Skirts
            </button>

            {/* Tops */}
            <button
              onClick={() => navigate("/women/tops")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "tops"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tops
            </button>

            {/* Blouses */}
            <button
              onClick={() => navigate("/women/blouses")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "blouses"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Blouses
            </button>

            {/* Cardigans */}
            <button
              onClick={() => navigate("/women/cardigans")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "cardigans"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Cardigans
            </button>

            {/* Blazers */}
            <button
              onClick={() => navigate("/women/blazers")}
              className={`shrink-0 px-4 py-2 rounded-full ${
                subCategory === "blazers"
                  ? "bg-blue-500  text-white"
                  : dark
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Blazers
            </button>
          </div>
        </div>

        {/* Empty Message */}
        {filterProduct.length === 0 && filterSearch.length !== 0 && (
          <div className="col-span-full flex justify-center items-center py-16 px-4">
            <div className="text-center animate-pulse">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-600 shadow-lg shadow-pink-200/50">
                <span className="text-2xl">🛍️</span>
              </div>

              <h2
                className={`text-xl md:text-2xl font-semibold ${
                  dark ? "text-gray-100" : "text-gray-800"
                }`}
              >
                No {subCategory || "Women Products"} Available
              </h2>

              <p
                className={`mt-2 text-sm md:text-base ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                We couldn't find any products in this category at the moment.
              </p>

              <button
                onClick={() => navigate("/women")}
                className="mt-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-pink-300/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-pink-600 hover:to-rose-600 active:scale-95"
              >
                View All Products
              </button>
            </div>
          </div>
        )}

        {/* Search Empty */}
        {filterSearch.length === 0 && (
          <div className="text-center py-16">
            <h2
              className={`text-xl font-semibold ${
                dark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              No Products Found
            </h2>

            <p
              className={`text-sm mt-2 ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              We couldn't find any products matching your search.
            </p>
          </div>
        )}

        {/* Products */}
        {filterProduct.length > 0 && (
          <div
            className={`mt-4 rounded-3xl p-4 md:p-6 shadow-lg ${
              dark
                ? "bg-gray-900 border border-gray-800"
                : "bg-white border border-purple-200"
            }`}
          >
            <div
              className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-5
            "
            >
              {currentProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
        {totalPages > 1 && (
          <>
            {" "}
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            <p className="text-sm text-gray-500 text-center pb-5 pt-3">
              Page {currentPage} of {totalPages}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
