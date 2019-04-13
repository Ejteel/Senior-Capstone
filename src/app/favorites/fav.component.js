"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('collection-name');
var FavComponent = /** @class */ (function () {
    function FavComponent(_routerExtensions, page) {
		
		this._routerExtensions = _routerExtensions;
        this.page = page;
        this.page.actionBarHidden = false;
    }
    FavComponent.prototype.ngOnInit = function () {
		
		 var _this = this;
        kinvey_nativescript_sdk_1.Kinvey.User.me()
            .then(function (user) {
            _this.loggedUser = user.data['_socialIdentity'].kinveyAuth.id;
        });
    }; /*
	FavComponent.prototype.food = function(){
		const query = new Kinvey.Query();
		query.equalTo('field', 'value');
		const subscription = dataStore.find(query)
		  .subscribe(function(entities) {
			// ...
		  }, function(error) {
			// ...
		  }, function() {
			// ...
		  });
	}
	*/
	FavComponent.prototype.back = function()
	{

		this._routerExtensions.back();

	};
	FavComponent = __decorate([
        core_1.Component({
            selector: "favorites",
            moduleId: module.id,
            templateUrl: "./fav.component.html",
            styleUrls: ["./fav.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], FavComponent);
    return FavComponent;
}());
exports.FavComponent = FavComponent;
