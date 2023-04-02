import {Component} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {SwiperModule} from "swiper/angular";

@Component({
  schemas: [],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, SwiperModule],
})
export class AppComponent {
  constructor() {}
}
