
import getArgs from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken = async(token)=>{
	try {
		await saveKeyValue('token', token)
		printSuccess('Token saved')
		
	} catch (error) {
		return printError(error.message)
	}
}
const startCli =()=>{
	const args = getArgs(process.argv);
	// printSuccess('ok')
	// printError('error')
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
		return saveToken(args.t)
	}
	// result
}

startCli();