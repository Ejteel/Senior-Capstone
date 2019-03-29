"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var social_routing_module_1 = require("./social-routing.module");
var social_component_1 = require("./social.component");
var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                social_routing_module_1.SocialRoutingModule
            ],
            declarations: [
                social_component_1.SocialComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SocialModule);
    return SocialModule;
}());
exports.SocialModule = SocialModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvY2lhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLGlFQUE4RDtBQUM5RCx1REFBcUQ7QUFjckQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFaeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsMkNBQW1CO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTb2NpYWxSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc29jaWFsLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTb2NpYWxDb21wb25lbnQgfSBmcm9tIFwiLi9zb2NpYWwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFNvY2lhbFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTb2NpYWxDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU29jaWFsTW9kdWxlIHsgfVxuIl19