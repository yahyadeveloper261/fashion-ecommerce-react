import products from "../data/products";
import ProductCard from "../components/Products/ProductCard";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import Pagination from "../components/Pagination";
export default function Products({ dark }) {
  const { search } = useContext(SearchContext);
  const [sortPrice, setSortPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const filterProduct = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedPrice =
    sortPrice === ""
      ? filterProduct
      : [...filterProduct].sort((a, b) =>
          sortPrice === "low"
            ? a.price - b.price
            : sortPrice === "high"
              ? b.price - a.price
              : sortPrice === "a-z"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name),
        );
  const totalPages = Math.ceil(sortedPrice.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedPrice.slice(startIndex, endIndex);

  return (
    <div
      className={`min-h-screen rounded-2xl ${
        dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        <select
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
          className={`
            w-44
            appearance-none
            rounded-xl
            px-4 py-2.5
            pr-9
            text-sm
            font-medium
            shadow-sm
            transition-all
            duration-200
            cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-pink-400/30
            ${
              dark
                ? "bg-gray-900 text-gray-200 border border-gray-700 hover:border-pink-400"
                : "bg-white text-gray-700 border border-gray-200 hover:border-pink-400"
            }
          `}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="a-z">Name: A to Z</option>
          <option value="z-a">Name: Z to A</option>
        </select>

        <p
          className={`text-center text-xl mt-10 ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {filterProduct.length === 0 && "No products found 😕"}
        </p>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-5
            mt-6
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
