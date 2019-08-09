import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconGenComponent } from './icon-gen/icon-gen.component';

const routes: Routes = [
  {path: '', component: IconGenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
