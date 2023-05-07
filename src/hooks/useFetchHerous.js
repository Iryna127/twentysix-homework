import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams  } from 'react-router-dom';
const useFetchHeroes = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
const { id } = useParams();
  console.log(data);
  useEffect(() => {
    const fetchHeros = (url) => {
      axios.get(url).then((resp) => {
        setData(resp.data);
        console.log(resp.data);
        console.log(data);
        setLoading(false);
        setNextPageUrl(resp.data.info.next);
        setPrevPageUrl(resp.data.info.prev);
      });
    };
    fetchHeros(url);
  }, [url]);

  return { data, loading, nextPageUrl, prevPageUrl };
};

export default useFetchHeroes;
