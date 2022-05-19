import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageDataList: ImageData[] = [
    // {source:"/assets/image.jpeg", soureSet:"/assets/image-large.jpeg 2000w, /assets/image-medium.jpeg 1000w, /assets/image-small.jpeg 500w", sizes:"(max-width: 50em) 100vw, (max-width: 28em) 50vw, 100vw", altInfo:"Just a Image"},
    {source:"/assets/image.jpeg", soureSet:"/assets/image-large.jpeg 2000w, /assets/image-medium.jpeg 1000w, /assets/image-small.jpeg 500w", sizes:"(max-width: 50em) 100vw, (max-width: 28em) 50vw, 100vw", altInfo:"Just a Image"},
    {source:"/assets/image.jpeg", soureSet:"/assets/image-large.jpeg 2000w, /assets/image-medium.jpeg 1000w, /assets/image-small.jpeg 500w", sizes:"(max-width: 50em) 100vw, (max-width: 28em) 50vw, 100vw", altInfo:"Just a Image"},
    {source:"/assets/image.jpeg", soureSet:"/assets/image-large.jpeg 2000w, /assets/image-medium.jpeg 1000w, /assets/image-small.jpeg 500w", sizes:"(max-width: 50em) 100vw, (max-width: 28em) 50vw, 100vw", altInfo:"Just a Image"},
  ]

}

export interface ImageData {
  source: string;
  soureSet?: string;
  sizes?: string;
  altInfo: string;
}
