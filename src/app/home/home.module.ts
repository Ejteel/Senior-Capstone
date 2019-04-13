import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CommonModule } from "@angular/common";
import { FavComponent } from "./favorites/fav.component";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

export const routerConfig = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig),
        CommonModule
    ],
    declarations: [
        HomeComponent,
		//FavComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
