// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace CURL {
  type GetCountriesRes = {
    id: number;
    description: string;
    description_ru?: string | null;
    description_en?: string | null;
    image: string;
  }[];

  type GetCoutriesReg = void;

  type getUniversitiesRes = {
    id: number;
    location: string;
    time: string;
    typeofprogramis: string;
    language: string;
    name: string;
    name_ru: string;
    name_en: string;
    image: string | null;
    description: string;
    date: string;
    cost: string;
    photo: string | null;
    category: number;
  };

  type getUniversitiesReq = void;
}
