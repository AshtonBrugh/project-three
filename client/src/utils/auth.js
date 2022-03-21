import decode from 'jwt-decode';

class AuthService {

    checkLogin() {
        const thisToken = this.getToken();
        if (thisToken) {
            return !this.isTokenExpired(thisToken);
        } else {
            return false;
        }
    }

    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        return this.checkLogin();
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else return false;

        }
        catch (err) {
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
        window.location.assign('/login')
    }
};

export default new AuthService();
