import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private ApiUrl: string = 'https://strapi.getthewolfs.com';
  public imageDataList: ImageData[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    lastValueFrom(this.http.get<ApiData>(this.ApiUrl + '/m-152')).then(
      (data: ApiData) => {
        data.images.forEach((image) => {
          this.imageDataList.push({
            source: this.ApiUrl + image.url,
            soureSet:
              this.ApiUrl +
              image.formats.large.url +
              ' 2000w, ' +
              this.ApiUrl +
              image.formats.medium.url +
              ' 1000w, ' +
              this.ApiUrl +
              image.formats.small.url +
              ' 500w',
            sizes:
              '(min-width: 190rem) 33vw,(min-width: 125rem) 50vw, (min-width: 95rem) 33vw, (min-width: 62rem) 50vw, (min-width: 40rem) 33vw, (min-width: 28rem) 50vw, 100vw',
            altInfo: image.alternativeText
          });
        });
      }
    );
  }
  // {source:"/assets/image.jpeg", soureSet:"/assets/image-large.jpeg 2000w, /assets/image-medium.jpeg 1000w, /assets/image-small.jpeg 500w", sizes:"(min-width: 190rem) 33vw,(min-width: 125rem) 50vw, (min-width: 95rem) 33vw, (min-width: 62rem) 50vw, (min-width: 40rem) 33vw, (min-width: 28rem) 50vw, 100vw", altInfo:"Just a Image"},
}

export interface ImageData {
  source: string;
  soureSet?: string;
  sizes?: string;
  altInfo: string;
}

export interface ApiData {
  // id: number;
  // published_at: Date;
  // created_at: Date;
  // updated_at: Date;
  // images: ApiImages[];
  // videos: any[];

  images: ApiImages[];
}

export interface ApiImages {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ApiFormats;
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  created_at: Date;
  updated_at: Date;
}

export interface ApiFormats {
  large: ApiFormatData;
  small: ApiFormatData;
  medium: ApiFormatData;
  thumbnail: ApiFormatData;
}

export interface ApiFormatData {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: string;
  width: number;
  height: number;
}
