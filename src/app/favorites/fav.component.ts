import { Component, ElementRef, OnInit } from "@angular/core";
import { Kinvey, User } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Router } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import * as Facebook from "nativescript-facebook";
import { NavigationService } from "../../services/navigation.service";
import { config } from "../../app.config";
import * as http from "tns-core-modules/http";
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: "fav",
    moduleId: module.id,
    templateUrl: "./fav.component.html",
    styleUrls: ["./fav.component.css"],
})
export class FavComponent implements OnInit{

   public constructor(private navigationService: NavigationService) {
    }
	
	ngOnInit(): void {
	}
	
	public back()
	{
		this.navigationService.go(['Home'], "slideRight"); //goes home
	}
	
	/*
	public food()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Food');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	public ent()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Entertainment');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	public campus()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Campus');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	public lodging()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Lodging');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	*/
}
