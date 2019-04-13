import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CommonModule } from "@angular/common";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FavRoutingModule } from "./fav-routing.module";
import { FavComponent } from "./fav.component";
export const routerConfig = [
    {
        path: "",
        component: FavComponent
    }
];
@NgModule({
    imports: [
        NativeScriptCommonModule,
        FavRoutingModule,
        NativeScriptFormsModule,
		NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig),
        CommonModule
    ],
    declarations: [
        FavComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FavModule { }
