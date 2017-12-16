# phantomjs-Auto-Web-Page-ScreenShot
Take a screen shot of a web page with out your browser even being open.

## First: You need to have [phantomjs](http://phantomjs.org/) installed.
PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.

### What you will find here:
* A Bash script (phantomjs_user_screenshot.sh)
* Two JavaScript's (ScreenShotWorker.js and profile.example.js)

## Why and what...
There are acouple sites i belong to which keep stats of my membership. From time to time i like to have a screenshot of my user account on these sites. Rather then visting these sites with my browser once a week, taking a screen shot then saving to a folder, i created the scripts you will find here.

Once a week i run the bash script 'phantomjs_user_screenshot.sh' as a cron job. The 'phantomjs_user_screenshot.sh' in-turn will trigger [phantomjs](http://phantomjs.org/) to run the JavaScript files, automaticly log into my user accounts, take a screenshot and save it to a folder of my choice.

## How it works...
There is a 'profile_scripts' dir. This folder holds all your profile scripts: google.example.js, yahoo.example.js, etc.

The 'phantomjs_user_screenshot.sh' script will loop over that dir of user scripts and send them to the 'phantomjs' program so it can work its magic and then save the screenshot to a dir of your choice and also delete any screenshot images that exceed your image limit (deleteing oldest image).

### What you need to Edit (two files):
Note: No paths should end with a forward slash

'phantomjs_user_screenshot.sh' has a few varibules at the top:
```phantomjsFile="/path/to/phantomjs/bin/phantomjs"
cookieFile="/path/to/cookies.txt"
jsUserScriptsPath="/path/to/profile_scripts"```

'ScreenShotWorker.js' has two...
```var imgScreenShotDir = '/path/to/save/screenshots'; // full path, must NOT end with forward slash
``var imgLimit = 5; // number of screenshot images to keep```

### Your profile(s) scripts.
Each site you want to create a screenshot from needs to have its own profile script. The profile script holds cookie information, so you need to know how to look up/find/view information in your browsers cookie. [google, view browsers cookies](https://www.google.com/search?q=view+your+cookies+in+different+browsers).

Most sites (which i belong to) use two or three cookies: session, uid and pass for loging in, but this is something which you will have to figure out yourself.

You can use 'profile.example.js' for a template.


### Where the scripts go:
Your profile scripts, the 'phantomjs_user_screenshot.sh' script and 'ScreenShotWorker.js' script all should be in the same dir, your screenshots should be saved to another dir.

Note at the bottom of the profile-file-scripts, there are two lines of code which call/import/injected the 'ScreenShotWorker.js' script, so you can not rename the 'ScreenShotWorker.js' file unless you make the appropriate changes to the profile-script.




