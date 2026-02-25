import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const hpProducts = [
  {
    name: "HP Spectre x360 14",
    description:
      "Premium 2-in-1 convertible laptop with 14-inch OLED display, Intel Core Ultra 7, 16GB RAM, 1TB SSD.",
    price: "1399.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=Spectre+x360",
    category: "Laptops",
    inStock: true,
  },
  {
    name: "HP Envy 16",
    description:
      "Creative powerhouse with 16-inch 2.8K OLED display, Intel Core i9, 32GB RAM, NVIDIA RTX 4060.",
    price: "1799.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=Envy+16",
    category: "Laptops",
    inStock: true,
  },
  {
    name: "HP Pavilion 15",
    description:
      "Everyday laptop with 15.6-inch FHD display, AMD Ryzen 7, 16GB RAM, 512GB SSD.",
    price: "749.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=Pavilion+15",
    category: "Laptops",
    inStock: true,
  },
  {
    name: "HP EliteBook 840 G11",
    description:
      "Business-class ultrabook with 14-inch display, Intel Core Ultra 5, 16GB RAM, 256GB SSD, enterprise security.",
    price: "1249.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=EliteBook+840",
    category: "Business",
    inStock: true,
  },
  {
    name: "HP OMEN 17",
    description:
      "Gaming laptop with 17.3-inch QHD 240Hz display, Intel Core i9, 32GB RAM, NVIDIA RTX 4080.",
    price: "2299.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=OMEN+17",
    category: "Gaming",
    inStock: true,
  },
  {
    name: "HP LaserJet Pro MFP 3101fdw",
    description:
      "All-in-one laser printer with wireless printing, auto-duplex, scan, copy, and fax capabilities.",
    price: "349.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=LaserJet+Pro",
    category: "Printers",
    inStock: true,
  },
  {
    name: "HP 32 4K UHD Monitor",
    description:
      "32-inch 4K UHD IPS display with 99% sRGB, USB-C connectivity, and adjustable stand.",
    price: "429.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=32+4K+Monitor",
    category: "Monitors",
    inStock: false,
  },
  {
    name: "HP Poly Voyager Focus 2",
    description:
      "Premium wireless ANC headset with advanced noise canceling, hi-fi audio, and all-day comfort.",
    price: "299.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=Voyager+Focus",
    category: "Accessories",
    inStock: true,
  },
  {
    name: "HP Z2 Mini G9 Workstation",
    description:
      "Compact desktop workstation with Intel Core i7, NVIDIA T1000, 32GB RAM, 1TB SSD.",
    price: "1599.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=Z2+Mini",
    category: "Desktops",
    inStock: true,
  },
  {
    name: "HP 935 Creator Wireless Mouse",
    description:
      "Ergonomic wireless mouse designed for creators with customizable buttons and USB-C charging.",
    price: "79.99",
    image: "https://placehold.co/400x300/1a1a2e/e94560?text=935+Mouse",
    category: "Accessories",
    inStock: true,
  },
];

async function seed() {
  console.log("Seeding HP products...");
  await db.delete(products);
  await db.insert(products).values(hpProducts);
  console.log(`Seeded ${hpProducts.length} HP products successfully!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
