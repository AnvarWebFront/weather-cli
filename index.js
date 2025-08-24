const getArgs=require('./helpers/args');

const startCli =()=>{
	const args = getArgs(process.argv);
	console.log(args);

	if(args.h){
		// help
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