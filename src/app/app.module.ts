import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchComponent } from './components/switch/switch.component';
import { HomeComponent } from './pages/home/home.component';
import { SamplesComponent } from './pages/samples/samples.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    SwitchComponent,
    HomeComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
