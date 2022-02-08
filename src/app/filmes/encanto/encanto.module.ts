import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncantoPageRoutingModule } from './encanto-routing.module';

import { EncantoPage } from './encanto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncantoPageRoutingModule
  ],
  declarations: [EncantoPage]
})
export class EncantoPageModule {}
