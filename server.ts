
// Express server module 'diffNG' exports listen function
// Compile: tsc server.ts  or  tsc server.ts --skipLibCheck true

const listen = function( staticContentFolder: string = 'dist' ) {
    const express = require( 'express' )
    const session = require( 'express-session' )

    const cors = require( 'cors' )

    const path = require( 'path' )
    const fs = require( 'fs' )
    const http = require( 'http' )

    const bodyParser = require( 'body-parser' )
    const cookieParser = require( 'cookie-parser' )

    require( 'dotenv' ).config()
    const preferredPort = process.env.PORT || '80'

    const qs = require( 'qs' )

    const app = express()

    app.use( express.static( staticContentFolder ) )
    app.use( '*', express.static( `${staticContentFolder}/index.html` ) )

    var appServer

    (async () => {
        try {
            appServer = await http.createServer( app ).listen( preferredPort )
            console.log( `[${process.title}]: The app server is listening to port ${preferredPort}` )
            console.log( `static content folder: ${staticContentFolder}` )
        }
        catch(err) {
            //possible permission problem with the port declared in process.env.PORT
            console.log( `[${process.title}]: The app server generated an error` )
            console.log( err )
        }
    })()
}

module.exports = {
    listen: listen
}

