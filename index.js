
import getArgs from './helpers/args.js'
import { getIcon,  getWeather } from './services/api.service.js'
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js'
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'

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
const saveCity = async(city)=>{
	if(!city.length){
		 printError('City is not provided')
		 return
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city)
		printSuccess('City is saved')
		
	} catch (error) {
		return printError(error.message)
	}
}

const getForecast = async()=>{
	try {
		const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
		const response = await getWeather(city)
		printWeather(response, getIcon(response.weather[0].icon))
	  
	} catch (error) {
		if(error?.response?.status == 404){
			printError('City not found')
		}else if(error?.response?.status == 401){
			printError('Invalid API key')	
		}else{
			printError(error.message)
		
	}

}
}
const startCli =()=>{
	const args = getArgs(process.argv);
	// console.log(process.env)
	
	if(args.h){
		// help
		printHelp();
	}
	if(args.v){
		// version
	}
	if(args.s){
		// save  city
		return saveCity(args.s)
	}
	if(args.t){
		// save token
		return saveToken(args.t)
	}
	// result
	return getForecast()
}


startCli();