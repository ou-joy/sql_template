const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

//let sql = `
//CREATE TABLE IF NOT EXISTS Users(
//   ID TEXT PRIMARY KEY,
//    Username TEXT,
//    Emali TEXT,
//    DOB TEXT
//); 
//`

//let sql = `
//SELECT name FROM pragma_table_info("Users");
//`

// let sql = `SELECT * FROM Users;`
// db.all(sql, (error, results) => {
//     if (error) return console.error (error);
//     results. forEach (row => {
//     console. log (row);
//     });
// });

// let sql=`SELECT*FROM Users
// WHERE ID=1234567;`

// let sql=`
// UPDATE Users
// SET Emali = "timmy@success.org"
// WHERE id="1234567"
// `
// db.exec(sql);

let sql=`
DELETE FROM Users
WHERE id = "1234567";
`
db.exec(sql);

//`
//INSERT INTO Users(ID, Username,Emali,DOB)
//VALUES("13581", "Bob", "bob@csie.com", "2005-10-28");
//`

// `
// ALTER TABLE Users
// RENAME COLUMN Email TO Emali;
// `

db.all(sql,CallbackFunc);

//db.exec(sql, CallbackFunc);