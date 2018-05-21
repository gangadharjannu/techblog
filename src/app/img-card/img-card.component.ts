import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private feeds = null;
  constructor(private dataService: DataService) {  }
  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    this.dataService.getData().subscribe(
      data => this.feeds = data,
      err => console.error(err),
      () => console.log('done loading feeds')
    );
  }
  goto(url){
    window.open(url,'_blank');
  }
}
