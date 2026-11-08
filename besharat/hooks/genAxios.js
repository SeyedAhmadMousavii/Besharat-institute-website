import axios from "axios";

export default function genAxios() {
    const baseURL = process.env.NEXT_PUBLIC_BASEAPI
    const instance = axios.create({
        baseURL
    })

    return instance
}
