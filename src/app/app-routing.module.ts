import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SamplesComponent } from './pages/samples/samples.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'samples', component: SamplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink],
  exports: [RouterModule]
})
export class AppRoutingModule { }
