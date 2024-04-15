import axios from 'axios';
import { useState } from 'react';

const useFech = () => {
    const [apiData, setApiData] = useState();
    const [isLoading, setIsloading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const getApi = url => {
        axios.get(url)
            .then(res => {
                setHasError(false);
                setApiData(res.data);
            })
            .catch(err => {
                setHasError(true);
                console.log(err);
            })
            .finally(() => {
                setIsloading(false);
            });
    }

    return [apiData, getApi, isLoading, hasError];

}

export default useFech;
