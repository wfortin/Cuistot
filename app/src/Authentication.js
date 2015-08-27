import URI from 'URIjs';
import config from '../config';

export default class Authentication {
    static getAccessToken() {
        return localStorage.getItem('access_token');
    }

    static setAccessToken(token) {
        return localStorage.setItem('access_token', token);
    }

    static clearAccessToken() {
        return localStorage.removeItem('access_token');
    }

    static parseTokenFromUrl() {
        debugger;
        var queryString = '?' + document.URL.split('?')[1];
        var queryParameters = URI.parseQuery(queryString);

        var access_token = queryParameters['access_token'];

        if (access_token) {
            // Clear token from url without reloading
            window.history.pushState('', '', window.location.pathname);
            Authentication.setAccessToken(access_token);
        }
    }

    static checkToken() {
        Authentication.parseTokenFromUrl();
        if (!Authentication.getAccessToken()) {
            window.location.assign(config.api.url + '/login');
        }
    }
}
