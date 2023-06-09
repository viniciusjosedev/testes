import os from 'os';
import cluster from 'cluster';

const primary = () => {
	const cpus = os.cpus().length;

	console.log(`${process.pid}`);
	console.log(`quantidade de cpus: ${cpus}`);

	for(let index = 0; index < cpus; index += 1) {
		cluster.fork()
	}
}

const worker = async () => {
	await import ('./index.js');
}

cluster.isPrimary ? primary() : worker()  
