export type Games = Game[];

export type Game = {
  _id: string;
  slug: string;
  name: string;
  description: string;
  coverImageUrl: {
    fileName: string;
    url: string;
  }[];
  releaseDate: string;
  developers: {
    _id: string;
    name: string;
    slug: string;
  }[];
  publishers: {
    _id: string;
    name: string;
    slug: string;
  }[];
  price: number;
  priceCurrency: string;
  platforms: {
    color: string;
    id: string;
    value: string;
  }[];
  genres: {
    _id: string;
    name: string;
    slug: string;
  }[];
  tags: {
    _id: string;
    name: string;
    slug: string;
  }[];
};
