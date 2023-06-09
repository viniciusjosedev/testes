import express from 'express';

const app = express();

app.use(express.json());

const processo = process.pid;

app.get('/', (req, res) => {
	console.log('teste', processo);
	return res.status(200).send('ok')
})

app.post('/', (req, res) => {
	console.log('teste', processo);
	setTimeout(() => {
		throw new Error('teste')
	}, 1000)
})

app.listen(3000, () => {
	console.log('rodando na porta 3000', processo);
})
