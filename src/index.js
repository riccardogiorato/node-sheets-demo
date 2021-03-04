// import Sheets from 'node-sheets';
const Sheets = require("node-sheets").default;

const dotenv = require("dotenv");
dotenv.config();

/*
Google Sheet example with a list of students here
https://docs.google.com/spreadsheets/d/1-UeQshwrIbxUwYuTIspGlSdUsy6cR1gDR6texuyB7G4/edit?usp=sharing
*/

(async () => {
  try {
    const gs = new Sheets("1-UeQshwrIbxUwYuTIspGlSdUsy6cR1gDR6texuyB7G4");
    await gs.authorizeApiKey(process.env.GOOGLE_SHEET_KEY);
    const table = await gs.tables("Class Data!A:F");
    console.log(table.headers);
    console.log();
    console.log(table.rows);
  } catch (err) {
    console.error(err);
  }
})();
