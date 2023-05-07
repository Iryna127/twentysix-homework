import '../css/homePage.css';
import rick from '../img/rick.jpg';
const HomePage = () => {
  return (
    <>
      <div className="wrapper__home">
        <h1 className="home__name">Rick and Morty API</h1>
        <img className='home__image' src={rick} />
      </div>
    </>
  );
};
export default HomePage;
