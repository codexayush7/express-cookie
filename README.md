# 🍪 Express Cookie App

A simple Node.js + Express app demonstrating how to set, read, and clear signed cookies using `cookie-parser`.

---

## 🔗 Live Test (Localhost)

After starting the app, test using these links in your browser:

- [http://localhost:9000/set-cookie](http://localhost:9000/set-cookie) → Set a signed cookie  
- [http://localhost:9000/get-cookie](http://localhost:9000/get-cookie) → Get the signed cookie  
- [http://localhost:9000/clear-cookie](http://localhost:9000/clear-cookie) → Clear the cookie  

---

## 💡 Features

- Set signed cookies (tamper-proof)
- Read cookies using `req.signedCookies`
- Clear cookies with `res.clearCookie`

---

## 🧰 Tech Stack

- Node.js
- Express
- cookie-parser

---

## 🛠 How to Run Locally

```bash
git clone https://github.com/your-username/express-cookie-app.git
cd express-cookie-app
npm install
npm start
