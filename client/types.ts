export type Song = {
  name: string;
  artist: string;
};

export type SongProviderTypes = {
  songs: Song[];
  setSongs: (vl: any) => void;
};
