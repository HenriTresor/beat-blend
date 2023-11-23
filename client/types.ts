export interface Song extends File {}

export type SongProviderTypes = {
  songs: File[];
  setSongs: (vl: any) => void;
};
