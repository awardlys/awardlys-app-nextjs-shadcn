export type Game = {
  id: string;
  title: string;
  description: string;
  platform: string;
  image_url: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrUpdateGame = Omit<Game, "id" | "createdAt" | "updatedAt">;
