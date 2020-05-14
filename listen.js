// Compile: tsc listen.ts  or  tsc listen.ts --skipLibCheck true
var Server = require('./server');
var modPack = { name: "" };
try {
    modPack = require('./package.json');
    process.title = modPack.name;
}
catch (err) {
    process.title = "diffNG";
    console.log('package.json path is invalid');
}
Server.listen("angular");
