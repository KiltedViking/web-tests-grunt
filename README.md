# web-tests-grunt
Miscellaneous tests of web technologies, like HTML, CSS, JavaScript and services offered on Internet, using npm for package management and Grunt as task runner.

Tip: Downloaded repository and viewing README on own computer? Use "linewwrap" in your editor to avoid scrolling horisontally. ;-)

## About repository

### HTML

Testing this and that.

### CSS (Cascading Style Sheets)

Testing
* miscellaneous properties and attributes
* front-end libraries

### JavaScript

Testing
* miscellaneous properties, methods and API's
* libraries and frameworks (like jQuery)

### Task runners

I'm learning to use Grunt as task runner, i.e. to perform repetative tasks/steps. 

I've been adding files to this repository for over 10 years, i.e. I've seen many updates of libraries and frameworks and have got tired of keeping track of versions and updating links/references in files... So I decided to use a package manager (npm) for keeping track of versions and a task runner (Grunt) to "remove version numbers from filenames" (i.e. link/refer to filenames like `jquery.min.js` instead of specific versions like `jquery-3.1.1.min.j`). (As it turned out, version numbers in filenames aren't present when downloaded using npm. ;-) But now I needed Grunt to copy files to "build folder", i.e. `dist`, instead.)

*Please note* that Grunt task including BrowserSync becomes slower and slower the more changes that are made... :-S

### Git

I'm learning how to use Git, which includes not adding (i.e. ignoring) files with sensetive content like API keys and source code (packages) from other developers.

## Set up project and start performing own tests

Install packages (requires Node and npm), build project (i.e. copy files to folder `dist`), start webserver (watching changes to files in folder `src`), and start modifying code (in folder `src`) to do your own tests. ;-)

```
npm install
npm run build
npm run watch
```

(... or use `grunt build` and `grunt watch`, if you dislike typing. ;-))


Björn G. D. Persson, "Kilted Viking", 2020-05-09.
