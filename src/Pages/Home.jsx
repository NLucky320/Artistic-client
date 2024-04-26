
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import CraftsItems from '../components/CraftsItems';
import OurServices from '../components/OurServices';
import Blogs from '../components/Blogs';

const Home = () => {
    return (
        <div className='mt-16 mx-2'>
            <Helmet>
              <title>Dream Dwellings | Home</title>  
            </Helmet>
            <Banner></Banner>
            <CraftsItems></CraftsItems>
            <OurServices></OurServices>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;