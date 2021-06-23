import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [HomeComponent, NotfoundComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
