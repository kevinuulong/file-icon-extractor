const shell = require('node-powershell');
const path = require('path');

// Example Array Format
// var programs = [
// 	"C:\\Users\\USERNAME\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
// 	"C:\\Users\\USERNAME\\AppData\\Local\\slack\\slack.exe"
// ]

// Test Cases
// extract("C:\\Users\\USERNAME\\AppData\\Local\\slack\\slack.exe", "C:\\Users\\USERNAME\\Documents", "png")
// extract(programs, "C:\\Users\\USERNAME\\Documents\\GitHub\\file-icon-extractor\\output", "png")

function registerShell() {
	return new shell({
		executionPolicy: 'Bypass',
		noProfile: true
	});
}

function extract(programPath, destinationPath, format = "jpeg") {
	const programPaths = programPath => [].concat(programPath)
	console.log(programPaths(programPath));
	ps = registerShell();
	ps.addCommand(`Add-Type -AssemblyName System.Drawing`)
	programPaths(programPath).forEach(element => {
		var finalDestinationPath = path.join(destinationPath, `${path.basename(element, path.extname(element))}.${format}`);
		ps.addCommand(`[System.Drawing.Icon]::ExtractAssociatedIcon('${element}').ToBitmap().Save('${finalDestinationPath}','${format}')`)
	});
	ps.invoke().then().catch(err => {
		console.log(err);
		ps.dispose();
	});
}