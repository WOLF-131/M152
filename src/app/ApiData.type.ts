export class DisplayImageData {
  source: string;
  altInfo: string;
  sourceSet?: string;
  sizes?: string;

  constructor(
    source: string,
    altInfo: string,
    sourceSet: string = '',
    size: string = ''
  ) {
    this.source = source;
    this.altInfo = altInfo;
    this.sourceSet = sourceSet;
    this.sizes = size;
  }
}

export class DisplayVideoData {
  source: string;
  altInfo: string;
  caption: string;
  isStream: boolean;
  subs: VideoSubs[];

  constructor(
    source: string,
    altInfo: string,
    caption: string,
    isStream: boolean = false,
    subs: VideoSubs[] = []
  ) {
    this.source = source;
    this.altInfo = altInfo;
    this.caption = caption;
    this.isStream = isStream;
    this.subs = subs;
  }
}

export class VideoSubs {
  source: string;
  lang: string;
  label: string;

  constructor(source: string, lang: string, label: string) {
    this.source = source;
    this.lang = lang;
    this.label = label;
  }
}

export class DisplayAudioData {
  sources: AudioDataSource[];
  altInfo: string;
  caption: string;

  constructor(sources: AudioDataSource[], altInfo: string, caption: string) {
    this.sources = sources;
    this.altInfo = altInfo;
    this.caption = caption;
  }
}

export class AudioDataSource {
  source: string;
  type: string;

  constructor(source: string, type: string) {
    this.source = source;
    this.type = type;
  }
}

export interface ApiData {
  images: ApiImages[];
  videos: any[];
  logos: any[];
  audio: any[];
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
