const products = [
  // Clothing
  {
    id: 1,
    name: "Autumn Elegance Set",
    price: 3250,
    rating: 4.5,
    category: "Clothing",
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