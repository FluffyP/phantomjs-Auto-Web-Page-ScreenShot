// Config, edit to your needs...
var imgScreenShotDir = '/home/me/screens'; // full path, must NOT end with forward slash
var imgLimit = 5;


// Config end: No need to edit below this...
var imgSaveName = extractDomain(urlIS);
var fs = require('fs');
var dateIS = Date.now();
var imgSaveFile = imgScreenShotDir + fs.separator + imgSaveName + '_' + dateIS + '.jpeg';
var imgList = fs.list(imgScreenShotDir);
var imgFilesCurrent = new Array();

for(var i = 0; i< imgList.length; i++) {
    var fullpath = imgScreenShotDir + fs.separator + imgList[i];
    
    // check if item is a file //
    if(fs.isFile(fullpath)) {
		
		// check if item has url name in it, save to array for counting and deleting //
		if(fullpath.toLowerCase().indexOf(imgSaveName + '_') != -1) {
			//console.log("-> " + fullpath);
            imgFilesCurrent.push(fullpath);
        }
        
    }
}



// if img count more then limit, delete oldest file
if(imgFilesCurrent.length >= imgLimit) {
	
	imgFilesCurrent = imgFilesCurrent.sort();
	console.log("Delete Image: " + imgFilesCurrent[0]);
	
	fs.remove(imgFilesCurrent[0]);
}
        

var page = require('webpage').create();
page.viewportSize = { width: 1366, height: 768 };

page.open(urlIS, function() {
  
  page.render(imgSaveFile, {format: 'jpeg', quality: '75'});
  phantom.exit();
  
});

function extractDomain(iCalContent) {
// https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
  var rx = /^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i;
  var arr = rx.exec(iCalContent);
  return arr[1]; 
}