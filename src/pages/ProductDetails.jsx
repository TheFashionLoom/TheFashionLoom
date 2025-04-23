import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ImageSlider from "../components/ImageSlider";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-4">Product not found</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <ImageSlider images={product.images} />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 text-lg">₹{product.discountPrice}</p>
      <p className="mt-2">{product.description}</p>

      {/* Store Location */}
      <div className="mt-4">
        <span className="font-semibold">Available at:</span>
        <p>{product.store}</p>
      </div>

      {/* Quantity */}
      <div className="mt-2">
        <span className="font-semibold">In Stock:</span>
        <p>{product.quantity} pcs</p>
      </div>

      {/* Fabric */}
      <div className="mt-2">
        <span className="font-semibold">Fabric</span>
        <p>{product.fabric} pcs</p>
      </div>

      {/* Sizes */}
      <div className="mt-4">
        <span className="font-semibold">Available Sizes:</span>
        <div className="flex gap-2 mt-1">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="px-2 py-1 border rounded text-sm font-medium"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
      {/* Category */}
      <div className="mt-4">
        <span className="font-semibold">Category</span>
        <div className="flex gap-2 mt-1">
          {product.categories.map((category) => (
            <span
              key={category}
              className="px-2 py-1 border rounded text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Colors */}
      {/* <div className="mt-4">
        <span className="font-semibold">Available Colors:</span>
        <div className="flex gap-2 mt-1">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
