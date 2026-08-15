
const products = [
  // ==================== MEN ====================

  {
    id: 1,
    name: "Black Hoodie",
    category: "Men",
    subCategory: "Hoodies",
    price: 2500,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    rating: 4.5,
    isNew: true,
    bestSeller: true,
    discount: 20,
    brand: "Nike",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "gray", "blue"]
  },

  {
    id: 2,
    name: "White Classic T-Shirt",
    category: "Men",
    subCategory: "T-Shirts",
    price: 1500,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    rating: 4.2,
    isNew: true,
    discount: 30,
    brand: "Adidas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black"]
  },

  {
    id: 3,
    name: "Denim Jacket",
    category: "Men",
    subCategory: "Jackets",
    price: 4500,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    rating: 4.7,
    bestSeller: true,
    discount: 15,
    brand: "Levi's",
    sizes: ["M", "L", "XL"],
    colors: ["blue", "black"]
  },

  {
    id: 4,
    name: "Slim Fit Jeans",
    category: "Men",
    subCategory: "Jeans",
    price: 3200,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    rating: 4.4,
    brand: "Levi's",
    discount: 10,
    sizes: ["30", "32", "34", "36"],
    colors: ["blue", "black"]
  },

  {
    id: 5,
    name: "Formal Black Shirt",
    category: "Men",
    subCategory: "Shirts",
    price: 2200,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    rating: 4.3,
    isNew: true,
    brand: "H&M",
    sizes: ["M", "L", "XL"],
    colors: ["black", "white"]
  },

  {
    id: 6,
    name: "Casual Check Shirt",
    category: "Men",
    subCategory: "Shirts",
    price: 2400,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    rating: 4.1,
    brand: "Zara",
    discount: 20,
    sizes: ["M", "L", "XL"],
    colors: ["red", "blue", "green"]
  },

  {
    id: 7,
    name: "Men's Bomber Jacket",
    category: "Men",
    subCategory: "Jackets",
    price: 5200,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    rating: 4.6,
    bestSeller: true,
    brand: "Puma",
    discount: 25,
    sizes: ["M", "L", "XL"],
    colors: ["black", "green"]
  },

  {
    id: 8,
    name: "Oversized Sweatshirt",
    category: "Men",
    subCategory: "Sweatshirts",
    price: 2800,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011",
    rating: 4.5,
    isNew: true,
    brand: "Nike",
    discount: 15,
    sizes: ["M", "L", "XL"],
    colors: ["gray", "black", "white"]
  },

  {
    id: 9,
    name: "Cargo Pants",
    category: "Men",
    subCategory: "Pants",
    price: 3500,
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509",
    rating: 4.4,
    bestSeller: true,
    brand: "H&M",
    sizes: ["30", "32", "34", "36"],
    colors: ["black", "green", "beige"]
  },

  {
    id: 10,
    name: "Classic Polo Shirt",
    category: "Men",
    subCategory: "Polo Shirts",
    price: 2000,
    image: "https://images.unsplash.com/photo-1625910513413-5fc45d7d5d43",
    rating: 4.2,
    brand: "Lacoste",
    discount: 10,
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "navy"]
  },

  {
    id: 11,
    name: "Sports Track Pants",
    category: "Men",
    subCategory: "Sportswear",
    price: 2700,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea",
    rating: 4.3,
    isNew: true,
    brand: "Adidas",
    discount: 20,
    sizes: ["M", "L", "XL"],
    colors: ["black", "gray"]
  },

  {
    id: 12,
    name: "Leather Jacket",
    category: "Men",
    subCategory: "Jackets",
    price: 7500,
    image: "https://images.unsplash.com/photo-1520975958225-9c5f3f7f7e8a",
    rating: 4.8,
    bestSeller: true,
    brand: "Zara",
    discount: 30,
    sizes: ["M", "L", "XL"],
    colors: ["black", "brown"]
  },

  // ==================== WOMEN ====================

  
{ id: 13, 
  name: "Summer Floral Dress",
   category: "Women", 
  subCategory: "Dresses",
   price: 4200, 
   image: "https://images.unsplash.com/photo-1618354691551-44de113f0164",
   rating: 4.8, 
   isNew: true, 
   bestSeller: true, 
   discount: 20,
    brand: "Zara",
     sizes: ["S", "M", "L"],
      colors: ["pink", "white", "blue"] },
       { id: 14, name: "Elegant Black Dress",
         category: "Women", 
         subCategory: "Dresses", 
         price: 5500, 
         image: "https://www.ezerafet.com/image/cache/catalog/belden-drapeli-tesettur-abiye-elbise-4551-siyah-900x1350.jpg", 
         rating: 4.9,
          bestSeller: true,
           brand: "H&M", 
           discount: 15,
            sizes: ["S", "M", "L"],
             colors: ["black", "red"] },

{
  id: 15,
  name: "Women's White T-Shirt",
  category: "Women",
  subCategory: "T-Shirts",
  price: 1800,
  image: "https://www.wholeskop.com/image/cache/catalog/wholeskop/317-2434-R020-1200x1800.jpeg",
  rating: 4.4,
  isNew: true,
  brand: "Nike",
  discount: 10,
  sizes: ["S", "M", "L"],
  colors: ["white", "black"]
},

{
  id: 16,
  name: "Women's Denim Jacket",
  category: "Women",
  subCategory: "Jackets",
  price: 4800,
  image: "https://i.pinimg.com/736x/9e/51/39/9e513939e1ccebdbcabe93031776684a.jpg",
  rating: 4.6,
  bestSeller: true,
  brand: "Levi's",
  discount: 20,
  sizes: ["S", "M", "L"],
  colors: ["blue", "black"]
},

{
  id: 17,
  name: "Casual Crop Top",
  category: "Women",
  subCategory: "Tops",
  price: 1900,
  image: "https://cdn.onbuy.com/product/65b4a42cd2e60/990-990/women-autumn-blouses-muslim-sets-long-sleeve-blouses-pants-abaya-solid-islamic-clothing-casual-two-piece-set.jpg",
  rating: 4.3,
  isNew: true,
  brand: "H&M",
  discount: 25,
  sizes: ["XS", "S", "M"],
  colors: ["white", "pink", "black"]
},

{
  id: 18,
  name: "Wide Leg Jeans",
  category: "Women",
  subCategory: "Jeans",
  price: 3600,
  image: "https://www.wholeskop.com/image/cache/catalog/wholeskop/317-2434-R020-1200x1800.jpeg",
  rating: 4.5,
  bestSeller: true,
  brand: "Levi's",
  discount: 15,
  sizes: ["26", "28", "30", "32"],
  colors: ["blue", "black"]
},

{
  id: 19,
  name: "Beige Blazer",
  category: "Women",
  subCategory: "Blazers",
  price: 6200,
  image: "https://theblackcloset.co/cdn/shop/files/E347ABFC-4695-499E-8C81-A11151423E23.jpg?v=1781956701&width=1080",
  rating: 4.7,
  isNew: true,
  brand: "Zara",
  discount: 20,
  sizes: ["S", "M", "L"],
  colors: ["beige", "black"]
},

{
  id: 20,
  name: "Pink Party Dress",
  category: "Women",
  subCategory: "Dresses",
  price: 6500,
  image: "https://witcdn.tesetturisland.com/kemerli-beyaz-tesettur-elbise-23101b-gunluk-elbiseler-neva-style-137541-48-B.jpg",
  rating: 4.8,
  bestSeller: true,
  brand: "H&M",
  discount: 30,
  sizes: ["S", "M", "L"],
  colors: ["pink", "red"]
},

{
  id: 21,
  name: "Women's Hoodie",
  category: "Women",
  subCategory: "Hoodies",
  price: 3000,
  image: "https://cdn.onbuy.com/product/65b4a42cd2e60/990-990/women-autumn-blouses-muslim-sets-long-sleeve-blouses-pants-abaya-solid-islamic-clothing-casual-two-piece-set.jpg",
  rating: 4.4,
  isNew: true,
  brand: "Nike",
  discount: 15,
  sizes: ["S", "M", "L"],
  colors: ["gray", "black", "pink"]
},

{
  id: 22,
  name: "Pleated Skirt",
  category: "Women",
  subCategory: "Skirts",
  price: 2800,
  image: "https://www.wholeskop.com/image/cache/catalog/wholeskop/317-2434-R020-1200x1800.jpeg",
  rating: 4.2,
  brand: "Zara",
  discount: 10,
  sizes: ["S", "M", "L"],
  colors: ["black", "beige", "white"]
},

{
  id: 23,
  name: "Women's Casual Shirt",
  category: "Women",
  subCategory: "Shirts",
  price: 2500,
  image: "https://www.wholeskop.com/image/cache/catalog/wholeskop/317-2434-R020-1200x1800.jpeg",
  rating: 4.3,
  isNew: true,
  brand: "H&M",
  discount: 20,
  sizes: ["S", "M", "L"],
  colors: ["white", "blue"]
},

{
  id: 24,
  name: "Long Summer Skirt",
  category: "Women",
  subCategory: "Skirts",
  price: 3200,
  image: "https://witcdn.neva-style.com/brown-hijab-suit-dress-41502kh-76814-daily-dresses-neva-style-94098-35-B.jpg",
  rating: 4.5,
  bestSeller: true,
  brand: "Zara",
  discount: 15,
  sizes: ["S", "M", "L"],
  colors: ["white", "pink", "blue"]
},



  // ==================== KIDS ====================

  {
    id: 25,
    name: "Kids Blue Hoodie",
    category: "Kids",
    subCategory: "Hoodies",
    price: 1800,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b",
    rating: 4.5,
    isNew: true,
    brand: "Nike",
    discount: 20,
    sizes: ["XS", "S", "M"],
    colors: ["blue", "black"]
  },

  {
    id: 26,
    name: "Kids Casual T-Shirt",
    category: "Kids",
    subCategory: "T-Shirts",
    price: 1200,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
    rating: 4.2,
    brand: "Adidas",
    discount: 10,
    sizes: ["XS", "S", "M"],
    colors: ["red", "blue", "white"]
  },

  {
    id: 27,
    name: "Kids Denim Jacket",
    category: "Kids",
    subCategory: "Jackets",
    price: 2800,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
    rating: 4.6,
    bestSeller: true,
    brand: "Levi's",
    discount: 15,
    sizes: ["S", "M", "L"],
    colors: ["blue", "black"]
  },

  {
    id: 28,
    name: "Kids Summer Dress",
    category: "Kids",
    subCategory: "Dresses",
    price: 2400,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7",
    rating: 4.7,
    isNew: true,
    brand: "H&M",
    discount: 20,
    sizes: ["XS", "S", "M"],
    colors: ["pink", "yellow"]
  },

  {
    id: 29,
    name: "Kids Sneakers",
    category: "Kids",
    subCategory: "Shoes",
    price: 2500,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: 4.6,
    bestSeller: true,
    brand: "Nike",
    discount: 25,
    sizes: ["28", "30", "32", "34"],
    colors: ["red", "blue", "black"]
  },

  {
    id: 30,
    name: "Kids Jogger Pants",
    category: "Kids",
    subCategory: "Pants",
    price: 1900,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
    rating: 4.3,
    brand: "Puma",
    discount: 15,
    sizes: ["XS", "S", "M"],
    colors: ["gray", "black"]
  },

  {
    id: 31,
    name: "Kids Polo Shirt",
    category: "Kids",
    subCategory: "Polo Shirts",
    price: 1600,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    rating: 4.4,
    isNew: true,
    brand: "Lacoste",
    sizes: ["XS", "S", "M"],
    colors: ["white", "blue"]
  },

  {
    id: 32,
    name: "Kids Winter Coat",
    category: "Kids",
    subCategory: "Jackets",
    price: 3500,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b",
    rating: 4.6,
    bestSeller: true,
    brand: "Zara",
    discount: 30,
    sizes: ["S", "M", "L"],
    colors: ["black", "brown"]
  },

  // ==================== ACCESSORIES ====================

  {
    id: 33,
    name: "Classic Black Handbag",
    category: "Accessories",
    subCategory: "Bags",
    price: 4500,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    rating: 4.8,
    bestSeller: true,
    brand: "Zara",
    discount: 20,
    colors: ["black", "brown"]
  },

  {
    id: 34,
    name: "Leather Backpack",
    category: "Accessories",
    subCategory: "Bags",
    price: 3800,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    rating: 4.5,
    isNew: true,
    brand: "Nike",
    discount: 15,
    colors: ["black", "brown"]
  },

  {
    id: 35,
    name: "Classic Sunglasses",
    category: "Accessories",
    subCategory: "Sunglasses",
    price: 1800,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    rating: 4.4,
    bestSeller: true,
    brand: "Ray-Ban",
    discount: 10,
    colors: ["black", "brown"]
  },

  {
    id: 36,
    name: "Leather Belt",
    category: "Accessories",
    subCategory: "Belts",
    price: 1500,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
    rating: 4.2,
    brand: "Levi's",
    discount: 15,
    colors: ["black", "brown"]
  },

  {
    id: 37,
    name: "Classic Wrist Watch",
    category: "Accessories",
    subCategory: "Watches",
    price: 5500,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    rating: 4.7,
    bestSeller: true,
    brand: "Casio",
    discount: 20,
    colors: ["black", "silver"]
  },

  {
    id: 38,
    name: "Sports Cap",
    category: "Accessories",
    subCategory: "Caps",
    price: 1200,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    rating: 4.3,
    isNew: true,
    brand: "Nike",
    discount: 10,
    colors: ["black", "white", "blue"]
  },

  {
    id: 39,
    name: "Winter Scarf",
    category: "Accessories",
    subCategory: "Scarves",
    price: 1400,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9",
    rating: 4.2,
    brand: "H&M",
    discount: 20,
    colors: ["red", "gray", "black"]
  },

  {
    id: 40,
    name: "Leather Wallet",
    category: "Accessories",
    subCategory: "Wallets",
    price: 2000,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    rating: 4.6,
    bestSeller: true,
    brand: "Levi's",
    discount: 15,
    colors: ["black", "brown"]
  },

  {
    id: 41,
    name: "Fashion Earrings",
    category: "Accessories",
    subCategory: "Jewelry",
    price: 1600,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
    rating: 4.5,
    isNew: true,
    brand: "Zara",
    discount: 25,
    colors: ["gold", "silver"]
  },

  {
    id: 42,
    name: "Women's Chain Necklace",
    category: "Accessories",
    subCategory: "Jewelry",
    price: 2200,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    rating: 4.7,
    bestSeller: true,
    brand: "H&M",
    discount: 20,
    colors: ["gold", "silver"]
  },

  {
    id: 43,
    name: "Fashion Bracelet",
    category: "Accessories",
    subCategory: "Jewelry",
    price: 1300,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    rating: 4.3,
    brand: "Zara",
    discount: 15,
    colors: ["gold", "silver"]
  },

  {
    id: 44,
    name: "Crossbody Bag",
    category: "Accessories",
    subCategory: "Bags",
    price: 3200,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
    rating: 4.6,
    isNew: true,
    bestSeller: true,
    brand: "H&M",
    discount: 30,
    colors: ["black", "brown", "beige"]
  },

  // ==================== EXTRA PRODUCTS ====================

  {
    id: 45,
    name: "Women's Knit Sweater",
    category: "Women",
    subCategory: "Sweaters",
    price: 3300,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    rating: 4.5,
    isNew: true,
    brand: "Zara",
    discount: 20,
    sizes: ["S", "M", "L"],
    colors: ["white", "beige", "gray"]
  },

  {
    id: 46,
    name: "Men's Casual Sweater",
    category: "Men",
    subCategory: "Sweaters",
    price: 2900,
    image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378",
    rating: 4.4,
    bestSeller: true,
    brand: "H&M",
    discount: 15,
    sizes: ["M", "L", "XL"],
    colors: ["gray", "black", "brown"]
  },

  {
    id: 47,
    name: "Women's Sports Leggings",
    category: "Women",
    subCategory: "Sportswear",
    price: 2300,
    image: "https://images.unsplash.com/photo-1506629905607-d9b1c9e8e6f1",
    rating: 4.6,
    isNew: true,
    bestSeller: true,
    brand: "Nike",
    discount: 25,
    sizes: ["XS", "S", "M", "L"],
    colors: ["black", "gray", "blue"]
  },

  {
    id: 48,
    name: "Men's Running Shoes",
    category: "Men",
    subCategory: "Shoes",
    price: 4800,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: 4.7,
    bestSeller: true,
    brand: "Nike",
    discount: 20,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["black", "red", "white"]
  },

  {
    id: 49,
    name: "Women's Sneakers",
    category: "Women",
    subCategory: "Shoes",
    price: 4200,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    rating: 4.5,
    isNew: true,
    brand: "Adidas",
    discount: 15,
    sizes: ["37", "38", "39", "40"],
    colors: ["white", "pink", "black"]
  },

  {
    id: 50,
    name: "Fashion Tote Bag",
    category: "Accessories",
    subCategory: "Bags",
    price: 3500,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    rating: 4.8,
    bestSeller: true,
    isNew: true,
    brand: "Zara",
    discount: 25,
    colors: ["black", "brown", "beige"]
  }
  ,


{
  id: 51,
  name: "Classic Leather Handbag",
  category: "Accessories",
  subCategory: "Bags",
  price: 4500,
  discount: 20,
  rating: 4.7,
  brand: "Guess",
  isNew: true,
  bestSeller: true,
  image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
  id: 52,
  name: "Aviator Sunglasses",
  category: "Accessories",
  subCategory: "Sunglasses",
  price: 2200,
  discount: 15,
  rating: 4.5,
  brand: "Ray-Ban",
  bestSeller: true,
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
},
{
  id: 53,
  name: "Classic Wrist Watch",
  category: "Accessories",
  subCategory: "Watches",
  price: 5500,
  discount: 25,
  rating: 4.8,
  brand: "Fossil",
  isNew: true,
  image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
},
{
  id: 54,
  name: "Minimalist Wallet",
  category: "Accessories",
  subCategory: "Wallets",
  price: 1800,
  rating: 4.4,
  brand: "Tommy Hilfiger",
  bestSeller: true,
  image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
},
{
  id: 55,
  name: "Women's Shoulder Bag",
  category: "Accessories",
  subCategory: "Bags",
  price: 3800,
  discount: 30,
  rating: 4.6,
  brand: "Michael Kors",
  isNew: true,
  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},
{
  id: 56,
  name: "Fashion Belt",
  category: "Accessories",
  subCategory: "Belts",
  price: 1600,
  discount: 10,
  rating: 4.3,
  brand: "Levi's",
  image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc"
},
{
  id: 57,
  name: "Pearl Necklace",
  category: "Accessories",
  subCategory: "Jewelry",
  price: 3200,
  discount: 20,
  rating: 4.8,
  brand: "Swarovski",
  isNew: true,
  bestSeller: true,
  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
},
{
  id: 58,
  name: "Fashion Earrings",
  category: "Accessories",
  subCategory: "Jewelry",
  price: 1400,
  rating: 4.5,
  brand: "Swarovski",
  bestSeller: true,
  image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908"
},
{
  id: 59,
  name: "Classic Backpack",
  category: "Accessories",
  subCategory: "Bags",
  price: 3500,
  discount: 15,
  rating: 4.6,
  brand: "Adidas",
  isNew: true,
  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},
{
  id: 60,
  name: "Fashion Cap",
  category: "Accessories",
  subCategory: "Caps",
  price: 1200,
  discount: 10,
  rating: 4.2,
  brand: "Nike",
  bestSeller: true,
  image: "https://images.unsplash.com/photo-1521369909029-2afed882baee"
}


];

export default products;

