import {useEffect, useState} from "react";
import axios from "axios";

export function useFetch (url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        setError(undefined)

        axios.get(url, {
            signal: controller.signal
        })
            .then(response => setData(response.data))
            .catch(e => setError(e.message))
            .finally(() => setLoading(false))

        return () => {
            controller.abort()
        }
    }, [url])

    return [loading, data, error]
}