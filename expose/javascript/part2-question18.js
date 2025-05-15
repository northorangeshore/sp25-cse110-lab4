function current_time(){
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}
setInterval(current_time, 1000);