import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  kg: number = 20;
  panmolde: number = 50;
  hayuya: number = 50;
  baguette: number = 50;
  pan: boolean = false;

  username: string = '';
}