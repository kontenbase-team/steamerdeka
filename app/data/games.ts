/**
 * Only acts as a reference, not the real data model/shape
 */

export type Game = {
  name: string;
  description: string;
  coverImageUrl: {
    fileName: string;
    url: string;
  }[];
  releaseDate: string;
  developer: string;
  publisher: string;
  price: number;
  priceCurrency: string;
  platforms: string[];
  genres: string[];
  tags: string[];
};

export const games: Game[] = [
  {
    name: "Tahu Bulat",
    description:
      "Masih inget dong sama lagu Tahu Bulat yang Gurih-gurih nyoi itu? Nah, sekarang Game Tahu Bulat hadir dengan Tampilan Baru, lho! Jadi terasa seperti Game Baru lagi!",
    coverImageUrl: [
      {
        fileName: "tahu-bulat.jpeg",
        url: "",
      },
    ],
    releaseDate: "2022-08-04",
    developer: "Own Games",
    publisher: "Own Games",
    price: 20000,
    priceCurrency: "IDR",
    platforms: ["Android", "iPhone", "iPad"],
    genres: ["Simulation", "Idle"],
    tags: ["Food", "Indonesian"],
  },
  {
    name: "Coffee Talk",
    description:
      "Coffee Talk is a coffee brewing and heart-to-heart talking simulator about listening to fantasy-inspired modern peoples’ problems, and helping them by serving up a warm drink or two.",
    coverImageUrl: [
      {
        fileName: "coffee-talk.jpeg",
        url: "https://api.kontenbase.com/upload/file/storage/628922c541fb957f25dc94ae/tQjHSlWR/coffee-talk.jpeg",
      },
    ],
    releaseDate: "2020-01-30",
    developer: "Toge Productions",
    publisher: "Toge Productions",
    price: 83999,
    priceCurrency: "IDR",
    platforms: ["Window", "macOS", "Android"],
    genres: ["Adventure", "Casual", "Indie"],
    tags: ["Conversation", "Pixel Graphics", "Atmospheric", "Anime"],
  },
];
