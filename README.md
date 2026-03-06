# 🌍 WonderLust

WonderLust is a full-stack **Airbnb-inspired travel listing platform** where users can explore stays, create their own listings, upload images, view map-based locations, and share reviews.

It is built with **Node.js, Express, MongoDB, EJS, Passport authentication, Cloudinary image uploads, and map/geocoding integration**.

---

## 🚀 Live Demo

🔗 **Hosted Link:**  
[https://wonderlust-ui93.onrender.com/](https://wonderlust-ui93.onrender.com/)

---

## 👨‍💻 Author

**Asad Shaikh**

🔗 **LinkedIn:**  
[https://www.linkedin.com/in/asad-shaikh-9677522a2/](https://www.linkedin.com/in/asad-shaikh-9677522a2/)

---

## ✨ Features

- User signup, login, and logout
- Create, edit, and delete listings
- Upload listing images using Cloudinary
- Category-based browsing
- Review and rating system
- Only owners can edit/delete their own listings
- Only review authors can delete their own reviews
- Flash messages and form validation
- Location geocoding and live map integration
- Responsive Airbnb-style UI

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Frontend
- EJS
- Bootstrap
- CSS

### Authentication
- Passport.js
- passport-local-mongoose
- express-session
- connect-mongo

### File Upload
- Multer
- Cloudinary
- multer-storage-cloudinary

### Maps & Geocoding
- Leaflet
- OpenStreetMap / Nominatim
- Mapbox token support

### Validation
- Joi

### Deployment
- Render

---

## 📂 Project Structure

```bash
majorproject
│
├── controllers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views
│   ├── layouts
│   ├── listings
│   ├── includes
│   └── users
│
├── public
│   ├── css
│   ├── js
│   └── assets
│
├── init
│   ├── data.js
│   └── index.js
│
├── utlis
│   ├── ExpressError.js
│   ├── geocode.js
│   └── wrapAsync.js
│
├── screenshots
│   ├── home.png
│   ├── about.png
│   ├── listings.png
│   ├── signup.png
│   ├── login.png
│   └── new-listing.png
│
├── CloudConfig.js
├── middleware.js
├── schema.js
├── app.js
├── package.json
└── README.md
