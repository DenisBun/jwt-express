import express from 'express';

import { router } from './router';

const app = express();
const PORT = 3000;

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
