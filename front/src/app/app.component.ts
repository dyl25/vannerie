import { Component, OnInit } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  constructor(private titleService: Title, private meta: Meta) {}
  
  setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
  }
  
  ngOnInit(): void {
      this.meta.addTag({ name: 'description', content: 'Une super application' });
  }
}
