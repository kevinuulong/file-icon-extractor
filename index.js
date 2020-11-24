'use-strict';
const shell = require('node-powershell');
const path = require('path');

function registerShell() {
	return new shell({
		executionPolicy: 'Bypass',
		noProfile: true
	});
}

module.exports = function extract(filePath, destinationPath, format = "png") {
	const filePaths = filePath => [].concat(filePath),
		ps = registerShell();
	ps.addCommand(`Add-Type -AssemblyName System.Drawing`)
	filePaths(filePath).forEach(element => {
		var finalDestinationPath = path.join(destinationPath, `${path.basename(element, path.extname(element))}.${format}`);
		ps.addCommand(`[System.Drawing.Icon]::ExtractAssociatedIcon('${element}').ToBitmap().Save('${finalDestinationPath}','${format}')`)
	});
	ps.invoke().then().catch(err => {
		console.log(err);
		ps.dispose();
	});
}
