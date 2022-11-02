import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
const routes: Routes = [
  
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
