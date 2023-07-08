require('dotenv').config();
const express = require('express');
const app = express();

require('colors');

const cors = require('cors');

app.use(cors());
app.use(express.json);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`server runing on PORT:${String(PORT).underline.green}`)
);
