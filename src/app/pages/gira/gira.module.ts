import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiraPageRoutingModule } from './gira-routing.module';

import { GiraPage } from './gira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiraPageRoutingModule
  ],
  declarations: [GiraPage]
})
export class GiraPageModule {}
