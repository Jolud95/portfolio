import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./MyProjects/MyProjects";
import DistantWork from "./DistantWork/DistantWork";
import Contacts from "./Communications/Contacts";
import Footer from "./Footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
