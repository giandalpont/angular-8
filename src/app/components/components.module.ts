import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './album/album.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { AdditemComponent } from './additem/additem.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [PostComponent, AlbumComponent, AddtodoComponent, AdditemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    PostComponent,
    AlbumComponent,
    AddtodoComponent,
    AdditemComponent,
  ]
})
export class ComponentsModule { }
