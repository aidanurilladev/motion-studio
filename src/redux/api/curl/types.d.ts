namespace CURL {
  type GetResponse = {
    profile: User;
  };
  type GetRequest = void;

  type PostLoginResponse = {
    accessToken: string;
    accessTokenExpiration: number;
    refreshToken: string;
  };

  type PostLoginRequest = {
    email: string;
    password: string;
  };

  type GetCountriesRes = {
    id: number;
    higher: string;
    higher_ru?: string | null;
    higher_en?: string | null;
    specializations: string;
    specializations_ru?: string | null;
    specializations_en?: string | null;
    countrys: string;
    countrys_ru?: string | null;
    countrys_en?: string | null;
    image?: string | null;
    studyabroad: number;
  };

  type GetCoutriesReg = void;
}
