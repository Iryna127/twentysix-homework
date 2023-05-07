/* import { Outlet } from 'react-router-dom'; */
import CustomHookEpisodes from '../components/customHookEpisodes';
import '../css/pageEpisodes.css';


const PageEpisodes = () => {
  return (
    <>
      <div className="episode-block">
     {/*  <Outlet/> */}
        <CustomHookEpisodes />
      </div>
    </>
  );
};
export default PageEpisodes;
