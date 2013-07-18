//
//  NetUchidakTiextendtextfield.m
//  TiExtendTextField
//
//  Created by Keisuke Uchida on 2013/07/18.
//
//
#import <UIKit/UIKit.h>
#import "TiUtils.h"
#import "TiProxy.h"
#import "TiViewProxy.h"
#import "NetUchidakTiextendtextfieldTextField.h"

@implementation NetUchidakTiextendtextfieldTextField

#pragma mark Property

-(void)setInputAccessoryView_:(id)args
{
    ENSURE_SINGLE_ARG_OR_NIL(args,TiViewProxy);
	if (args!=nil)
	{
		[args windowWillOpen];
		UIView *view = [args view];
        TiTextField* textField = super.textWidgetView;
        textField.inputAccessoryView = view;
	}    
}

@end