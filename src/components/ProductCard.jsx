import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block border rounded-xl p-4 hover:shadow-lg"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>

      <div className="mt-1">
        {product.price && product.price > product.discountPrice ? (
          <div className="text-sm text-gray-500">
            <span className="line-through mr-2">₹{product.price}</span>
            <span className="text-black font-semibold">
              ₹{product.discountPrice}
            </span>
          </div>
        ) : (
          <p className="text-sm text-black font-semibold">
            ₹{product.discountPrice}
          </p>
        )}
      </div>
    </Link>
  );
}
