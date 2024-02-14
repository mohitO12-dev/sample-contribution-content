const fs = require("fs");
const sqlite3 = require("sqlite3");

const FILE_PATH = "./db.sqlite3";

const initialize = (db) => {
  db.exec(`
    CREATE TABLE User
    (
      username TEXT PRIMARY KEY,
      password TEXT
    );

    INSERT INTO User (username, password) VALUES ("johndoe", "chocolate");
  `);
};

const connect = () => {
  let db;

  if (fs.existsSync(FILE_PATH)) {
    db = new sqlite3.Database(FILE_PATH);
  } else {
    db = new sqlite3.Database(FILE_PATH, (err) => {
      if (err) throw new Error(err.message);

      initialize(db);
    });
  }

  console.info("[+] Connection with SQLite has been established");

  return db;
};

module.exports = connect();
