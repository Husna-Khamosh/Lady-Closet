
const products = [
  // Clothing
  {
    id: 1,
    name: "Autumn Elegance Set",
    price: 3250,
    rating: 4.5,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    shop: "Seengar Brand"
  },
  {
    id: 2,
    name: "Pamir Silk Chiffon",
    price: 2800,
    rating: 4.7,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    shop: "Aseel App"
  },
  {
    id: 3,
    name: "Herat Cotton Classic",
    price: 2200,
    rating: 4.6,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
    shop: "Aseel App"
  },

  // Bags
  {
    id: 4,
    name: "Classic Leather Tote",
    price: 3250,
    rating: 4.5,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    shop: "Aseel App"
  },
  {
    id: 5,
    name: "Everyday Shoulder Bag",
    price: 2900,
    rating: 4.8,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    shop: "Suhrab Store"
  },
  {
    id: 6,
    name: "Mini City Handbag",
    price: 2400,
    rating: 4.4,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
    shop: "Suhrab Store"
  },

  // Footwear
  {
    id: 7,
    name: "Kabul Winter Suede",
    price: 3800,
    rating: 4.6,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    shop: "Suhrab Store"
  },
  {
    id: 8,
    name: "Classic Leather Flats",
    price: 2600,
    rating: 4.5,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=600&q=80",
    shop: "Baran Mart"
  },
  {
    id: 9,
    name: "Elegant Evening Heels",
    price: 3400,
    rating: 4.8,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80",
    shop: "Baran Mart"
  },

  // Scarves & Shawls
  {
    id: 10,
    name: "Ivory Wool Scarf",
    price: 1200,
    rating: 4.5,
    category: "Scarves & Shawls",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
    shop: "Baran Mart"
  },
  {
    id: 11,
    name: "Kabul Cashmere Wrap",
    price: 1850,
    rating: 4.9,
    category: "Scarves & Shawls",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80",
    shop: "Negaah Fashion"
  },
  {
    id: 12,
    name: "Soft Winter Shawl",
    price: 1500,
    rating: 4.7,
    category: "Scarves & Shawls",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
    shop: "Negaah Fashion"
  },

  // Pants & Jeans
  {
    id: 13,
    name: "Classic Blue Jeans",
    price: 2100,
    rating: 4.6,
    category: "Pants & Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    shop: "Negaah Fashion"
  },
  {
    id: 14,
    name: "High-Waist Denim",
    price: 2400,
    rating: 4.8,
    category: "Pants & Jeans",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    shop: "VIP Brand"
  },
  {
    id: 15,
    name: "Relaxed Fit Trousers",
    price: 1950,
    rating: 4.4,
    category: "Pants & Jeans",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
    shop: "VIP Brand"
  },

  // Sneakers
  {
    id: 16,
    name: "Urban White Sneakers",
    price: 2900,
    rating: 4.8,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    shop: "VIP Brand"
  },
  {
    id: 17,
    name: "Everyday Street Sneakers",
    price: 3200,
    rating: 4.6,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    shop: "Gulnaaz Fashion"
  },
  {
    id: 18,
    name: "Minimal Sport Sneakers",
    price: 2750,
    rating: 4.7,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
    shop: "Gulnaaz Fashion"
  },

  // Accessories
  {
    id: 19,
    name: "Golden Charm Necklace",
    price: 950,
    rating: 4.5,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
    shop: "Gulnaaz Fashion"
  },
  {
    id: 20,
    name: "Classic Hoop Earrings",
    price: 650,
    rating: 4.6,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
    shop: "Seengar Brand"
  },
  {
    id: 21,
    name: "Elegant Gold Bracelet",
    price: 850,
    rating: 4.7,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
    shop: "Seengar Brand"
  }
];

export default products;
