import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

const { google } = require('googleapis');

// console.log(google.auth);

// const auth = new google.auth.GoogleAuth({
//   keyFile: './true-entropy-132823-1949fe23b931.json',
//   scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
// });

export default function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  // if (req.method !== 'POST')
  //   return res.status(405).send({ message: 'This method is not available' });

  // if (Object.keys(req.body).length === 0) return res.status(400).end();

  const sheets = google.sheets({ version: 'v4' });

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: '1IH4beWQTdWuXVPYXXMLlA4mEwRXlEwOY84e7SR5Dl',
      range: 'B3:D3',
    },
    (err: any, res: any) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;

      if (rows.length) {
        console.log('Name, Major:');
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map((row) => {
          console.log(`${row[0]}, ${row[4]}`);
        });
        console.log(req.body);

        res.json({ message: 'gracias' });
      } else {
        console.log(req.body);

        res.json({ message: 'gracias' });
        console.log('No data found.');
      }
    },
  );
}
