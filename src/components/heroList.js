import HeroCard from './heroCard';
import '../css/heroList.css';
import { useNavigate, useParams } from 'react-router-dom';

/* import { useParams } from 'react-router-dom'; */

const HeroList = (props, {heroList, heroId}) => {
  /* const { id} = useParams(); */
  const navigate = useNavigate();
  const showHeroHandler = (heroId) => {
    navigate(`/character/character/${heroId}`);
console.log(heroId)
    console.log(heroList);
  };
  return (
    <div className="hero-list">
      {props.heroList?.results &&
        props.heroList.results.map((heroList, heroId) => (
          <HeroCard
            key={`hero-card-${heroId}`}
            onClick={() => showHeroHandler(heroId)}
          >
            {heroList.id}
            {heroList.name}
          </HeroCard>
        ))}
    </div>
  );
};
export default HeroList;
