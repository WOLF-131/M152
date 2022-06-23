import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiData, DisplayImageData } from '../ApiData.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private ApiUrl: string = 'https://strapi.getthewolfs.com';
  public displayImageDataList: DisplayImageData[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    lastValueFrom(this.http.get<ApiData>(this.ApiUrl + '/m-152')).then(
      (data: ApiData) => {
        data.images.forEach((image) => {

          if(image.formats != null) {
            this.displayImageDataList.push(
              new DisplayImageData(
                this.ApiUrl + image.url,
                image.alternativeText,
                this.ApiUrl +
                  image.formats.large.url +
                  ' 2000w, ' +
                  this.ApiUrl +
                  image.formats.medium.url +
                  ' 1000w, ' +
                  this.ApiUrl +
                  image.formats.small.url +
                  ' 500w',
                '(min-width: 190rem) 33vw,(min-width: 125rem) 50vw, (min-width: 95rem) 33vw, (min-width: 62rem) 50vw, (min-width: 40rem) 33vw, (min-width: 28rem) 50vw, 100vw'
              )
            );
          }
          else {
            this.displayImageDataList.push(
              new DisplayImageData(
                this.ApiUrl + image.url,
                image.alternativeText,
                this.ApiUrl +
                  image.url +
                  ' 2000w, ' +
                  this.ApiUrl +
                  image.url +
                  ' 1000w, ' +
                  this.ApiUrl +
                  image.url +
                  ' 500w',
                '(min-width: 190rem) 33vw,(min-width: 125rem) 50vw, (min-width: 95rem) 33vw, (min-width: 62rem) 50vw, (min-width: 40rem) 33vw, (min-width: 28rem) 50vw, 100vw'
              )
            );
          }
        });
      }
    );
  }
}
