const Sheets = require("node-sheets").default;
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  try {
    const gs = new Sheets("1amfst1WVcQDntGe6walYt-4O5SCrHBD5WntbjhvfIm4");
    await gs.authorizeApiKey(process.env.GOOGLE_SHEET_KEY);
    const table = await gs.tables("Class Data!A1:H3");
    console.log(table.headers);
    console.log(table.rows);
  } catch (err) {
    console.error(err);
  }
})();
