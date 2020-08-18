import axios from "axios";

class UserAPI {
    static register = data => axios.post("/auth/register", data);

    static login = data => axios.post("/auth/", data);
};

export default UserAPI;