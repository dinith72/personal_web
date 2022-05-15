import "./App.scss";
import { PageNavbar } from "./components/PageNavBar";
import { HomePage }  from './components/HomePage';
import About from "./components/about/About";

function App() {
  return (
  <div>
    <PageNavbar />
    <HomePage />
    <About/>
  </div>
  );
}

export default App;
