const Sheets = require("node-sheets").default;
const dotenv = require("dotenv");
dotenv.config();

/*
Google Sheet example with a list of students here
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0
*/

(async () => {
  try {
    const gs = new Sheets("1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms");
    await gs.authorizeApiKey(process.env.GOOGLE_SHEET_KEY);
    const table = await gs.tables("Class Data!A:F");
    console.log(table.headers);
    console.log();
    console.log(table.rows);
  } catch (err) {
    console.error(err);
  }
})();
