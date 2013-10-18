TiExtendText(){
==================================================
This is a Titanium module for iOS.  
This module extend `Ti.UI.TextField` and `Ti.UI.TextArea`.  

The following properties are added.  

- inputAccessoryView
- inputView

![screenshot](./screen.png)

<a name="TOC">Table of Contents</a>
--------------------------------------------------
1. [Requirements](#Requirements)
1. [Installtion](#Installtion)
1. [Usage](#Usage)
1. [License](#License)

<a name="Requirements">Requirements</a>
--------------------------------------------------
Titanium SDK 3.1 or later

<a name="Installtion">Installtion</a>
--------------------------------------------------
### Install this module
```javascript
var TiExtendText = require('net.uchidak.tiextendtext');
```

<a name="Usage">Usage</a>
--------------------------------------------------
### Create Text Field
```javascript
var textField = TiExtendText.createTextField({
    width : 300,
    height : 44,
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    inputAccessoryView : 'your custom view',
    inputView : 'your custom view'
});
```

### Create Text Area
```javascript
var textArea = TiExtendText.createTextArea({
    width : 300,
    height : 44,
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    inputAccessoryView : 'your custom view',
    inputView : 'your custom view'
});
```

<a name="License">License and Credits</a>
--------------------------------------------------
**TiExtendText**  
The MIT License (MIT)

Copyright (c) 2013 Keisuke Uchida

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

**[[⬆]](#TOC)**

};
==================================================
© 2013 [Keisuke Uchida](http://uchidak.net) All rights reserved.
