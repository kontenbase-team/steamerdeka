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
  genre: string[];
  tags: string[];
};

export const games: Game[] = [
  {
    // coverImageUrl: "https://api.kontenbase.com/api_key/image.jpg",
    coverImageUrl: [
      {
        fileName: "coffee-talk.jpeg",
        url: "https://api.kontenbase.com/upload/file/storage/628922c541fb957f25dc94ae/tQjHSlWR/coffee-talk.jpeg",
      },
    ],
    name: "Coffee Talk",
    description:
      "Coffee Talk is a coffee brewing and heart-to-heart talking simulator about listening to fantasy-inspired modern peoples’ problems, and helping them by serving up a warm drink or two.",
    releaseDate: "2020-01-30",
    developer: "Toge Productions",
    publisher: "Toge Productions",
    price: 83999,
    priceCurrency: "IDR",
    genre: ["Adventure", "Casual", "Indie"],
    tags: ["Conversation", "Pixel Graphics", "Atmospheric", "Anime"],
    platforms: ["Window", "macOS", "Android"],
  },
];
