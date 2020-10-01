import { Component, OnInit } from '@angular/core';
import {Pagination} from '../models/Pagination';
import {BlogPost} from '../models/BlogPost';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pagination: Pagination;
  blogPosts: BlogPost[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
  }

  private loadPage(page) {
    this.http.get<any>(`${environment.BASE_API_URL}/blog/posts?page=${page}`).subscribe(x => {
      this.pagination = x.pagination;
      this.blogPosts = x.blogPosts;
    });
  }

}
