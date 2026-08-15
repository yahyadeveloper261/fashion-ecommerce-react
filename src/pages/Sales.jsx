import products from "../data/products";
import ProductCard from "../components/Products/ProductCard";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import Pagination from "../components/Pagination";
export default function Sales({ dark }) {
  const { search } = useContext(SearchContext);
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPages = 8;
  const filterSearch = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  const salesProducts = filterSearch.filter((item) => item.discount > 0);

  const sortedBy =
    sortBy === ""
      ? salesProducts
      : [...salesProducts].sort((a, b) =>
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
          Sale Products
        </h1>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`my-2 w-44 appearance-none rounded-xl px-4 py-2 pr-9 text-sm font-medium shadow-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400/30 ${
            dark
              ? "bg-gray-900 text-gray-200 border border-gray-700 hover:border-pink-400"
              : "bg-white text-gray-700 border border-gray-200 hover:border-pink-400"
          }`}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="a-z">Name: A to Z</option>
          <option value="z-a">Name: Z to A</option>
        </select>

        {salesProducts.length === 0 && filterSearch.length !== 0 && (
          <h2 className="text-xl font-semibold text-gray-500 text-center mt-10">
            No Sales products available at the moment.
          </h2>
        )}

        {filterSearch.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-gray-700">
              No Products Found
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              We couldn't find any products matching your search.
            </p>
          </div>
        )}

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
  );
}
