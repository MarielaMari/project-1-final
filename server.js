import express from 'express';

const app = express ();
const PORT = 4444;
app.listen (PORT, () => {
  console.log (`Server listening on port: ${PORT}`);
});
