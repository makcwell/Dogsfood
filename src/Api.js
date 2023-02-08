const onResponce = (res) => {
	return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
	constructor({ baseUrl, token }) {
		//this._token = `Bearer ${token}`;
        const headers = {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
		this._requestInit = {
			headers: headers,
		};
		this._baseUrl = baseUrl;
	}

	getProductList() {
		return fetch(`${this._baseUrl}/products`, this._requestInit).then(onResponce);
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, this._requestInit).then(onResponce);
	}

    search(searchQuery) {
        return fetch(
            `${this._baseUrl}/products/search?query=${searchQuery}`,
            this._requestInit
        ).then(onResponce)
    }
	
}

const config = {
    baseUrl:'https://api.react-learning.ru',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0MTM0NDU5Yjk4YjAzOGY3N2IzYmIiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc1ODkyMTUwLCJleHAiOjE3MDc0MjgxNTB9.qsLaIEGQoFj_sV3DZXhvx0mJf23d-mTB0WkFxfhbqrU'
}

// or
// const config = {
//     baseUrl: 'https://api.react-learning.ru',
//     headers: {
//         'content-type': 'application/json',
//         Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac'
//     }
// }

const api = new Api(config)

export default api;