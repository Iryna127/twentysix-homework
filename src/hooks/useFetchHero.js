import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useFetchHero = (url) => {
  const [datanew, setData] = useState();
  const [loading, setLoading] = useState(true);
console.log(data)
  const { id } = useParams;
  useEffect(() => {
 
    fetchHero(url);
  }, [url]);
   const fetchHero =  () => {
    setLoading(true);
    try {
          const datanew = axios.get(url).then((resp) => {
        setData(resp.data);
        setLoading(false);
        console.log(resp.data)
        console.log(datanew)})
    } catch (err) {
        console.log(err)

    }
      
    
    };
  return { datanew, loading};
};

export default useFetchHero;
