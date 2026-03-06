const data = [
  {
    title: "A'bad Hotel",
    description:
      "Welcomhotel by ITC Hotels, Rama International, Aurangabad is located in Aurangabad. The Aurangabad Airport is 2.5 mi away. Free WiFi is available. Air-conditioned rooms include a seating area, electric kettle, private bathroom with shower, free toiletries, and slippers. Guests can enjoy a garden view, 24-hour front desk, tour desk, laundry facilities, and free parking. The hotel is near Bibi Ka Maqbara, Ellora Caves, Aurangabad Bus Station, and Railway Station. The in-house restaurant serves Indian, Chinese, and continental food.",
    image: {
      url: "https://res.cloudinary.com/dmbrzaioz/image/upload/v1772780269/wonderLust_DEV/iui8us0cahgd2kwi6oue.jpg",
      filename: "wonderLust_DEV/iui8us0cahgd2kwi6oue",
    },
    price: 11001,
    location: "Aurangabad",
    country: "India",
    category: "Morden",
    geometry: {
      type: "Point",
      coordinates: [75.3390241, 19.877263],
    },
  },
  {
    title: "Sea Breeze Retreat",
    description:
      "A peaceful beachfront stay with airy rooms, a sea-facing restaurant, and direct beach access. Perfect for couples and families looking for a relaxing coastal getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "listingimage",
    },
    price: 8500,
    location: "Goa",
    country: "India",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [73.8278, 15.4909],
    },
  },
  {
    title: "Mountain Mist Lodge",
    description:
      "A cozy stay in the hills featuring wooden interiors, valley views, bonfire evenings, and warm local hospitality. Great for a peaceful mountain vacation.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "listingimage",
    },
    price: 6200,
    location: "Manali",
    country: "India",
    category: "Mountain",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432],
    },
  },
  {
    title: "City Lights Residency",
    description:
      "Modern business hotel in the heart of the city with elegant rooms, WiFi, conference facilities, and easy access to shopping and restaurants.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "listingimage",
    },
    price: 7200,
    location: "Mumbai",
    country: "India",
    category: "City",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
  },
  {
    title: "Royal Fort Palace Stay",
    description:
      "A heritage-style palace property with royal interiors, courtyard dining, cultural evenings, and a regal atmosphere for a memorable stay.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "listingimage",
    },
    price: 14500,
    location: "Jaipur",
    country: "India",
    category: "Castle",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },
  {
    title: "Blue Lagoon Pool Villa",
    description:
      "Private pool villa with luxury interiors, spacious bedrooms, and a beautiful outdoor lounge area. Ideal for group stays and celebrations.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      filename: "listingimage",
    },
    price: 16800,
    location: "Lonavala",
    country: "India",
    category: "Pool",
    geometry: {
      type: "Point",
      coordinates: [73.4062, 18.7546],
    },
  },
  {
    title: "Forest Camp Haven",
    description:
      "Experience nature with luxury tents, campfire nights, guided trails, and delicious local meals in a serene forest setting.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "listingimage",
    },
    price: 3900,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },
  {
    title: "Countryside Farm Escape",
    description:
      "Enjoy a rustic farm stay with organic meals, green fields, animal interactions, and a peaceful village atmosphere away from the city.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "listingimage",
    },
    price: 4500,
    location: "Nashik",
    country: "India",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [73.7898, 19.9975],
    },
  },
  {
    title: "Urban Nest Suites",
    description:
      "A sleek modern stay with stylish interiors, smart check-in, contemporary design, and all essential amenities for city travelers.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "listingimage",
    },
    price: 8100,
    location: "Bengaluru",
    country: "India",
    category: "Morden",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },
  {
    title: "Snowline Chalet",
    description:
      "A beautiful snowy retreat with warm rooms, mountain views, and easy access to winter sports and scenic spots.",
    image: {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      filename: "listingimage",
    },
    price: 9800,
    location: "Gulmarg",
    country: "India",
    category: "Snow",
    geometry: {
      type: "Point",
      coordinates: [74.3805, 34.0484],
    },
  },
  {
    title: "Cool Arctic Dome",
    description:
      "Unique igloo-inspired stay with a stunning cold-climate design, cozy bedding, and unforgettable photo-worthy interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      filename: "listingimage",
    },
    price: 12500,
    location: "Leh",
    country: "India",
    category: "Artic",
    geometry: {
      type: "Point",
      coordinates: [77.577, 34.1526],
    },
  },
  {
    title: "Palm Shore Rooms",
    description:
      "Comfortable beachside rooms with palm views, fresh seafood, and calm surroundings for a relaxed holiday.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      filename: "listingimage",
    },
    price: 5400,
    location: "Kochi",
    country: "India",
    category: "Room",
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312],
    },
  },
  {
    title: "Metro Stay Deluxe",
    description:
      "Affordable and comfortable city accommodation with quick metro access, cozy rooms, and nearby food streets.",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      filename: "listingimage",
    },
    price: 4300,
    location: "Delhi",
    country: "India",
    category: "City",
    geometry: {
      type: "Point",
      coordinates: [77.1025, 28.7041],
    },
  },
  {
    title: "Sunset Cliff Resort",
    description:
      "A trendy clifftop property offering sunset views, premium rooms, infinity-style lounging areas, and elegant dining.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      filename: "listingimage",
    },
    price: 13200,
    location: "Varkala",
    country: "India",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [76.7163, 8.7379],
    },
  },
  {
    title: "Pine Valley Cabins",
    description:
      "Wooden cabins tucked in pine forests with crisp air, hiking trails, and a calm atmosphere ideal for couples and solo travelers.",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      filename: "listingimage",
    },
    price: 6700,
    location: "Shimla",
    country: "India",
    category: "Mountain",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048],
    },
  },
  {
    title: "Lakeview Royal Castle",
    description:
      "Historic architecture meets comfort in this charming castle-style stay overlooking a scenic lake and landscaped gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
      filename: "listingimage",
    },
    price: 15200,
    location: "Udaipur",
    country: "India",
    category: "Castle",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854],
    },
  },
  {
    title: "Emerald Pool House",
    description:
      "Chic vacation home with a private pool, stylish decor, open living spaces, and a relaxing weekend vibe.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "listingimage",
    },
    price: 11900,
    location: "Alibaug",
    country: "India",
    category: "Pool",
    geometry: {
      type: "Point",
      coordinates: [72.8679, 18.6414],
    },
  },
  {
    title: "Riverside Tented Camp",
    description:
      "Adventure camp by the river with rafting access, shared bonfires, clean tents, and thrilling outdoor experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7",
      filename: "listingimage",
    },
    price: 3600,
    location: "Kasol",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [77.3152, 32.0096],
    },
  },
  {
    title: "Green Acres Farmhouse",
    description:
      "Spacious farmhouse with fruit orchards, fresh breakfast, village charm, and lots of open space for families.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "listingimage",
    },
    price: 5100,
    location: "Pune",
    country: "India",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 18.5204],
    },
  },
  {
    title: "Glass House Modern Stay",
    description:
      "A premium modern apartment featuring glass walls, minimalist interiors, fast WiFi, and a luxury urban experience.",
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      filename: "listingimage",
    },
    price: 9300,
    location: "Hyderabad",
    country: "India",
    category: "Morden",
    geometry: {
      type: "Point",
      coordinates: [78.4867, 17.385],
    },
  },
  {
    title: "Frozen Peaks Residency",
    description:
      "High-altitude snow destination stay with heated rooms, hot meals, and unbeatable mountain scenery.",
    image: {
      url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
      filename: "listingimage",
    },
    price: 10400,
    location: "Auli",
    country: "India",
    category: "Snow",
    geometry: {
      type: "Point",
      coordinates: [79.57, 30.5284],
    },
  },
];

module.exports = { data };