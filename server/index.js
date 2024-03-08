//test




// Import required modules
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

// Create an Express application
const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQLite database.");
});
// Create 'users' table if not exists
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`,
    (err) => {
      if (err) {
        console.error("Error creating table:", err.message);
      } else {
        console.log('Table "users" created successfully.');
      }
    }
  );
});

//Login End-Point

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to add a new user
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Insert user into the database
  db.run(
    `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, password],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "User added successfully", userId: this.lastID });
    }
  );
});


//Login End-Point
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if user exists in the database
  db.get(
    `SELECT * FROM users WHERE email = ? AND password = ?`,
    [email, password],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (!row) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Return user information if login is successful
      res.json({
        message: "Login successful",
        user: {
          id: row.id,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
        },
      });
    }
  );
});

//Log Out
app.post("/logout", (req, res) => {
  res.json({ message: "Logout successful" });
});







// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
