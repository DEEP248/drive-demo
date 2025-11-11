# 🚀 Drive Upload App

**A simple Node.js (Express) app to upload images locally using Multer, with optional Firebase Admin integration.**  

---

## ✨ Features
- 🖼️ Upload JPG/PNG images via a clean Tailwind UI (EJS)
- 💾 Local disk storage using **Multer** (`public/uploads/`)
- 👀 Instant image preview after upload
- ☁️ Optional Firebase Admin setup for cloud uploads
- 🧱 Minimal, beginner-friendly structure

---

## 📸 Demo
_Add your screenshots or GitHub assets here!_  
Example:  
`![App Screenshot](assets/demo.png)`

---

## 🗂️ Project Structure
project/
├── config/
│ └── multer.config.js
├── public/
│ └── uploads/
├── routes/
│ └── uploadRoute.js
├── views/
│ └── home.ejs
├── app.js
├── package.json
└── README.md


---

## ⚙️ Prerequisites
- 🟢 Node.js (v14+)
- 📦 npm or yarn

---

## 🧰 Setup (Local)

1. **Clone the repo**
   ```bash
   git clone https://github.com/<USERNAME>/<REPO>.git
   cd <REPO>
Install dependencies

npm install


Setup environment variables

cp .env.example .env
# then edit .env with your values


Run the app

npm start
# or
node app.js


Open in browser

http://localhost:5000/home

🧩 How Upload Works

The form sends a POST request to /upload

Multer saves the file to public/uploads/

The route returns the uploaded image URL → /uploads/<filename>

The page displays a preview of the uploaded image 🎉

🔥 Firebase (Optional)

You can integrate Firebase Admin SDK for cloud uploads.

⚠️ Do not commit your Firebase service account JSON to GitHub!

Example:

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); // DO NOT COMMIT

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-bucket-name.appspot.com',
});

module.exports = admin;
