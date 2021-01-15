import express from 'express';
import cors from 'cors';
import routes from './routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package.json');
console.info(`version ${version}`);

const port = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
