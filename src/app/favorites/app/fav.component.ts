import { Component, OnInit } from "@angular/core";

@Component({
    selector: "favorites",
    moduleId: module.id,
    templateUrl: "./favorites/app/home/home.component.html",
    //styleUrls: ["./home.component.css"]
})
export class FavComponent {

   public constructor() {
    }
	public back()
	{
		this.navigationService.go(['Home'], "slideRight"); //goes home
	}
}
