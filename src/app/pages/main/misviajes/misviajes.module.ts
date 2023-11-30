import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisviajesPageRoutingModule } from './misviajes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MisviajesPage } from './misviajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisviajesPageRoutingModule,
    SharedModule
  ],
  declarations: [MisviajesPage]
})
export class MisviajesPageModule {}
