"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_routerExtensions, page) {
        this._routerExtensions = _routerExtensions;
        this.page = page;
        this.page.actionBarHidden = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        kinvey_nativescript_sdk_1.Kinvey.User.me()
            .then(function (user) {
            _this.loggedUser = user.data['_socialIdentity'].kinveyAuth.id;
        });
    };

  HomeComponent.prototype.fav = function () {
	this._routerExtensions.navigate(["fav"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideBottom",
                    duration: 350,
                    curve: "ease"
                }
	});
  };
  
    HomeComponent.prototype.logout = function () {
        var _this = this;
        kinvey_nativescript_sdk_1.Kinvey.User.logout()
            .then(function () {
            _this._routerExtensions.navigate(["login"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideBottom",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    };
    HomeComponent.prototype.onMenuButtonTap = function (args) {
        // Navigate to corresponding page
        var menuButtonParent = args.object.parent;
        alert("Navigate to " + menuButtonParent.get("data-name"));
    };
    HomeComponent.prototype.onProfileButtonTap = function () {
        // Navigate to profile page here
        alert("Navigate to profile page");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RDtBQUM5RCxtRUFBdUQ7QUFDdkQsc0RBQStEO0FBQy9ELGlEQUErQztBQVMvQztJQUdJLHVCQUFvQixpQkFBbUMsRUFBVSxJQUFVO1FBQXZELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsSUFBVTtZQUNiLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUE7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ2YsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUNyQztnQkFDSSxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxhQUFhO29CQUNuQixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsTUFBTTtpQkFDaEI7YUFDSixDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsaUNBQWlDO1FBQ2pDLElBQU0sZ0JBQWdCLEdBQWlCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQzNELEtBQUssQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNJLGdDQUFnQztRQUNoQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBdkNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSXlDLHlCQUFnQixFQUFnQixXQUFJO09BSGxFLGFBQWEsQ0F3Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtpbnZleSwgVXNlciB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGxvZ2dlZFVzZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIEtpbnZleS5Vc2VyLm1lKClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyOiBVc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRVc2VyID0gdXNlci5kYXRhWydfc29jaWFsSWRlbnRpdHknXS5raW52ZXlBdXRoLmlkXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIEtpbnZleS5Vc2VyLmxvZ291dCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJsb2dpblwiXSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25NZW51QnV0dG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICAvLyBOYXZpZ2F0ZSB0byBjb3JyZXNwb25kaW5nIHBhZ2VcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvblBhcmVudCA9ICg8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3QpLnBhcmVudDtcbiAgICAgICAgYWxlcnQoXCJOYXZpZ2F0ZSB0byBcIiArIG1lbnVCdXR0b25QYXJlbnQuZ2V0KFwiZGF0YS1uYW1lXCIpKTtcbiAgICB9XG5cbiAgICBvblByb2ZpbGVCdXR0b25UYXAoKSB7XG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIHByb2ZpbGUgcGFnZSBoZXJlXG4gICAgICAgIGFsZXJ0KFwiTmF2aWdhdGUgdG8gcHJvZmlsZSBwYWdlXCIpO1xuICAgIH1cbn1cbiJdfQ==
