
import getArgs from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
const startCli =()=>{
	const args = getArgs(process.argv);
	printSuccess('ok')
	printError('error')
	console.log(args);

	if(args.h){
		// help
		printHelp();
	}
	if(args.v){
		// version
	}
	if(args.s){
		// save 
	}
	if(args.t){
		// token
	}
	// result
}

startCli();