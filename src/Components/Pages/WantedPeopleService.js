import axios from "axios";

const WANTEDPEOPLE_API_BASE_URL = "http://localhost:8080/api/addWantedPeople";

class WantedPeopleService {

    getWantedPeople() {

        return axios.get(WANTEDPEOPLE_API_BASE_URL);
    }

}
export default new WantedPeopleService();


