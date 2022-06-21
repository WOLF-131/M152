import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiData, DisplayAudioData, DisplayVideoData } from '../ApiData.type';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
})
export class TutorialsComponent implements OnInit {
  private ApiUrl: string = 'https://strapi.getthewolfs.com';
  public displayVideoDataList: DisplayVideoData[] = [];
  public displayAudioDataList: DisplayAudioData[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    lastValueFrom(this.http.get<ApiData>(this.ApiUrl + '/m-152')).then(
      (data: ApiData) => {
        data.videos.forEach((video) =>
          this.displayVideoDataList.push(
            new DisplayVideoData(
              this.ApiUrl + video.url,
              video.alternativeText,
              video.caption
            )
          )
        );
        data.audio.forEach((audio) => {
          this.displayAudioDataList.push(
            new DisplayAudioData(
              this.ApiUrl + audio.url,
              audio.alternativeText,
              audio.caption
            )
          );
        });

        this.displayVideoDataList.push(
          new DisplayVideoData(
          "http://www.bok.net/dash/tears_of_steel/cleartext/stream.mpd",
          "Test of mpeg-dash",
          "Test",
          true
        ));
      }
    );
  }
}
