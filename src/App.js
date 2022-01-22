import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Features from "./components/Features";
// import Contacts from "./components/Contacts";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <Nav/>
      <About my_name='Karthick' role_1='Designer' role_2='Developer'/>
     <Projects/> 
     <Features/>
     <Footer/>
     {/* <Contacts/> */}
    </div>
  );
}

export default App;
