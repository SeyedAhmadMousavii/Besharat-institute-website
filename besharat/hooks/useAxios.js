"use client";

import axios from "axios";

export default function useAxios() {
    const baseURL = process.env.NEXT_PUBLIC_BASEAPI;

    const instance = axios.create({
        baseURL
    })

    instance.interceptors.request.use(
        async config => {
            const token = localStorage.getItem("token")

            if (token && config.url.startsWith("/")) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        },
        error => {
            Promise.reject(error)
        }
    )

    return instance
}
