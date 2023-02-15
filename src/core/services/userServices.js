import apiService from "../../api-service/apiService"

const userServices = {
    getUser: async() => {
        const { data } = await apiService.get('/users');
        return data;
    }
}
export default userServices;