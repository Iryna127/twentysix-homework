import { Outlet } from 'react-router-dom';
import CustomHookHerous from '../components/customHookHeroes';
import '../css/pageHerous.css';

const PageHerous = () => {
  return (
    <>
      <div className="main-wrapper">
        <Outlet />
        <div className="herous-block">
          <CustomHookHerous />
        </div>
      </div>
    </>
  );
};
export default PageHerous;
