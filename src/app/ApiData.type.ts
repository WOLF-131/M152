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

  constructor(source: string, altInfo: string, caption: string, isStream: boolean = false) {
    this.source = source;
    this.altInfo = altInfo;
    this.caption = caption;
    this.isStream = isStream;
  }
}

export class DisplayAudioData {
  source: string;
  altInfo: string;
  caption: string;

  constructor(source: string, altInfo: string, caption: string) {
    this.source = source;
    this.altInfo = altInfo;
    this.caption = caption;
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
