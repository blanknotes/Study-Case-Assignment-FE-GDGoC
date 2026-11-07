import { useCallback, useEffect, useState } from "react";

export default function useFetch(fetcher) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const load = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const result = await fetcher();
            setData(result);

        } catch (err) {
            console.error(err)
            setError("Gagal mengambil data track.");

        } finally {
            setLoading(false);
        }
    }, [fetcher]);

    useEffect(() => {
        load();
    }, []);

    return {
        data,
        loading,
        error,
        retry: load
    };
}