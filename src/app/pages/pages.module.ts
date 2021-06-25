import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ComponentsModule } from '../components/components.module';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent, NotfoundComponent, PostsComponent, AlbumsComponent, TodosComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
