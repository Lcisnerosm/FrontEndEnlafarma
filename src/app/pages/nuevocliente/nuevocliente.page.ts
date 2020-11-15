import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.page.html',
  styleUrls: ['./nuevocliente.page.scss'],
})
export class NuevoclientePage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
