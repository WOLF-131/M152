import { Component, OnInit } from '@angular/core';
import {
  AudioDataSource,
  DisplayAudioData,
  DisplayVideoData,
  VideoSubs,
} from '../ApiData.type';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
})
export class TutorialsComponent implements OnInit {
  public displayVideoDataList: DisplayVideoData[] = [
    new DisplayVideoData(
      'https://strapi.getthewolfs.com/uploads/timelapse_3_D_Benchy_1_44e3f77f18.mp4',
      'Printing a 3DBenchy on a RatRig VCore3 400mm.',
      'Timelapse: 3DBenchy'
    ),
    new DisplayVideoData(
      '/sj_21_22/infa3b_08/m152/jprinting/assets/video/M152-bed_leveling_lang_sub.mp4',
      'In this tutorial, Janik is showing, how to level the bed of his 3D printer. MP4 version.',
      'Tutorial: RatRig Bedleveling',
      false,
      [
        new VideoSubs("/sj_21_22/infa3b_08/m152/jprinting/assets/subs/M152-bed_leveling_eng.vtt", "eng", "English"),
        new VideoSubs("/sj_21_22/infa3b_08/m152/jprinting/assets/subs/M152-bed_leveling_deu.vtt", "deu", "Deutsch")
      ]
    ),
    new DisplayVideoData(
      '/sj_21_22/infa3b_08/m152/jprinting/assets/video/janik_leveling/manifest.mpd',
      'In this tutorial, Janik is showing, how to level the bed of his 3D printer. MPEG-DASH version',
      'Tutorial: RatRig Bedleveling',
      true
    ),
    new DisplayVideoData(
      '/sj_21_22/infa3b_08/m152/jprinting/assets/video/bed_leveling_sub.mp4',
      'In this tutorial, Janis is showing, how to level the bed of his 3D printer.',
      'Tutorial: Bed Leveling on Ender 3 Pro',
      false,
      [
        new VideoSubs("/sj_21_22/infa3b_08/m152/jprinting/assets/subs/bed_leveling_sub_eng.vtt", "eng", "English"),
        new VideoSubs("/sj_21_22/infa3b_08/m152/jprinting/assets/subs/bed_leveling_sub_deu.vtt", "deu", "Deutsch")
      ]
    ),
  ];
  public displayAudioDataList: DisplayAudioData[] = [
    new DisplayAudioData(
      [
        new AudioDataSource('/sj_21_22/infa3b_08/m152/jprinting/assets/audio/M152-bed_leveling_de.ogg', 'audio/ogg'),
        new AudioDataSource('/sj_21_22/infa3b_08/m152/jprinting/assets/audio/M152-bed_leveling_de.mp3', 'audio/mpeg'),
      ],
      'Audio Tutorial: RatRig Bedleveling (Deutsch)',
      'In this tutorial, Janik is showing, how to level the bed of his 3D printer. Audio only version'
    ),
    new DisplayAudioData(
      [
        new AudioDataSource('/sj_21_22/infa3b_08/m152/jprinting/assets/audio/M152-bed_leveling_eng.ogg', 'audio/ogg'),
        new AudioDataSource('/sj_21_22/infa3b_08/m152/jprinting/assets/audio/M152-bed_leveling_eng.mp3', 'audio/mpeg'),
      ],
      'Audio Tutorial: RatRig Bedleveling (English)',
      'In this tutorial, Janik is showing, how to level the bed of his 3D printer. Audio only version'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
