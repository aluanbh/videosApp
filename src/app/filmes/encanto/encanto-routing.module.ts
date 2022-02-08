import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncantoPage } from './encanto.page';

const routes: Routes = [
  {
    path: '',
    component: EncantoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncantoPageRoutingModule {}
