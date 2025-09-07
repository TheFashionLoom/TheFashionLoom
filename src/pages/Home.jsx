import ProductFilter from "../components/ProductFilter"; // New import
import StoreMap from "../components/StoreMap";

export default function Home() {
  return (
    <div className="p-4 space-y-10">
      <ProductFilter /> {/* <-- filter and product grid go here */}

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Visit Our Store
        </h2>
        <StoreMap />
      </div>
    </div>
  );
}
