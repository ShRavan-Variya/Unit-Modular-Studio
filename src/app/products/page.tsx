import {Suspense} from "react";
import Products from "./Products";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading Products...</div>}>
      <Products />
    </Suspense>
  );
}
