import { Component, OnInit } from '@angular/core';

// import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    // posts$: object;

    // constructor(private data: DataService) { }

    ngOnInit() {

    //   this.data.getPosts().subscribe(
    //     data => this.posts$ = data
    //   )
    }

}