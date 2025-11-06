// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,       // e.g. aws.connect.psdb.cloud
  user: process.env.DB_USER,       // username from PlanetScale password
  password: process.env.DB_PASS,   // password from PlanetScale password
  database: process.env.DB_NAME,   // e.g. college_eventhub
  port: Number(process.env.DB_PORT || 3306),
  ssl: { rejectUnauthorized: true } // PlanetScale requires SSL
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connect error:', err.message);
    process.exit(1);
  }
  console.log('✅ MySQL Connected');
});

module.exports = db;
