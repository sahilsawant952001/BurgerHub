import Axios from "axios";

const instance = Axios.create({
    baseURL:'https://burgerhub-3d5f7-default-rtdb.firebaseio.com/'
});

export default instance;
