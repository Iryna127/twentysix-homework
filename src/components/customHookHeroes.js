import useFetchHeroes from '../hooks/useFetchHerous';
import HeroList from './heroList';
import { useState } from 'react';
import '../css/pageHerous.css';
import { useNavigate, useParams } from 'react-router-dom';
const CustomHookHerous = () => {
  let [pageNumber, setPageNumber] = useState(1);
  const { id } = useParams();
  const { data, loading, nextPageUrl, prevPageUrl } = useFetchHeroes(
    `character/?page=${pageNumber}`
  );
  console.log(data);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePrevPage = () => setPageNumber(pageNumber - 1);
  return (
    <>
      <div className="wrapper">
        <div className="heroes-name">Heroes Cards</div>
        <div>{loading ? <p>loading...</p> : <HeroList heroList={data} heroId ={id}/>}</div>
        <div className="buttons">
          <button onClick={handlePrevPage} disabled={prevPageUrl == null}>
            prev
          </button>
          <button onClick={handleNextPage} disabled={nextPageUrl == null}>
            next
          </button>
        </div>
      </div>
    </>
  );
};
export default CustomHookHerous;
