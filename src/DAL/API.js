import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: "http://localhost:3003"
});


export const orderAPI = {
    GetOrder () {
        return instance.get('/all').then(
            res => res.data
        )
    },
    AddOrder (name, age) {
        return instance.post('/save', {
            name: name,
            age: age
        }).then(
            res => res.data
        )
    }
}