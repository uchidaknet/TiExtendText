//
//  NetUchidakTiextendtextTextArea.m
//  TiExtendText
//
//  Created by Keisuke Uchida on 2013/07/19.
//
//
#import <UIKit/UIKit.h>
#import "TiUtils.h"
#import "TiApp.h"
#import "NetUchidakTiextendtextTextArea.h"
#import "NetUchidakTiextendtextTextAreaProxy.h"

@implementation NetUchidakTiextendtextTextArea

-(void)setInputAccessoryView_:(id)args
{
    ENSURE_SINGLE_ARG_OR_NIL(args,TiViewProxy);
	if (args!=nil)
	{
		[args windowWillOpen];
		UIView *view = [args view];
        UITextView *textField = (UITextView*)[super textWidgetView];
        textField.inputAccessoryView = view;
	}
}

-(void)setInputView_:(id)args
{
    ENSURE_SINGLE_ARG_OR_NIL(args,TiViewProxy);
	if (args!=nil)
	{
		[args windowWillOpen];
		UIView *view = [args view];
        UITextView *textField = (UITextView*)[super textWidgetView];
        textField.inputView = view;
	}
}

@end
