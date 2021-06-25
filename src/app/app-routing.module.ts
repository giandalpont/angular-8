import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';


const routes: Routes = [
    { path:'todos', component: TodosComponent },
    { path:'albums', component: AlbumsComponent },
    { path:'posts', component: PostsComponent },
    { path: '', component: HomeComponent },
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
