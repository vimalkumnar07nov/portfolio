import React,{useEffect} from 'react';
import Cards from './Cards';
import Resume from './components/Resume/Resume';
import Contact from './Contact';
import { useGlobalContext } from './Context';
import Herosection from './Herosection';



const Home = () => {
    
    const { updateHome } = useGlobalContext();
    useEffect(() => updateHome(), []);
    

    return (
        <>
            <Herosection />
            <Cards />
            <Resume/>
            <Contact/>
        </>
    );
};

export default Home;