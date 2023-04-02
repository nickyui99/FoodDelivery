import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf, NgStyle} from "@angular/common";
import {Navigation, SwiperOptions} from "swiper";
import {SwiperModule} from "swiper/angular";


@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, SwiperModule, NgForOf],
})


export class HomePage implements OnInit, AfterViewInit{

  data: any[]= []
  categories : any[] = [];
  highlights: any[] = [];
  featured: any[] = [];

  config: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 3.5,
    spaceBetween: 10,
    freeMode: true

  };

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
      .subscribe((res: any) => {
        this.categories = res.categories;
        this.highlights = res.highlights;
        this.featured = res.featured;

        console.log(res);
      }
    );
  }

  ngAfterViewInit(){
  }
}
