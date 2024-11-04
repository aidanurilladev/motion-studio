namespace CURL {
	type GetResponse = {
		profile: User
	};
	type GetRequest = void;

	type PostLoginResponse = {
		accessToken: string;
		accessTokenExpiration: number;
		refreshToken: string
	};
	
	type PostLoginRequest = {
		email: string;
		password: string;
	};
}

