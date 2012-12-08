/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"Z31h5RVGrU8hAoqHwkD3gmdvDpL70RMD"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"M4o3KC2ySAV8MSBvAMIyChY73d4y0c3s"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"qLSVSN24B5YmrfL368lgTPTG7gPZCTT8"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"HyegazSUOPA8Tcnc2tI9vpL1QVIqL7v5"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"mLxB6D0NazY9xzjyFul3xWhKPhZfjfw4"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"Py9PrXeH1njetmvsJk4ZD93fSGe2GAP6"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
