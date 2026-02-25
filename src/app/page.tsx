import { db } from "@/db";
import { products } from "@/db/schema";
import type { Product } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const allProducts: Product[] = await db.select().from(products);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                HP Store
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Premium HP products at your fingertips
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              {allProducts.length} Products
            </span>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {allProducts.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-lg text-gray-500">
              No products found. Run the seed script to populate the database.
            </p>
            <code className="mt-2 block text-sm text-gray-400">
              npx tsx src/db/seed.ts
            </code>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      {/* Product Image */}
      {product.image && (
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h2>
          <span
            className={`ml-2 inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-medium ${
              product.inStock
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <span className="mb-2 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
          {product.category}
        </span>

        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}
