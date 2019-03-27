"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var LoggedInLazyLoadGuard = /** @class */ (function () {
    function LoggedInLazyLoadGuard(_routerExtensions) {
        this._routerExtensions = _routerExtensions;
    }
    LoggedInLazyLoadGuard.prototype.canLoad = function () {
        if (!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            this._routerExtensions.navigate(["login"], { clearHistory: true });
        }
        return true;
    };
    LoggedInLazyLoadGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoggedInLazyLoadGuard);
    return LoggedInLazyLoadGuard;
}());
exports.LoggedInLazyLoadGuard = LoggedInLazyLoadGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsbUVBQWlEO0FBQ2pELHNEQUErRDtBQUcvRDtJQUNJLCtCQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFJLENBQUM7SUFFNUQsdUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN0RTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFUUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FFOEIseUJBQWdCO09BRDlDLHFCQUFxQixDQVVqQztJQUFELDRCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYW5Mb2FkIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkIGltcGxlbWVudHMgQ2FuTG9hZCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIUtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJsb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59Il19