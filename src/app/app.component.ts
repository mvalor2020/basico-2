import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  flipCard = false;
today = new Date();
totalBill = 203094.12;
text = 'SHe CoDes AnGulAr';
onClickCard() {
this.flipCard = !this.flipCard;
}
}
