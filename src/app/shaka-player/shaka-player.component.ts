import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

declare let shaka: any;
@Component({
  selector: 'app-shaka-player',
  templateUrl: './shaka-player.component.html',
  styleUrls: ['./shaka-player.component.scss'],
})
export class ShakaPlayerComponent implements OnInit, AfterViewInit {
  @Input() videoSource: string = '';
  @ViewChild('videoPlayer') videoElementRef: ElementRef | undefined;
  @ViewChild('videoContainer') videoContainerRef: ElementRef | undefined;

  videoElement: HTMLVideoElement | undefined;
  videoContainerElement: HTMLDivElement | undefined;
  player: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.videoElement = this.videoElementRef?.nativeElement;
      this.videoContainerElement = this.videoContainerRef?.nativeElement;
      this.initPlayer();
    } else {
      console.error('Browser not supported!');
    }
    // if (this.platform.SAFARI) {
    //   console.error('Safari is currently not supported!');
    // }
  }

  private initPlayer() {
    this.player = new shaka.Player(this.videoElement);

    const ui = new shaka.ui.Overlay(
      this.player,
      this.videoContainerElement,
      this.videoElement
    );

    this.player
      .load(this.videoSource)
      .then(() => {
        // this.videoElement?.play();
      })
      .catch((e: any) => {
        console.error(e);
      });
  }
}
