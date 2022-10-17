import axios from "axios";

class ApiService {

    async getChampionData() {
        return axios.get('http://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion.json')
        .then(resp => {
            return resp.data;
        })
        //http://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion.json
    }


}

export default new ApiService();