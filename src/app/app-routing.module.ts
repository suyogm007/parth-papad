import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KatranComponent } from './katran/katran.component';
import { LasunComponent } from './lasun/lasun.component';
import { MethiComponent } from './methi/methi.component';
import { MoongComponent } from './moong/moong.component';
import { PunjabimComponent } from './punjabim/punjabim.component';
import { RajwadiComponent } from './rajwadi/rajwadi.component';
import { SinglemariComponent } from './singlemari/singlemari.component';
import { JeeramComponent } from './jeeram/jeeram.component';
import { ChanaComponent } from './chana/chana.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AngularanimationComponent } from './angularanimation/angularanimation.component';



const routes: Routes = [
  {path:'katran',component: KatranComponent},
  {path:'lasun',component: LasunComponent},
  {path:'methi',component: MethiComponent},
  {path:'moong',component: MoongComponent},
  {path:'punjabim',component: PunjabimComponent},
  {path:'rajwadi',component: RajwadiComponent},
  {path:'singlemari',component: SinglemariComponent},
  {path:'jeeram',component: JeeramComponent},
  {path:'chana',component: ChanaComponent},
  {path:'contactus',component: ContactusComponent},
  {path:'home',component: HomeComponent},
  {path: 'animation', component: AngularanimationComponent}
  

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
