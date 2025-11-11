# Drive Upload App

**Simple Node.js (Express) app to upload images locally using Multer, with optional Firebase Admin integration.**

## Features
- Upload images (JPG/PNG) via a beautiful Tailwind UI (EJS)
- Multer local disk storage (saved in `public/uploads/`)
- Preview uploaded image on success
- Optional Firebase Admin config for later cloud upload
- Minimal, beginner friendly structure

## Demo
(Insert screenshot(s) in `/assets` and link here, or add GitHub repo images)

## Project Structure
project/
├── config/
│ └── multer.config.js
├── public/
│ └── uploads/
├── routes/
│ └── uploadRoute.js
├── views/
│ └── home.ejs
├── app.js (or server.js)
├── package.json
└── README.md


## Prerequisites
- Node.js (>=14)
- npm or yarn

## Setup (local)
1. Clone the repo:
   ```bash
   git clone https://github.com/<USERNAME>/<REPO>.git
   cd <REPO>
Install dependencies:

npm install


Create .env (copy from .env.example) and add your values:

cp .env.example .env
# edit .env


Run the app:

npm start
# or
node app.js


Open the app:

http://localhost:5000/home

How Upload Works

The upload form POSTs to /upload.

multer saves the file to public/uploads/.

The route returns the uploaded image URL: /uploads/<filename> and displays it.

Firebase (optional)

You can add a Firebase Admin service account JSON to integrate with Cloud Storage.

Do not commit the JSON to GitHub. Use hosting secrets or environment variables for production.

Example config/firebase.config.js:

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); // DO NOT COMMIT
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-bucket-name.appspot.com'
});
module.exports = admin;
