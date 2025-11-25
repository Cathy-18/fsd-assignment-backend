# Simple Inventory Management System

## Objective
Build a backend using ExpressJS, connect to MongoDB using Mongoose, and test APIs using Postman.

## Setup Instructions

1. Clone the repository:
   git clone <your-github-repo-url>(https://github.com/Cathy-18/fsd-assignment-backend)

2. Install dependencies:
   npm install

3. Add a `.env` file in the project root with the following:
   MONGO_URI=mongodb+srv://catherinenixon1b30_db_user:lE8rwXYUK86xEWmN@cluster0.o42beit.mongodb.net/?appName=Cluster0
   PORT=3000

4. Start the server:
   npm start

5. Test the API in your browser or Postman:
   http://127.0.0.1:3000/
   http://127.0.0.1:3000/health

---

## API Endpoints

Method | Route | Description
------ | ----- | -----------
GET | / | Returns "Inventory API is Running"
GET | /health | Returns server status message
GET | /items | List all items
POST | /items | Add a new item
DELETE | /items/:id | Delete an item by ID

---

## Sample JSON for POST /items

{
  "name": "Laptop",
  "quantity": 5,
  "price": 55000
}

Other sample items you can add:

{
  "name": "Mouse",
  "quantity": 20,
  "price": 500
},
{
  "name": "Keyboard",
  "quantity": 15,
  "price": 900
},
{
  "name": "Monitor",
  "quantity": 7,
  "price": 12000
},
{
  "name": "USB Cable",
  "quantity": 50,
  "price": 150
},
{
  "name": "Headphones",
  "quantity": 10,
  "price": 2000
}

---

## Testing with Postman

1. Open Postman and create requests for all routes:
   - GET / → check server status
   - GET /health → server health
   - GET /items → list all items
   - POST /items → add new item
   - DELETE /items/:id → delete an item

2. You can access and import the Postman collection for this project here:  
[Postman Collection Link](https://catherinenixon1b30-2344390.postman.co/workspace/4a5ab8bb-c55a-43ef-8409-a42d9fcc0ca7/collection/50330994-75edf77d-290c-458a-8fb6-e3591d4c9138?action=share&source=copy-link&creator=50330994)
---

## Notes
- Ensure your MongoDB URI is correct in the `.env` file.
- All endpoints are tested and working.
- Optional: You can extend the API with update (PUT) or bulk insert routes if needed.

---

## Author
Catherine Nixon – Second-year Computer Science Student, ASIET, Kalady.
