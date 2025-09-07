import { useState } from "react";
import ProductCard from "./ProductCard"; // Adjust import if needed
import {products} from "../data/products"; // Adjust path to your products.js

export default function ProductFilter() {
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    fabric: "",
    store: "",
    priceRange: [0, 10000],
    search: "",
  });

  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...filters.priceRange];
    newRange[index] = Number(e.target.value);
    setFilters((prev) => ({
      ...prev,
      priceRange: newRange,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory =
    filters.category.length === 0 ||
    product.categories?.some((cat) => filters.category.includes(cat));

    const matchSize =
      filters.size.length === 0 ||
      product.sizes?.some((size) => filters.size.includes(size));

    const matchFabric =
      !filters.fabric ||
      product.fabric?.toLowerCase().includes(filters.fabric.toLowerCase());

    const matchStore =
      !filters.store || product.store === filters.store;

    const matchPrice =
      product.discountPrice >= filters.priceRange[0] &&
      product.discountPrice <= filters.priceRange[1];

    const matchSearch =
      !filters.search ||
      product.name.toLowerCase().includes(filters.search.toLowerCase());

    return (
      matchCategory &&
      matchSize &&
      matchFabric &&
      matchStore &&
      matchPrice &&
      matchSearch
    );
  });

  return (
	  <div className="flex flex-col md:flex-row gap-6">
      {/* Filter Sidebar */}
      <div className="md:w-1/4 border rounded-xl p-4 space-y-4 bg-gray-50">
        {/* Category */}
        <div>
          <h3 className="font-semibold mb-1">Category</h3>
          {["Men", "Women", "Kids"].map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() => handleCheckboxChange("category", cat)}
              />
              <span className="ml-2">{cat}</span>
            </label>
          ))}
        </div>

        {/* Size */}
        <div>
          <h3 className="font-semibold mb-1">Size</h3>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <label key={size} className="block">
              <input
                type="checkbox"
                checked={filters.size.includes(size)}
                onChange={() => handleCheckboxChange("size", size)}
              />
              <span className="ml-2">{size}</span>
            </label>
          ))}
        </div>

        {/* Fabric */}
        <div>
          <h3 className="font-semibold mb-1">Fabric</h3>
          <input
            type="text"
            name="fabric"
            value={filters.fabric}
            onChange={handleInputChange}
            placeholder="e.g. Cotton"
            className="w-full mt-1 border rounded px-2 py-1"
          />
        </div>

        {/* Store */}
        <div>
          <h3 className="font-semibold mb-1">Store</h3>
          <select
            name="store"
            value={filters.store}
            onChange={handleInputChange}
            className="w-full mt-1 border rounded px-2 py-1"
          >
            <option value="">All</option>
            {[...new Set(products.map((p) => p.store))].map((store) => (
              <option key={store} value={store}>
                {store}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-1">Price Range (₹)</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-1/2 border rounded px-2 py-1"
              placeholder="Min"
            />
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-1/2 border rounded px-2 py-1"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Search */}
        <div>
          <h3 className="font-semibold mb-1">Search</h3>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleInputChange}
            placeholder="Product name"
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="md:w-3/4 grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
