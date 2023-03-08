import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karel';
  leeftijd = 35;
  eindStation = "Deventer";
  lunchtijd = "start om 12:15";

  proberen(){
    this.leeftijd = 55;
    this.title = "Johanna";
  }
  letsgohuppakee(){
    console.log("in de console");
    this.eindStation = "Amsterdam";
  }
  veranderStation($event:any) {
    console.log($event);
    this.eindStation = $event.target.value;
  }
}
