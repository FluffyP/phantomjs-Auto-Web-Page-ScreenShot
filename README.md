# phantomjs-Auto-Web-Page-ScreenShot
Take a screen shot of a web page with out your browser even being open.

## First: You need to have [phantomjs](http://phantomjs.org/) installed.
PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.

### What you will find here:
* A Bash script (phantomjs_user_screenshot.sh)
* Two JavaScript's (ScreenShotWorker.js and profile.example.js)

## Why and what...
There are acouple sites i belong to which keep stats of my membership. From time to time i like to have a screenshot of my user account on these sites. Rather then visting these sites with my browser once a week, taking a screen, saving to a folder i created the scripts you will find here.

Once a week i run the bash script 'phantomjs_user_screenshot.sh' as a cron job. The 'phantomjs_user_screenshot.sh' in-turn will trigger [phantomjs](http://phantomjs.org/) to run the JavaScript files, automaticly log into my user accounts, take a screen and save it to a folder of my choice.

## How it works...
There is a 'profile_scripts' dir. This folder holds all your profile scripts: google.example.js, yahoo.example.js, etc.

The 'phantomjs_user_screenshot.sh' script will loop over that dir of user scripts and send them to the 'phantomjs' program so it can work its magic and then save the screenshot to a dir of your choice and also delete any screenshot images that exceed your image limit.

### What you need to Edit (two files):
'phantomjs_user_screenshot.sh' has a few varibules at the top:
* phantomjsFile="/path/to/phantomjs/bin/phantomjs"
* cookieFile="/path/to/cookies.txt"
* jsUserScriptsPath="/path/to/profile_scripts"
Note: paths should not end with a forward slash

'ScreenShotWorker.js' has two 
* var imgScreenShotDir = '/path/to/save/screenshots'; // full path, must NOT end with forward slash
* var imgLimit = 5;



