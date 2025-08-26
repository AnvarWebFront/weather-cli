
import getArgs from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'

const saveToken = async(token)=>{
	if(!token.length){
		 printError('Token not provided')
		 return
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token)
		printSuccess('Token saved')
		
	} catch (error) {
		return printError(error.message)
	}
}
const startCli =()=>{
	const args = getArgs(process.argv);
	console.log(process.env)
	
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
	getWeather(process.env.CITY ?? 'Uzbekistan')
}

startCli();