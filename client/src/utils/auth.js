import decode from 'jwt-decode';

class AuthService {

    checkLogin() {
        const thisToken = this.getToken();
        if (thisToken) {
            return this.isTokenExpired(thisToken);
        } else {
            return false;
        }
    }

    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            //console.log('decoded', decoded);
            //console.log('decoded.exp', decoded.exp);
            console.log('Date.Now() / 1000', Date.Now() / 1000);
            //console.log('decoded.exp < Date.now() / 1000', decoded.exp < Date.now() / 1000);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/')
    }
};

export default new AuthService();