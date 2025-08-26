import chalk from 'chalk';

import dedent from 'dedent-js';
const printError=(error)=>{
	console.log(chalk.bgRed('Error: '  + ' ' +  error));
}
const printSuccess=(message)=>{
	console.log(chalk.bgGreen('Success: ' + ' ' + message));
}
const printHelp=()=>{
	console.log(dedent(`
${chalk.bgCyan('Help:')}
 -s [CITY] for install city
 -h for help
 -t [API_KEY] for save token
	`))
}

const printWeather = (response, icon)=>{
	console.log(dedent(`
${chalk.bgYellow('Weather in the city ')} ${response.name}
Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
Weather: ${response.weather[0].description} ${icon}
Humidity: ${response.main.humidity}%
Wind speed: ${response.wind.speed} m/s
		`))
}
export  {printError, printSuccess, printHelp, printWeather};
