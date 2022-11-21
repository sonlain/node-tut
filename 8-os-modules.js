const os = require('os')
    //info about current user

const user = os.userInfo()
console.log(user)
    // method returns the system uptime in seconds

console.log(`They System uptime is ${os.uptime()/360} hour`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)