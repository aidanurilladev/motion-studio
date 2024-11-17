namespace CURL {
  type GetResponse = Array<{
    id: number;
    description: string;
    description_ru: string;
    description_en: string;
    image: string;
  }>;
  type GetRequest = void;
}
