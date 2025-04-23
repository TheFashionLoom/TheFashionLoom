export const test_products = [
  {
    id: "1",
    name: "Denim Jacket",
    price: 1499,
    originalPrice: 1999, // 👈 original price
    description: "Stylish denim jacket perfect for casual wear.",
    images: [
      "https://res.cloudinary.com/dg2daj5ha/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1744554565/IMG-20250413-WA0015_lcpw5f.jpg",
      "https://res.cloudinary.com/dg2daj5ha/image/upload/v1744554562/IMG-20250413-WA0019_harbeo.jpg",
      "https://res.cloudinary.com/dg2daj5ha/image/upload/v1744554562/IMG-20250413-WA0022_ebvdhv.jpg",
    ],
    colors: ["#000000", "#1e3a8a"],
    sizes: ["S", "M", "L", "XL"], // 👈 Add available sizes
    quantity: 12, // 👈 How many pieces
    store: "Delhi Showroom", // 👈 Store location
  },
  {
    id: "2",
    name: "Cotton Kurti",
    price: 999,
    originalPrice: 1599, // 👈 original price
    description: "Elegant cotton kurti for daily comfort and style.",
    images: ["/images/cotton-kurti-front.jpg", "/images/cotton-kurti-back.jpg"],
    colors: ["#d97706", "#16a34a"],
    sizes: ["M", "L"],
    quantity: 8,
    store: "Mumbai Store",
  },
  // Add more products similarly...
];
export const products = [
  {
    id: "1744818086705",
    name: "test_product",
    images: [
      "https://drive.google.com/uc?export=view&id=1LXvpv4NS0CHk-AJtcYJTjDu9Ax-z8qCP",
      "https://res.cloudinary.com/dg2daj5ha/image/upload/v1744554562/IMG-20250413-WA0022_ebvdhv.jpg",
      "https://drive.google.com/uc?export=view&id=1LXvpv4NS0CHk-AJtcYJTjDu9Ax-z8qCP",
    ],
    sizes: ["X", "S", "XL"],
    store: "Store 1",
    price: "500",
    discountPrice: "200",
    colors: ["Red", " Gray", " Green"],
    quantity: 20,
  },
];
