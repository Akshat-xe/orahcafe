// ─── Real food & café photos from the uploaded gallery ───────────────────────
import eggsBennyPhoto from "@/assets/Pasted image (32).png";      // Eggs Benny plate
import buddhaBowlPhoto from "@/assets/Pasted image (16).png";     // Buddha Bowl overhead
import steakSandwichPhoto from "@/assets/Pasted image (26).png";  // Steak on ciabatta
import chickenBurgerPhoto from "@/assets/Pasted image (19).png";  // Burger with fries
import avocadoBowlPhoto from "@/assets/Pasted image (3).png";     // Avocado/greens bowl
import coffeeLattePhoto from "@/assets/Pasted image (4).png";     // Latte with heart art
import flatWhitePhoto from "@/assets/Pasted image (43).png";      // Clean flat white cup
import chaiLattePastryPhoto from "@/assets/Pasted image (20).png";// Coffee with pastry
import salmonFilletPhoto from "@/assets/Pasted image (13).png";   // Salmon on greens
import baconEggRollPhoto from "@/assets/Pasted image (44).png";   // Bacon egg roll
import pastryCounterPhoto from "@/assets/Pasted image (6).png";   // Bakery display case
import fruitBowlPhoto from "@/assets/Pasted image (31).png";      // Fresh fruit bowl
import soupPitaPhoto from "@/assets/Pasted image (30).png";       // Soup with pita
import grainSaladPhoto from "@/assets/Pasted image (35).png";     // Grain salad lemon
import salmonBowlPhoto from "@/assets/Pasted image (36).png";     // Salmon with salad
import baconEggBagelPhoto from "@/assets/Pasted image (37).png";  // Bacon egg bagel
import steakSandwich2Photo from "@/assets/Pasted image (41).png"; // Steak sandwich alt
import outdoorTablePhoto from "@/assets/Pasted image (25).png";   // Outdoor café table
import chickenSaladPhoto from "@/assets/Pasted image (5).png";    // Chicken salad
import bigBurgerPhoto from "@/assets/Pasted image (2).png";       // Double burger
import noodleDrinkPhoto from "@/assets/Pasted image (7).png";     // Noodle bowl + drink
// ─── New real photos ──────────────────────────────────────────────────────────
import slide1Photo from "@/assets/slide1.jpg";
import slide2Photo from "@/assets/slide2.jpg";
import slide3Photo from "@/assets/slide3.jpg";
import slide4Photo from "@/assets/slide4.jpg";
import large1Photo from "@/assets/large1.jpg";
import large2Photo from "@/assets/large2.jpg";
import l1Photo from "@/assets/l1.jpg";
import l2Photo from "@/assets/l2.jpg";
import l3Photo from "@/assets/l3.jpg";
import l4Photo from "@/assets/l4.jpg";
import s1Photo from "@/assets/s1.jpg";
import s2Photo from "@/assets/s2.jpg";
import s3Photo from "@/assets/s3.jpg";
import s4Photo from "@/assets/s4.jpg";

export type Dietary = "V" | "GF";

export type MenuItem = {
  name: string;
  price?: number;
  description?: string;
  dietary?: Dietary[];
  add?: { label: string; price: number }[];
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const highlights = [
  {
    name: "Eggs Benny Benny",
    tag: "Most Loved",
    price: 19.9,
    image: eggsBennyPhoto,
    blurb: "Poached eggs, smoked salmon and silky hollandaise on toasted muffin.",
  },
  {
    name: "Orah Buddha Bowl",
    tag: "House Pick",
    price: 22.9,
    image: buddhaBowlPhoto,
    blurb: "Quinoa, roasted veg, avocado and tahini — fresh, whole, energising.",
  },
  {
    name: "Orah's Steak Sandwich",
    tag: "Café Favourite",
    price: 22.9,
    image: steakSandwichPhoto,
    blurb: "Grilled steak, caramelised onion and melted cheese on toasted ciabatta.",
  },
  {
    name: "Graceful Chicken Burger",
    tag: "Popular",
    price: 19.9,
    image: chickenBurgerPhoto,
    blurb: "Crispy chicken, fresh greens and house aioli on a soft brioche bun.",
  },
  {
    name: "Very Much Avocado",
    tag: "Brunch Favourite",
    price: 19.9,
    image: avocadoBowlPhoto,
    blurb: "Smashed avo, feta and seeds on grainy sourdough.",
  },
  {
    name: "Long Black",
    tag: "Coffee Essential",
    price: 4.1,
    image: coffeeLattePhoto,
    blurb: "Bold, smooth, full crema. The Perth morning starter.",
  },
  {
    name: "Lemon Chicken Salad",
    tag: "Light & Fresh",
    price: 22.9,
    image: grainSaladPhoto,
    blurb: "Grilled chicken on four grains with fresh greens and lemon.",
  },
  {
    name: "Orah's Soup",
    tag: "Comfort Bowl",
    price: 16,
    image: soupPitaPhoto,
    blurb: "Creamy potato and mushroom, served warm with Turkish bread.",
  },
  {
    name: "Bacon Egg Roll",
    tag: "Quick Bite",
    price: 8.9,
    image: baconEggRollPhoto,
    blurb: "Streaky bacon, runny egg and melted cheese on a soft roll.",
  },
  {
    name: "Smoked Salmon",
    tag: "Fresh Pick",
    price: 24.9,
    image: salmonFilletPhoto,
    blurb: "Pan-seared salmon on creamy mash with romesco and rocket.",
  },
  {
    name: "Chai Latte",
    tag: "Café Favourite",
    price: 5.5,
    image: chaiLattePastryPhoto,
    blurb: "Spiced chai, steamed milk and a kiss of cinnamon.",
  },
  {
    name: "Fresh Fruit Bowl",
    tag: "Sweet & Fresh",
    price: 9.9,
    image: fruitBowlPhoto,
    blurb: "Seasonal tropical fruits with chia seeds and a drizzle of honey.",
  },
];

export const galleryImages = [
  { src: slide1Photo, label: "Orah Cafe" },
  { src: slide2Photo, label: "Morning at Orah" },
  { src: large1Photo, label: "Café Interior" },
  { src: eggsBennyPhoto, label: "Eggs Benny Benny" },
  { src: slide3Photo, label: "Café Moments" },
  { src: l1Photo, label: "Orah Vibes" },
  { src: buddhaBowlPhoto, label: "Orah Buddha Bowl" },
  { src: large2Photo, label: "Coffee & Calm" },
  { src: steakSandwichPhoto, label: "Steak Sandwich" },
  { src: slide4Photo, label: "Brunch Hour" },
  { src: l2Photo, label: "Café Corner" },
  { src: chickenBurgerPhoto, label: "Chicken Burger" },
  { src: s1Photo, label: "Little Details" },
  { src: avocadoBowlPhoto, label: "Avocado Bowl" },
  { src: l3Photo, label: "Perth Morning" },
  { src: salmonFilletPhoto, label: "Smoked Salmon" },
  { src: s2Photo, label: "Coffee Art" },
  { src: flatWhitePhoto, label: "Flat White" },
  { src: l4Photo, label: "Hay Street" },
  { src: coffeeLattePhoto, label: "Latte" },
  { src: s3Photo, label: "Fresh & Bright" },
  { src: chaiLattePastryPhoto, label: "Chai Latte" },
  { src: baconEggRollPhoto, label: "Bacon Egg Roll" },
  { src: s4Photo, label: "Café Life" },
  { src: pastryCounterPhoto, label: "Bakery Counter" },
  { src: fruitBowlPhoto, label: "Fresh Fruit Bowl" },
  { src: soupPitaPhoto, label: "Orah's Soup" },
  { src: grainSaladPhoto, label: "Grain Salad" },
  { src: salmonBowlPhoto, label: "Salmon Plate" },
  { src: baconEggBagelPhoto, label: "Bacon Egg Bagel" },
  { src: steakSandwich2Photo, label: "Steak Sandwich" },
  { src: outdoorTablePhoto, label: "Outdoor Seating" },
  { src: chickenSaladPhoto, label: "Chicken Salad" },
  { src: bigBurgerPhoto, label: "Double Burger" },
  { src: noodleDrinkPhoto, label: "Nudely Noodle" },
];

export const food: MenuCategory[] = [
  {
    title: "Special Combos",
    items: [
      { name: "Bacon Egg Roll", description: "Served with a small coffee or tea." },
      { name: "Egg Vege Wrap", description: "Served with a small coffee or tea.", dietary: ["V"] },
      { name: "Gnocchi Bowl", price: 20, dietary: ["V"] },
    ],
  },
  {
    title: "All-Day · Breakfast · Lunch",
    items: [
      { name: "Eggs Benny Benny", price: 19.9, description: "Poached eggs and silky hollandaise on toasted muffin.", add: [{ label: "bacon", price: 5 }, { label: "smoked salmon", price: 6 }] },
      { name: "Very Much Avocado", price: 19.9, description: "Smashed avo, feta, seeds, sourdough.", dietary: ["V"], add: [{ label: "eggs", price: 4 }] },
      { name: "Mushroom World War", price: 19.9, description: "Wild mushrooms, garlic cream, sourdough.", dietary: ["V"], add: [{ label: "eggs", price: 4 }] },
      { name: "Cheese Mania Burger", price: 19.9, description: "Beef patty, triple cheese, brioche.", add: [{ label: "herby chips", price: 3 }] },
      { name: "Graceful Chicken Burger", price: 19.9, description: "Crispy chicken, greens, house aioli.", add: [{ label: "herby chips", price: 3 }] },
      { name: "Orah's Steak Sandwich", price: 22.9, description: "Grilled steak, caramelised onion, cheese, ciabatta.", add: [{ label: "herby chips", price: 3 }] },
      { name: "Hardwood Smoked Ham Sandwich", price: 15, description: "Smoked ham, mustard, pickles.", add: [{ label: "herby chips", price: 3 }] },
      { name: "I Love B.T.S", price: 20.9, description: "Bacon, tomato, spinach — Orah style.", add: [{ label: "herby chips", price: 3 }] },
      { name: "Lemon Chicken Salad with 4 Grains", price: 22.9 },
      { name: "Orah Buddha Bowl", price: 22.9, description: "Quinoa, roasted veg, avocado, tahini.", dietary: ["V"], add: [{ label: "chicken", price: 4 }] },
      { name: "Pesto Chicken & 5 Nuts Salad", price: 21.9, dietary: ["GF"] },
      { name: "Swimming Chicken Salad Bowl", price: 21.9, dietary: ["GF"] },
      { name: "Chicken in the Mash", price: 21.9, description: "Mushroom gravy, rocket, creamy mash." },
      { name: "Orah Pasta", price: 23.9, description: "Chicken, bacon and mixed mushroom." },
      { name: "Creamy Korean Bulgogi Pasta", price: 22.9, description: "Bulgogi with creamy mushroom sauce." },
      { name: "Korean Beef Bulgogi Rice", price: 20.9, description: "Soy-marinated beef with mushroom." },
      { name: "Orah's Parmy", price: 24.9, description: "House parmy, Swiss cheese, mushroom gravy, slaw, chips." },
      { name: "Chorizo Pasta", price: 22.9, description: "Chorizo, mushroom, sundried tomato, olive, rocket." },
      { name: "Salmon is the Best", price: 24.9, description: "Mash and romesco.", dietary: ["GF"] },
      { name: "Knock-Out Gnocchi Bowl", price: 21.9, dietary: ["V"], add: [{ label: "chicken", price: 4 }] },
      { name: "Grilled Lemon Chicken Salad", price: 21 },
      { name: "Orah's Soup", price: 16, description: "Creamy potato and mushroom, Turkish-style.", add: [{ label: "chicken", price: 4 }] },
      { name: "Curry Special", price: 22, description: "Chicken tikka masala." },
      { name: "Pork Belly Dance with Chillies", price: 21 },
      { name: "Nudely Noodle", description: "Sweet potato noodle, mushroom, carrot, onion, spinach, garlic.", dietary: ["GF", "V"] },
    ],
  },
];

export const drinks: MenuCategory[] = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: 3.5 },
      { name: "Long Black", price: 4.1 },
      { name: "Flat White", price: 4.3 },
      { name: "Latte", price: 4.3 },
      { name: "Cappuccino", price: 4.3 },
      { name: "Mocha", price: 4.9 },
      { name: "Piccolo", price: 4.3 },
      { name: "Short Mac", price: 4.3 },
      { name: "Long Mac", price: 4.9 },
      { name: "Affogato", price: 4.5 },
    ],
  },
  {
    title: "Orah Tea",
    items: [
      { name: "Yuzu (Citron) Tea", price: 4.9 },
      { name: "Lemon Ginger & Honey Tea", price: 4.9 },
      { name: "English Breakfast Tea", price: 4.5 },
      { name: "Earl Grey", price: 4.5 },
      { name: "Hibiscus", price: 4.5 },
      { name: "Chamomile", price: 4.5 },
      { name: "Peppermint", price: 4.5 },
      { name: "Rooibos", price: 4.5 },
      { name: "Green Sencha", price: 4.5 },
    ],
  },
  {
    title: "Smoothies",
    items: [
      { name: "Mango", price: 8 },
      { name: "Blueberry", price: 8 },
      { name: "Banana", price: 8 },
      { name: "Strawberry", price: 8 },
      { name: "Passionfruit", price: 8 },
      { name: "Any Mixed of 2", price: 9 },
    ],
  },
  {
    title: "Milkshakes",
    items: [
      { name: "Caramel", price: 7 },
      { name: "Chocolate", price: 7 },
      { name: "Banana", price: 7 },
      { name: "Vanilla", price: 7 },
      { name: "Strawberry", price: 7 },
      { name: "Any Mixed of 2", price: 8 },
    ],
  },
  {
    title: "Other Drinks",
    items: [
      { name: "Strawberry Matcha Iced", price: 6.9 },
      { name: "Fresh Watermelon Juice", price: 7 },
      { name: "Fruit Smoothie (any 2 mixed)", price: 8.5 },
    ],
  },
  {
    title: "Bakery",
    items: [
      { name: "Blueberry Muffin", price: 5.7 },
      { name: "Chocolate Muffin", price: 5.7 },
      { name: "Butter Muffin", price: 5.7 },
      { name: "Chocolate Croissant", price: 6.5 },
      { name: "Melting Moment", price: 8.5 },
      { name: "Protein Oat Bar", price: 4.5 },
      { name: "Chocochip with Macadamia", price: 6 },
    ],
  },
];

export const business = {
  name: "Orah Cafe",
  address: "Suite 3/459 Hay St, Perth WA 6000, Australia",
  addressLine1: "Orah Cafe",
  addressLine2: "Suite 3, 459 Hay Street",
  addressLine3: "Perth WA 6000, Australia",
  phone: "+61 412 473 286",
  phoneHref: "tel:+61412473286",
  rating: 4.9,
  reviews: 440,
  instagram: "https://www.instagram.com/orahcafe/",
  facebook: "https://www.facebook.com/Orahcafe/",
  mapsUrl: "https://maps.app.goo.gl/Uib5mHdJRsC9WPJr7",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Orah+Cafe+Suite+3%2F459+Hay+St+Perth+WA+6000",
  mapsEmbed:
    "https://www.google.com/maps?q=Orah+Cafe,Suite+3%2F459+Hay+St,Perth+WA+6000&t=k&z=18&output=embed",
};

export const amenityGroups = [
  {
    title: "Service options",
    items: ["Dine-in", "Takeaway", "Delivery", "Outdoor seating", "On-site services"],
  },
  {
    title: "Highlights",
    items: ["Great coffee", "Great tea selection"],
  },
  {
    title: "Popular for",
    items: ["Breakfast", "Lunch", "Solo dining"],
  },
  {
    title: "Offerings",
    items: [
      "Coffee",
      "Healthy options",
      "Vegetarian options",
      "Vegan options",
      "Small plates",
      "Quick bite",
    ],
  },
  {
    title: "Dining",
    items: ["Breakfast", "Brunch", "Lunch", "Catering", "Dessert", "Table service"],
  },
  {
    title: "Amenities",
    items: ["Free Wi-Fi", "Restroom"],
  },
  {
    title: "Atmosphere",
    items: ["Casual", "Cozy"],
  },
  {
    title: "Payments",
    items: ["Credit cards", "Debit cards", "NFC mobile payments"],
  },
  {
    title: "Parking",
    items: ["Paid parking lot", "Paid street parking", "Plenty of parking"],
  },
  {
    title: "Accessibility",
    items: [
      "Wheelchair-accessible entrance",
      "Wheelchair-accessible seating",
      "Wheelchair-accessible toilet",
      "Wheelchair-accessible car park",
      "Assistive hearing loop",
    ],
  },
  {
    title: "Children",
    items: ["Good for kids"],
  },
];
