import axios from 'axios';

class Api {
    url : string
    constructor(url : string) {
        this.url = url
    }
    get(path : string) : Promise<any> {
        return axios.get(this.url + path)
    }
    post(path : string, data : any) : Promise<any> {
        return axios.post(this.url + path, data)
    }
    put(path : string, data : any) : Promise<any> {
        return axios.put(this.url + path, data)
    }
    delete(path : string) : Promise<any> {
        return axios.delete(this.url + path)
    }
}

export default Api;