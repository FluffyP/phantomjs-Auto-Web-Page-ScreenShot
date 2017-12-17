var urlIS = 'https://website.com/user.php?id=12345';

phantom.addCookie({
    'name':     'session',   
    'value':    '1234abcd',  
    'domain':   'website.com',           
    'path':     '/',
    'httponly': true,
    'secure':   false,
    'expires':  (new Date()).getTime() + (1000 * 60 * 60) 
});

phantom.addCookie({
    'name':     'uid',   
    'value':    '123',  
    'domain':   'website.com',           
    'path':     '/',
    'httponly': true,
    'secure':   false,
    'expires':  (new Date()).getTime() + (1000 * 60 * 60) 
});

phantom.addCookie({
    'name':     'pass',   
    'value':    'abc',  
    'domain':   'website.com',           
    'path':     '/',
    'httponly': true,
    'secure':   false,
    'expires':  (new Date()).getTime() + (1000 * 60 * 60)
});

var filename = './ScreenShotWorker.js';
injected = phantom.injectJs(filename);