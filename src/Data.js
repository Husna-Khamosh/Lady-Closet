const products = [
  // Clothing
  {
    id: 1,
    name: "Autumn Elegance Set",
    price: 3250,
    rating: 4.5,
    category: "Clothing",
    description: "A stylish outfit designed for a graceful and elegant look. Perfect for everyday wear and special occasions.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Seengar Brand"
  },
  {
    id: 2,
    name: "Pamir Silk Chiffon",
    price: 2800,
    rating: 4.7,
    category: "Clothing",
    description: "A beautiful chiffon piece with a delicate and elegant appearance. A lovely choice for creating a graceful and fashionable style.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Aseel App"
  },
  {
    id: 3,
    name: "Herat Cotton Classic",
    price: 2200,
    rating: 4.6,
    category: "Clothing",
    description: "A classic clothing piece designed for comfort and everyday style. Its simple and timeless look makes it easy to pair with different outfits.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Aseel App"
  },

  // Bags
  {
    id: 4,
    name: "Classic Leather Tote",
    price: 3250,
    rating: 4.5,
    category: "Bags",
    description: "A timeless tote bag with a classic and elegant design. Its versatile style makes it suitable for work, shopping, and everyday use.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Aseel App"
  },
  {
    id: 5,
    name: "Everyday Shoulder Bag",
    price: 2900,
    rating: 4.8,
    category: "Bags",
    description: "A practical and stylish shoulder bag designed for daily use. Its simple look makes it easy to match with different outfits.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Suhrab Store"
  },
  {
    id: 6,
    name: "Mini City Handbag",
    price: 2400,
    rating: 4.4,
    category: "Bags",
    description: "A compact handbag with a modern and fashionable design. A lovely accessory for casual outings and everyday occasions.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Suhrab Store"
  },

  // Footwear
  {
    id: 7,
    name: "Kabul Winter Suede",
    price: 3800,
    rating: 4.6,
    category: "Footwear",
    description: "A stylish footwear choice with a classic winter look. Its elegant design makes it suitable for casual outfits and cooler days.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Suhrab Store"
  },
  {
    id: 8,
    name: "Classic Leather Flats",
    price: 2600,
    rating: 4.5,
    category: "Footwear",
    description: "Classic flat shoes with a simple and timeless design. A versatile choice for everyday wear and comfortable styling.",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Baran Mart"
  },
  {
    id: 9,
    name: "Elegant Evening Heels",
    price: 3400,
    rating: 4.8,
    category: "Footwear",
    description: "Elegant evening heels designed to complement formal outfits and special occasions. Their stylish look makes them a beautiful choice for parties and evening events.",
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Baran Mart"
  },

  // Scarves & Shawls
  {
    id: 10,
    name: "Ivory Wool Scarf",
    price: 1200,
    rating: 4.5,
    category: "Scarves & Shawls",
    description: "A classic scarf with a soft and elegant look. Its neutral style makes it easy to pair with different winter outfits.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Baran Mart"
  },
  {
    id: 11,
    name: "Kabul Cashmere Wrap",
    price: 1850,
    rating: 4.9,
    category: "Scarves & Shawls",
    description: "An elegant wrap with a timeless design, perfect for adding a graceful touch to your outfit during cooler days.",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Negaah Fashion"
  },
  {
    id: 12,
    name: "Soft Winter Shawl",
    price: 1500,
    rating: 4.7,
    category: "Scarves & Shawls",
    description: "A beautiful winter shawl with a simple and versatile style. A lovely accessory for everyday wear and seasonal outfits.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Negaah Fashion"
  },

  // Pants & Jeans
  {
    id: 13,
    name: "Classic Blue Jeans",
    price: 2100,
    rating: 4.6,
    category: "Pants & Jeans",
    description: "A timeless pair of blue jeans with a classic look. Easy to style with casual tops and suitable for everyday outfits.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Negaah Fashion"
  },
  {
    id: 14,
    name: "High-Waist Denim",
    price: 2400,
    rating: 4.8,
    category: "Pants & Jeans",
    description: "High-waist denim designed for a modern and stylish look. A versatile wardrobe choice that pairs well with different tops.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "VIP Brand"
  },
  {
    id: 15,
    name: "Relaxed Fit Trousers",
    price: 1950,
    rating: 4.4,
    category: "Pants & Jeans",
    description: "Relaxed-fit trousers with a simple and comfortable style. Perfect for creating effortless casual and everyday outfits.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "VIP Brand"
  },
    // Sneakers
  {
    id: 16,
    name: "Urban White Sneakers",
    price: 2900,
    rating: 4.8,
    category: "Sneakers",
    description: "Modern white sneakers with a clean and versatile design. Easy to pair with casual outfits for a fresh everyday look.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "VIP Brand"
  },
  {
    id: 17,
    name: "Everyday Street Sneakers",
    price: 3200,
    rating: 4.6,
    category: "Sneakers",
    description: "Stylish street sneakers designed to add a fashionable touch to your casual outfits. A versatile choice for everyday styling.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Gulnaaz Fashion"
  },
  {
    id: 18,
    name: "Minimal Sport Sneakers",
    price: 2750,
    rating: 4.7,
    category: "Sneakers",
    description: "Minimal sport sneakers with a simple and modern appearance. Suitable for sporty outfits and relaxed everyday looks.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Gulnaaz Fashion"
  },

  // Accessories
  {
    id: 19,
    name: "Golden Charm Necklace",
    price: 950,
    rating: 4.5,
    category: "Accessories",
    description: "A delicate necklace with a charming and elegant design. A beautiful accessory to add a graceful touch to both casual and formal outfits.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Gulnaaz Fashion"
  },
  {
    id: 20,
    name: "Classic Hoop Earrings",
    price: 650,
    rating: 4.6,
    category: "Accessories",
    description: "Classic hoop earrings with a timeless style. Easy to pair with different outfits and perfect for everyday wear or special occasions.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Seengar Brand"
  },
  {
    id: 21,
    name: "Elegant Gold Bracelet",
    price: 850,
    rating: 4.7,
    category: "Accessories",
    description: "An elegant bracelet designed to complement your personal style. Its simple and graceful look makes it a lovely addition to any outfit.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    ],
    shop: "Seengar Brand"
  },

  // Clothing
  {
    id: 22,
    name: "Floral Summer Dress",
    price: 2850,
    rating: 4.7,
    category: "Clothing",
    description: "A lovely summer dress with a floral-inspired style. A beautiful choice for sunny days, casual outings, and seasonal occasions.",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600",
    shop: "Elegant Closet",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600"
    ]
  },
  {
    id: 23,
    name: "Women's Casual Blouse",
    price: 1950,
    rating: 4.5,
    category: "Clothing",
    description: "A versatile casual blouse with a simple and fashionable look. Easy to pair with jeans, trousers, or skirts for everyday outfits.",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600",
    shop: "Style Avenue",
    images: [
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
    ]
  },
  {
    id: 24,
    name: "Elegant Women's Outfit",
    price: 4200,
    rating: 4.8,
    category: "Clothing",
    description: "An elegant outfit designed to create a polished and graceful appearance. Suitable for special occasions and stylish everyday looks.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    shop: "Fashion House",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600"
    ]
  },

  // Bags
{
    id: 25,
    name: "Classic Leather Handbag",
    price: 3500,
    rating: 4.6,
    category: "Bags",
    description: "A timeless handbag with a classic and elegant design. Its versatile style makes it suitable for work, shopping, and everyday outings.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    shop: "Bag Boutique",
    images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600"
    ]
},
{
    id: 26,
    name: "Mini Shoulder Bag",
    price: 2200,
    rating: 4.4,
    category: "Bags",
    description: "A compact shoulder bag with a modern and fashionable look. Perfect for carrying everyday essentials while adding a stylish touch to your outfit.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
    shop: "Luxe Bags",
    images: [
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    ]
},
{
    id: 27,
    name: "Everyday Tote Bag",
    price: 1800,
    rating: 4.5,
    category: "Bags",
    description: "A versatile tote bag with a simple and practical design. A great everyday companion for shopping, work, and casual activities.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
    shop: "Urban Accessories",
    images: [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600",
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600"
    ]
},

// Footwear
{
    id: 28,
    name: "Women's Classic Heels",
    price: 3200,
    rating: 4.7,
    category: "Footwear",
    description: "Classic women's heels with an elegant and timeless design. A beautiful choice for formal events, celebrations, and stylish outfits.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
    shop: "Shoe Gallery",
    images: [
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600",
        "https://images.unsplash.com/photo-1535043934128-cf0b28d8b8a0?w=600"
    ]
},
{
    id: 29,
    name: "Comfortable Flat Shoes",
    price: 2100,
    rating: 4.3,
    category: "Footwear",
    description: "Simple and versatile flat shoes designed for an effortless everyday look. Easy to pair with casual outfits and different styles.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
    shop: "Step Style",
    images: [
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600",
        "https://images.unsplash.com/photo-1535043934128-cf0b28d8b8a0?w=600"
    ]
},
{
    id: 30,
    name: "Elegant Ankle Boots",
    price: 3900,
    rating: 4.8,
    category: "Footwear",
    description: "Elegant ankle boots with a modern and fashionable appearance. A versatile footwear choice for cooler days and stylish outfits.",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600",
    shop: "Walk In Style",
    images: [
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600",
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600"
    ]
},

// Scarves & Shawls
{
    id: 31,
    name: "Soft Beige Scarf",
    price: 950,
    rating: 4.6,
    category: "Scarves & Shawls",
    description: "A beautiful beige scarf with a soft and elegant appearance. Its neutral color makes it easy to combine with a variety of outfits.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
    shop: "Silk Touch",
    images: [
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600"
    ]
},
{
    id: 32,
    name: "Printed Fashion Shawl",
    price: 1450,
    rating: 4.5,
    category: "Scarves & Shawls",
    description: "A fashionable printed shawl designed to add color and personality to your look. A lovely accessory for casual and elegant outfits.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600",
    shop: "Scarf World",
    images: [
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600",
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600"
    ]
},
{
    id: 33,
    name: "Winter Warm Wrap",
    price: 1750,
    rating: 4.7,
    category: "Scarves & Shawls",
    description: "A stylish winter wrap with a classic seasonal look. A versatile accessory for adding an elegant touch to cooler-weather outfits.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600",
    shop: "Cozy Collection",
    images: [
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600",
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600"
    ]
},

// Pants & Jeans
{
    id: 34,
    name: "High Waist Blue Jeans",
    price: 2400,
    rating: 4.6,
    category: "Pants & Jeans",
    description: "High-waist blue jeans with a modern and versatile style. Easy to pair with blouses, shirts, and casual tops for everyday outfits.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    shop: "Denim Studio",
    images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
        "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600"
    ]
},
{
    id: 35,
    name: "Women's Straight Jeans",
    price: 2650,
    rating: 4.5,
    category: "Pants & Jeans",
    description: "Classic straight-leg jeans with a timeless and easy-to-style appearance. A versatile wardrobe essential for casual everyday looks.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    shop: "Denim Studio",
    images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
        "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600"
    ]
},
{
    id: 36,
    name: "Casual Wide Leg Pants",
    price: 1950,
    rating: 4.4,
    category: "Pants & Jeans",
    description: "Wide-leg pants with a relaxed and fashionable silhouette. Perfect for creating comfortable casual outfits with a modern touch.",
    image: "https://images.unsplash.com/photo-1506629905607-d9d9e3b1a8c4?w=600",
    shop: "Urban Wear",
    images: [
        "https://images.unsplash.com/photo-1506629905607-d9d9e3b1a8c4?w=600",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
    ]
},

// Sneakers
{
    id: 37,
    name: "White Everyday Sneakers",
    price: 2800,
    rating: 4.7,
    category: "Sneakers",
    description: "Fresh white sneakers with a clean and versatile design. An easy choice for everyday wear, casual outings, and relaxed outfits.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    shop: "Sneaker Hub",
    images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600"
    ]
},
{
    id: 38,
    name: "Sporty Running Shoes",
    price: 3400,
    rating: 4.8,
    category: "Sneakers",
    description: "Sport-inspired running shoes with a dynamic and modern look. A suitable style for active days and casual sporty outfits.",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600",
    shop: "Active Steps",
    images: [
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600"
    ]
},
{
    id: 39,
    name: "Casual Fashion Sneakers",
    price: 2950,
    rating: 4.5,
    category: "Sneakers",
    description: "Fashionable casual sneakers with a contemporary design. Easy to style with jeans, trousers, and relaxed everyday outfits.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
    shop: "Sneaker Hub",
    images: [
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    ]
},

// Accessories
{
    id: 40,
    name: "Minimalist Women's Watch",
    price: 1850,
    rating: 4.6,
    category: "Accessories",
    description: "A minimalist women's watch with a clean and elegant design. A timeless accessory that complements both casual and formal styles.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    shop: "Time & Style",
    images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ]
},
{
    id: 41,
    name: "Elegant Sunglasses",
    price: 1200,
    rating: 4.5,
    category: "Accessories",
    description: "Elegant sunglasses with a fashionable and versatile look. A stylish accessory for completing everyday and outdoor outfits.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    shop: "Chic Accessories",
    images: [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    ]
},
{
    id: 42,
    name: "Fashion Jewelry Set",
    price: 1600,
    rating: 4.7,
    category: "Accessories",
    description: "A fashionable jewelry set designed to add a touch of elegance to your look. A lovely choice for special occasions and stylish outfits.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",
    shop: "Golden Touch",
    images: [
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"
    ]
}
];
export default products;