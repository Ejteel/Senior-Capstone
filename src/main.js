"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app/app.module");
/* ***********************************************************
* The {N} Kinvey plugin needs some initialization steps before it is ready
* for use. Check out the initialization script at /shared/kinvey.common.ts
* along with more information about it.
*************************************************************/
require("./app/shared/kinvey.common");
platform_1.platformNativeScriptDynamic({ startPageActionBarHidden: true }).bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLCtDQUE2QztBQUU3Qzs7Ozs4REFJOEQ7QUFDOUQsc0NBQW9DO0FBRXBDLHNDQUEyQixDQUFDLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoZSB7Tn0gS2ludmV5IHBsdWdpbiBuZWVkcyBzb21lIGluaXRpYWxpemF0aW9uIHN0ZXBzIGJlZm9yZSBpdCBpcyByZWFkeVxuKiBmb3IgdXNlLiBDaGVjayBvdXQgdGhlIGluaXRpYWxpemF0aW9uIHNjcmlwdCBhdCAvc2hhcmVkL2tpbnZleS5jb21tb24udHNcbiogYWxvbmcgd2l0aCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGl0LlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBcIi4vYXBwL3NoYXJlZC9raW52ZXkuY29tbW9uXCI7XG5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyh7IHN0YXJ0UGFnZUFjdGlvbkJhckhpZGRlbjogdHJ1ZSB9KS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdfQ==