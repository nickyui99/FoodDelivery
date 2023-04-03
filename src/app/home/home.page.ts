import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {Navigation, Pagination, SwiperOptions} from "swiper";
import {SwiperComponent, SwiperModule} from "swiper/angular";
import {RouterLink} from "@angular/router";


@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, SwiperModule, NgForOf, RouterLink],
})


export class HomePage implements OnInit{

  @ViewChild('swiper') swiper: SwiperComponent | undefined;

  animationInProgress = false;
  data: any[] = []
  categories: any[] = [];
  highlights: any[] = [];
  featured: any[] = [];

  categorySlideConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 3.5,
    spaceBetween: 10,
    freeMode: true,
    pagination: true,

  };

  highlightSlideConfig: SwiperOptions = {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
  };

  featuredSlideConfig: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true,
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    this.http.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
      .subscribe((res: any) => {
          this.categories = res.categories;
          this.highlights = res.highlights;
          this.featured = res.featured;
        }
      );
  }

  doRefresh(event: any){
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngAfterViewInit(): void {
  }
}
