import { Component, ElementRef, OnInit } from "@angular/core";
import { Kinvey, User } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import * as Facebook from "nativescript-facebook";
import { NavigationService } from "../../services/navigation.service";
import { config } from "../../app.config";
import * as http from "tns-core-modules/http";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})

export class HomeComponent implements OnInit {
    public loggedUser: string;
    accessToken: string = appSettings.getString("access_token");
    userId: string;
    username: string;
    avatarUrl: string;

    constructor(private ref: ChangeDetectorRef, private navigationService: NavigationService) {
        // Get logged in user's info
        http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken).then((res) => {
            this.username = res["name"];
            this.userId = res["id"];

            // Get logged in user's avatar
            // ref: https://github.com/NativeScript/NativeScript/issues/2176
            http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/" + this.userId + "/picture?type=large&redirect=false&access_token=" + this.accessToken).then((res) => {
                this.avatarUrl = res["data"]["url"];
                this.ref.detectChanges();
            }, function (err) {
                alert("Error getting user info: " + err);
            });
        }, function (err) {
            alert("Error getting user info: " + err);
        });
    }
	ngOnInit(): void
	{
		
	}
    onLogout(eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            appSettings.clear();
            this.navigationService.go(['login'], "slideRight");
        }

    }
	
    logout() {
        Facebook.logout(() => {
            appSettings.clear();
            this.navigationService.go(['login'], "slideRight");
        });
    }
	public fav(){
		this.navigationService.go(['fav'], "slideRight");
	}
    public getCurrentAccessToken() {
        let accessToken = Facebook.getCurrentAccessToken();

        alert("Current access token: " + JSON.stringify(accessToken, null, '\t'));
    }
/*
    constructor(private _routerExtensions: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = false;
    }

    ngOnInit(): void {
        Kinvey.User.me()
            .then((user: User) => {
                this.loggedUser = user.data['_socialIdentity'].kinveyAuth.id
            });
    }

    logout() {
        Kinvey.User.logout()
            .then(() => {
                this._routerExtensions.navigate(["login"],
                    {
                        clearHistory: true,
                        animated: true,
                        transition: {
                            name: "slideBottom",
                            duration: 350,
                            curve: "ease"
                        }
                    });
            });
    }

    onMenuButtonTap(args: EventData) {
        // Navigate to corresponding page
        const menuButtonParent = (<StackLayout>args.object).parent;
        alert("Navigate to " + menuButtonParent.get("data-name"));
    }

    onProfileButtonTap() {
        // Navigate to profile page here
        alert("Navigate to profile page");
    }
  */
}
