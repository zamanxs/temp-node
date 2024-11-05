const { log } = require('console');
const os = require('os') //fetching the built in module os

//info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currestOS = {
    name :os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currestOS);

// path module 
