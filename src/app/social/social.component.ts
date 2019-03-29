import { Component } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page"

@Component({
    selector: "Social",
    moduleId: module.id,
    templateUrl: "./social.component.html"
})
export class SocialComponent {

    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-social-container";
        this.page.statusBarStyle = "dark";
    }

    login() {
      if (!this.user.email || !this.user.password) {
        alert("Please provide both an email address and password.")
        return;
      }

       if (Kinvey.User.getActiveUser() == null) {
            Kinvey.User.loginWithMIC()
                .then((user: Kinvey.User) => {
                    this.navigateHome();
                    console.log("user: " + JSON.stringify(user));
                })
                .catch((error: Kinvey.BaseError) => {
                    alert("An error occurred. Check your Kinvey settings.");
                    console.log("error: " + error);
                });
        } else {
            this.navigateHome();
        }
    }

    private navigateHome() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    }
}
