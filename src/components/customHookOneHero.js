import useFetchHeroes from '../hooks/useFetchHerous';
import CharacterCard from './characterCard';
import { useParams } from 'react-router-dom';
const Heroes = () => {
  const { id } = useParams();


  const { data, loading } = useFetchHeroes(
    `character/${id}`
  );

  console.log(data);
  console.log(id);

  return (
    <>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <CharacterCard heroLists={data} heroIndex={id} />
        )}
      </div>
    </>
  );
};
export default Heroes;
