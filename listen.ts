
// Compile: tsc listen.ts  or  tsc listen.ts --skipLibCheck true

const Server = require( './server' )

interface modPackMeta {
    name: string
}

let modPack: modPackMeta = { name: "" }
try {
    modPack = require( './package.json' )
    process.title = modPack.name
}
catch(err) {
    process.title = "diffNG"
    console.log( 'package.json path is invalid' )
}
    
Server.listen()

