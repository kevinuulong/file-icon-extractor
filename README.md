# file-icon-extractor

 Extract icons from files.

---

### Installation

`$ npm i file-icon-extractor`



### Usage

`const icon = require('file-icon-extractor');`



### icon.extract(filePath, destinationPath, format);

| parameter           | explanation                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filePath`          | A valid file path (string) or array of file paths for the file(s) you wish to fetch icon(s) from.                                                                                 |
| `destinationPath`   | Where you want to save the output image (directory).                                                                                                                              |
| `format` (optional) | Output image format. (png, jpeg, gif, [etc.](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.imaging.imageformat?view=dotnet-plat-ext-5.0#properties)) Default is png. |

### Quick Start

```js
const icon = require('file-icon-extractor');

// Extract singluar icon
icon.extract("C:\\Users\\USERNAME\\AppData\\Local\\slack\\slack.exe", "C:\\Users\\USERNAME\\Documents");
```

```js
const icon = require('file-icon-extractor');

var programs = [
    "C:\\Users\\USERNAME\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
    "C:\\Users\\USERNAME\\AppData\\Local\\slack\\slack.exe"
]

// Extract mutiple icons (as jpeg)
icon.extract(programs, "C:\\Users\\USERNAME\\Documents", "jpeg");
```

### Support

| Platform | Details                                                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows: | Support has been tested and confirmed on Windows as of [`v1.0.2`](https://github.com/kevinuulong/file-icon-extractor/releases/tag/v1.0.2) for any filetype with an icon association in `explorer`, this includes `.exe` files. |
| Linux:   | Theoretically support should exist; however, as of [`v1.0.2`](https://github.com/kevinuulong/file-icon-extractor/releases/tag/v1.0.2) this has not yet been thoroughly tested.                                                  |
| Mac OS:  | Theoretically support should exist; however, as of [`v1.0.2`](https://github.com/kevinuulong/file-icon-extractor/releases/tag/v1.0.2) this has not yet been thoroughly tested.                                                  |

### Issues

Please submit any issues through [the issues tab on GitHub](https://github.com/kevinuulong/file-icon-extractor/issues).
