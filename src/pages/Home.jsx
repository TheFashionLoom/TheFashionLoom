import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import StoreMap from "../components/StoreMap";

export default function Home() {
  return (
    <div className="p-4 space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Visit Our Store
        </h2>
        <StoreMap />
      </div>
    </div>
  );
}
