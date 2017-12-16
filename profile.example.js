var urlIS = 'https://website.com/user.php?id=12345';

phantom.addCookie({
    'name':     'session',   /* required property */
    'value':    '1234abcd',  /* required property */
    'domain':   'website.com',           /* required property */
    'path':     '/',
    'httponly': true,
    'secure':   false,
    'expires':  (new Date()).getTime() + (1000 * 60 * 60) 
});

phantom.addCookie({
    'name':     'uid',   /* required property */
    'value':    '123',  /* required property */
    'domain':   'website.com',           /* required property */
    'path':     '/',
    'httponly': true,
    'secure':   false,
    'expires':  (new Date()).getTime() + (1000 * 60 * 60) 
});

phantom.addCookie({
    'name':     'pass',   /* required property */
    'value':    'abc',  /* required property */
    'domain':   'website.com',           /* required property */
    'path':     '/',
    'httponly': true,
    'secure':   false,
    'expires':  (new Date()).getTime() + (1000 * 60 * 60)
});

var filename = './ScreenShotWorker.js';
injected = phantom.injectJs(filename);