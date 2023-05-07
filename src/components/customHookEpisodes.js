import useFetchEpisides from '../hooks/useFetchEpisodes';
import HeroList from './heroList';
import { useState } from 'react';
import '../css/pageEpisodes.css';
const CustomHookEpisodes = () => {
  let [pageNumber, setPageNumber] = useState(1);
  const { data, loading, nextPageUrl, prevPageUrl } = useFetchEpisides(
    `episode/?page=${pageNumber}`
  );
console.log(data)
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePrevPage = () => setPageNumber(pageNumber - 1);

  return (
    <>
      <div className="wrapper">
        <div className="episode-name">Episodes Cards</div>
        <div className='block'>
          <div>
            {loading ? <p>loading...</p> : <HeroList heroList={data} />}
          </div>
          <div className="buttons">
            <button onClick={handlePrevPage} disabled={prevPageUrl == null}>
              prev
            </button>
            <button onClick={handleNextPage} disabled={nextPageUrl == null}>
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomHookEpisodes;
