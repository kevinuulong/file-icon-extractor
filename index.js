const shell = require('node-powershell');

// Example Object Format
// var obj = {
//     "C:\\Users\\Kevin Long\\AppData\\Local\\slack\\slack.exe": "C:\\users\\Kevin Long\\Documents\\GitHub\\program-icon-extractor\\output\\slack.bmp",
//     "C:\\Users\\Kevin Long\\AppData\\Roaming\\Spotify\\Spotify.exe": "C:\\users\\Kevin Long\\Documents\\GitHub\\program-icon-extractor\\output\\Spotify.bmp"
// }

// Test Cases
// toBmp("C:\\Users\\Kevin Long\\AppData\\Local\\slack\\slack.exe", "C:\\users\\Kevin Long\\Documents\\slack.bmp");
// toBmps(obj);

function registerShell() {
    return new shell({
        executionPolicy: 'Bypass',
        noProfile: true
    });
}

function toBmp(programPath, destinationPath) {
    ps = registerShell();
    ps.addCommand(`Add-Type -AssemblyName System.Drawing`)
    ps.addCommand(`[System.Drawing.Icon]::ExtractAssociatedIcon('${programPath}').ToBitmap().Save('${destinationPath}')`)
    ps.invoke().then(output => {
        console.log(output);
    }).catch(err => {
        console.log(err);
        ps.dispose();
    });
}

function toBmps(obj) {
    ps = registerShell();
    ps.addCommand(`Add-Type -AssemblyName System.Drawing`)
    var programPaths = Object.keys(obj),
        destinationPaths = Object.values(obj);
    if (programPaths.length == destinationPaths.length) {
        for (i = 0; i < programPaths.length; i++) {
            ps.addCommand(`[System.Drawing.Icon]::ExtractAssociatedIcon('${programPaths[i]}').ToBitmap().Save('${destinationPaths[i]}')`)
        }
    }
    ps.invoke().then(output => {
        console.log(output);
    }).catch(err => {
        console.log(err);
        ps.dispose();
    });
}