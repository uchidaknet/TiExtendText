var TiExtendTextField = require('net.uchidak.tiextendtextfield');
Ti.API.info("module is => " + TiExtendTextField);

var win = Ti.UI.createWindow({
    backgroundColor : '#f8f8f8',
    width : Ti.UI.FILL,
    height : Ti.UI.FILL
});

var textArea = Ti.UI.createTextArea({
    width : 200,
    top : 4,
    bottom : 4,
    height : Ti.UI.SIZE,
    suppressReturn : false
});

var view = Ti.UI.createView({
    backgroundColor : 'red',
    height : 100
});

var subView = Ti.UI.createView({
    backgroundColor : '#333',
    bottom : 0,
    height : Ti.UI.SIZE,
    width : 320
});

var textField = TiExtendTextField.createTextField({
    width : 300,
    height : 44,
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    inputAccessoryView : view
});
textField.addEventListener('focus', function(e) {
});

view.add(subView);
subView.add(textArea);
win.add(textField);

win.open();
