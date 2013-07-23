var TiExtendText = require('net.uchidak.tiextendtext');
Ti.API.info("module is => " + TiExtendText);

var win = Ti.UI.createWindow({
    backgroundColor : '#f8f8f8',
    width : Ti.UI.FILL,
    height : Ti.UI.FILL,
    layout : 'vertical'
});

var textArea = Ti.UI.createTextArea({
    width : 240,
    top : 4,
    left : 10,
    bottom : 4,
    height : Ti.UI.SIZE,
    suppressReturn : false
});

var done = Ti.UI.createButton({
    width : 44,
    height : 22,
    right : 10,
    bottom : 4,
    font : {fontSize:10},
    color : '#f8f8f8',
    title : 'done',
    backgroundImage : 'NONE',
    borderColor : '#f8f8f8',
    borderWidth : 1,
    borderRadius : 2
});
done.addEventListener('click', function(e) {
    textArea.blur();
    textField.blur();
});

var view = Ti.UI.createView({
    backgroundColor : '#f1c40f',
    height : 100
});

var subView = Ti.UI.createView({
    backgroundColor : '#34495e',
    bottom : 0,
    height : Ti.UI.SIZE,
    width : 320
});

var inputView = Ti.UI.createView({
    backgroundColor : '#34495e',
    width : 320,
    height : 100,
    layout : 'horizontal'
});

var inputA = Ti.UI.createButton({
    width : 100,
    height : 95,
    top : 0,
    left : 5,
    font : {fontSize:24},
    color : '#f8f8f8',
    title : 'I',
    backgroundColor : '#f1c40f',
    backgroundImage : 'NONE',
    borderColor : '#34495e',
    borderWidth : 1,
    borderRadius : 2    
});
inputA.addEventListener('click', function(e){
    textField.value = textField.value + 'I';
});
inputView.add(inputA);

var inputB = Ti.UI.createButton({
    width : 100,
    height : 95,
    top : 0,
    left : 5,
    font : {fontSize:24},
    color : '#f8f8f8',
    title : 'love',
    backgroundColor : '#f1c40f',
    backgroundImage : 'NONE',
    borderColor : '#34495e',
    borderWidth : 1,
    borderRadius : 2    
});
inputB.addEventListener('click', function(e){
    textField.value = textField.value + ' love';
});
inputView.add(inputB);

var inputC = Ti.UI.createButton({
    width : 100,
    height : 95,
    top : 0,
    left : 5,
    font : {fontSize:24},
    color : '#f8f8f8',
    title : 'Ti',
    backgroundColor : '#f1c40f',
    backgroundImage : 'NONE',
    borderColor : '#34495e',
    borderWidth : 1,
    borderRadius : 2    
});
inputC.addEventListener('click', function(e){
    textField.value = textField.value + '  #TitaniumJP';
});
inputView.add(inputC);

var textField = TiExtendText.createTextField({
    width : 300,
    height : 44,
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    inputAccessoryView : view,
    inputView : inputView
});
textField.addEventListener('focus', function(e) {
});

var textArea2 = TiExtendText.createTextArea({
    width : 300,
    height : 44,
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    inputAccessoryView : view,
    inputView : inputView
});
textArea2.addEventListener('focus', function(e) {
});

view.add(subView);
subView.add(textArea);
subView.add(done);
win.add(textField);
win.add(textArea2);

win.open();
