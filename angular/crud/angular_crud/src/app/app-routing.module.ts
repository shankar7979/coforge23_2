import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowallComponent } from './showall/showall.component';

const routes: Routes = [
  { path: '', component: ShowallComponent },
  { path: 'showall', component: ShowallComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
