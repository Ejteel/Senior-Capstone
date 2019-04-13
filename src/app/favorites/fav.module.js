"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
//import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
//import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
//import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
//import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
//import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
//import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
//import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
var forms_1 = require("nativescript-angular/forms");
var fav_routing_module_1 = require("./fav-routing.module");
var fav_component_1 = require("./fav.component");
exports.routerConfig = [
    {
        path: "",
        component: fav_component_1.FavComponent
    }
];
var FavModule = /** @class */ (function () {
    function FavModule() {
    }
    FavModule = __decorate([
        core_1.NgModule({
            imports: [
                //NativeScriptUISideDrawerModule,
                // NativeScriptUIListViewModule,
                //  NativeScriptUICalendarModule,
                // NativeScriptUIChartModule,
                // NativeScriptUIDataFormModule,
                // NativeScriptUIAutoCompleteTextViewModule,
                //NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                fav_routing_module_1.FavRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                fav_component_1.FavComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FavModule);
    return FavModule;
}());
exports.FavModule = FavModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHNGQUFzRjtBQUN0RixrRkFBa0Y7QUFDbEYsa0ZBQWtGO0FBQ2xGLDRFQUE0RTtBQUM1RSxrRkFBa0Y7QUFDbEYsa0dBQWtHO0FBQ2xHLDRFQUE0RTtBQUM1RSxvREFBcUU7QUFFckUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUNsQyxRQUFBLFlBQVksR0FBRztJQUN4QjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDRCQUFZO0tBQzFCO0NBQ0osQ0FBQztBQXFCRjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBcEJyQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQWlDO2dCQUNsQyxnQ0FBZ0M7Z0JBQ2pDLGlDQUFpQztnQkFDaEMsNkJBQTZCO2dCQUM3QixnQ0FBZ0M7Z0JBQ2hDLDRDQUE0QztnQkFDM0MsNEJBQTRCO2dCQUM1QixpQ0FBd0I7Z0JBQ3hCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbi8vaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbi8vaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuLy9pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG4vL2ltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbi8vaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuLy9pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuLy9pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBGYXZSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZmF2LXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBGYXZDb21wb25lbnQgfSBmcm9tIFwiLi9mYXYuY29tcG9uZW50XCI7XG5leHBvcnQgY29uc3Qgcm91dGVyQ29uZmlnID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgY29tcG9uZW50OiBGYXZDb21wb25lbnRcbiAgICB9XG5dO1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgIC8vIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAvLyAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAvLyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgIC8vIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgLy8gTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgLy9OYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEZhdlJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmF2Q29tcG9uZW50LFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGYXZNb2R1bGUgeyB9XG4iXX0=