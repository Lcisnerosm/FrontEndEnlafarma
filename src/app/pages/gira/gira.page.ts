import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { GiraService } from "../../services/gira.service";
import { Branches } from "../../models/branch.models";

@Component({
  selector: "app-gira",
  templateUrl: "./gira.page.html",
  styleUrls: ["./gira.page.scss"],
})
export class GiraPage implements OnInit {
  branch: Branches[] = [];

  constructor(
    private menuCtrl: MenuController,
    private giraservice: GiraService
  ) {}

  ngOnInit() {
    this.obtenergira();
  }

  obtenergira() {
    this.giraservice.getGira().subscribe((data) => {
      this.branch = data["data"];
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
