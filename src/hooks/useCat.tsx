import { useState, useEffect } from 'react';
import axios from 'axios';
export function useFetchingCats() {
    const [data, setData] = useState<any[]>([]);

    const fetchCats = async () => {
        axios
            .get(
                'https://api.thecatapi.com/v1/images/search?limit=100&mime_types=png&sizes=small'
            )
            .then((response) => {
                setData(response.data);
            });
    };

    useEffect(() => {
        fetchCats();
    }, []);
    return { data, fetchCats };
}
