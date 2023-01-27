import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Footer from './components/Footer';
import Mybio from './Mybio';
import Contact from './Contact';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Home from './Home';
import Skill from './Skill';
import Error from './components/Error';
import GoToTop from './components/GoToTop';
import MyInfo from './MyInfo';
import Resume from './components/Resume/Resume';

const App = () => {
    const theme = {
        colors: {
            heading: "rgb(24 24 29)",
            text: "rgb(24 24 29)",
            white: "#fff",
            black: " #212529",
            helper: "#8490ff",
            bg: "rgb(249 249 255)",
            footer_bg: "#0a1435",
            btn: "rgb(98 84 243)",
            border: "rgba(98, 84, 243, 0.5)",
            hr: "#ffffff",
            gradient:
                "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
            shadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: { mobile: "768px", tab: "998px" },
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GoToTop />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='Skill' element={<Skill />} />
                    <Route path='resume' element={<Resume/>} />
                    <Route path='*' element={<Error />} /><Route />
                </Routes>
                
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;