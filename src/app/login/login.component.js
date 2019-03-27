"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var core_2 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_routerExtensions, zone, page) {
        this._routerExtensions = _routerExtensions;
        this.zone = zone;
        this.page = page;
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser() == null) {
            kinvey_nativescript_sdk_1.Kinvey.User.loginWithMIC()
                .then(function (user) {
                _this.navigateHome();
                console.log("user: " + JSON.stringify(user));
            })
                .catch(function (error) {
                alert("An error occurred. Check your Kinvey settings.");
                console.log("error: " + error);
            });
        }
        else {
            this.navigateHome();
        }
        //      this.navigateHome();
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        if (kinvey_nativescript_sdk_1.Kinvey.User.signup() == null) {
            kinvey_nativescript_sdk_1.Kinvey.User.loginWithMIC()
                .then(function (user) {
                _this.navigateHome();
                console.log("user: " + JSON.stringify(user));
            })
                .catch(function (error) {
                alert("An error occurred. Check your Kinvey settings.");
                console.log("error: " + error);
            });
        }
        else {
            this.navigateHome();
        }
    };
    LoginComponent.prototype.navigateHome = function () {
        var _this = this;
        this.zone.run(function () {
            _this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, core_2.NgZone, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUFpRDtBQUNqRCxzREFBK0Q7QUFDL0Qsc0NBQXVDO0FBQ3ZDLGlEQUErQztBQU8vQztJQUVJLHdCQUFvQixpQkFBbUMsRUFBVSxJQUFZLEVBQVUsSUFBVTtRQUE3RSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQWlCQztRQWhCRSxJQUFJLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksRUFBRTtZQUNwQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7aUJBQ3JCLElBQUksQ0FBQyxVQUFDLElBQWlCO2dCQUNwQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBdUI7Z0JBQzNCLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7UUFFVCw0QkFBNEI7SUFFeEIsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFBQSxpQkFjQztRQWJHLElBQUksZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQzlCLGdDQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtpQkFDckIsSUFBSSxDQUFDLFVBQUMsSUFBaUI7Z0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUF1QjtnQkFDM0IsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7Z0JBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTyxxQ0FBWSxHQUFwQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDVixLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxNQUFNO2lCQUNoQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXZEUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUd5Qyx5QkFBZ0IsRUFBZ0IsYUFBTSxFQUFnQixXQUFJO09BRnhGLGNBQWMsQ0F3RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tICdraW52ZXktbmF0aXZlc2NyaXB0LXNkayc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5jbGFzc05hbWUgPSBcInBhZ2UtbG9naW4tY29udGFpbmVyXCI7XG4gICAgICAgIHRoaXMucGFnZS5zdGF0dXNCYXJTdHlsZSA9IFwiZGFya1wiO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgIGlmIChLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgS2ludmV5LlVzZXIubG9naW5XaXRoTUlDKClcbiAgICAgICAgICAgICAgICAudGhlbigodXNlcjogS2ludmV5LlVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyOiBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgeW91ciBLaW52ZXkgc2V0dGluZ3MuXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVIb21lKCk7XG4gICAgICAgIH1cblxuLy8gICAgICB0aGlzLm5hdmlnYXRlSG9tZSgpO1xuXG4gICAgfVxuICAgIHNpZ251cCgpIHtcbiAgICAgICAgaWYgKEtpbnZleS5Vc2VyLnNpZ251cCgpID09IG51bGwpIHtcbiAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ2luV2l0aE1JQygpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHVzZXI6IEtpbnZleS5Vc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlcjogXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBLaW52ZXkuQmFzZUVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHlvdXIgS2ludmV5IHNldHRpbmdzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlSG9tZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUhvbWUoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19