import { Component, OnInit } from '@angular/core';
import { TwitchEmbed, TwitchEmbedLayout } from 'twitch-player';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
})
export class LivestreamComponent implements OnInit {
  constructor() {}
  private Twitch: any;

  ngOnInit(): void {
    //   var options = {
    //     width: 854,
    //     height: 480,
    //     channel: 'monstercat',
    //     // video: "<video ID>",
    //     // collection: "<collection ID>",
    //   };
    //   var player = new this.Twitch.Player('twitch-embed', options);
    //   player.setVolume(0.5);

    const embed = new TwitchEmbed('twitch-player', {
      width: 1280,
      height: 720,
      channel: 'makerdeck',
      layout: TwitchEmbedLayout.VIDEO
    });
  }
}
