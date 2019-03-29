import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";
import { NavigationService } from "./services/navigation.service";

import { NativeScriptFacebookModule } from "nativescript-facebook/angular";
import { init, LoginBehavior } from "nativescript-facebook";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFacebookModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        LoggedInLazyLoadGuard,
        NavigationService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
