import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CalculadoraComponent } from './pages/calculadora/calculadora';
import { AboutComponent } from './pages/about/about';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
