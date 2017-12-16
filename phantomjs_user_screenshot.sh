#!/bin/bash

phantomjsFile="/path/to/phantomjs/bin/phantomjs"
cookieFile="/path/to/cookies.txt"
jsUserScriptsPath="/path/to/profile_scripts"


loadUserScripts() {
	
	
    if [ -d "$jsUserScriptsPath" ]; then
        
        echo "Loading jsUserScripts"
        
        cd "$jsUserScriptsPath"
		
		for jsUserScripts_file in *.js
		do
			
		if [ "$jsUserScripts_file" != 'ScreenShotWorker.js' ]; then 
			echo "$jsUserScripts_file"
			
			commandStr="$phantomjsFile --cookies-file=$cookieFile $jsUserScriptsPath/$jsUserScripts_file"
			eval "$commandStr"
		fi;

		  
		done
    else
		echo "No user scripts dir found:"
		echo "$jsUserScriptsPath"
		echo "Sorry - Exiting script..."
		exit;
    fi	
	
	
}


loadUserScripts;
