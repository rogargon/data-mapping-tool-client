import AuthService from "./AuthService";
import ConfigService from "./ConfigService";
import axios from "axios";


class UserService {
    private authService = new AuthService();
    private configService = new ConfigService();

    public editUser(username:string,payload: any) {
        const headers = {
            'Authorization': 'Bearer ' + this.authService.hasCredentials()
        };

        return axios.patch(this.configService.getConfig().api_url + '/users/' + username, payload, {headers: headers})
    }

}

export default UserService;