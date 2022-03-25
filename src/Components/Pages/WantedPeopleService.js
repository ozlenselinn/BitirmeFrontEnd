import axios from "axios";

const WANTEDPEOPLE_API_BASE_URL = "http://localhost:8080/api/addWantedPeople";

class WantedPeopleService {

    getWantedPeople() {

        return axios.get(WANTEDPEOPLE_API_BASE_URL);
    }

    createWantedPeople(wantedPeople) {

        return axios.post(WANTEDPEOPLE_API_BASE_URL, wantedPeople);

    }

    getWantedPeopleById(wantedPeopleId) {

        return axios.get(WANTEDPEOPLE_API_BASE_URL + '/' + wantedPeopleId);
    }

    updateWantedPeople(wantedPeople, wantedPeopleId) {
        return axios.put(WANTEDPEOPLE_API_BASE_URL + '/' + wantedPeopleId, wantedPeople);
    }

    deleteWantedPeople (wantedPeopleId){
        return axios.delete(WANTEDPEOPLE_API_BASE_URL + '/' + wantedPeopleId);
    }

}
export default new WantedPeopleService();


