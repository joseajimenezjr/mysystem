var mycookie = document.cookie
var start = mycookie.split('token=');
var end = start[1].split(' expires');
var mytokenapi = end[0];


export default mytokenapi
