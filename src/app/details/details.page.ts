import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedDirectivesModule} from "../directives/shared-directives.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedDirectivesModule,
    HttpClientModule
  ]
})
export class DetailsPage implements OnInit {

  data = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get('https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json')
      .subscribe((res: any) => {
        console.log(res);
        this.data = res;
      });
  }

}
