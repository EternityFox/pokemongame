import logo from './logo.svg';
import './App.css';
import HeaderBlock from "./components/HeaderBlock/Index";

const App = () => {
 return (
  <>
    <HeaderBlock
     title="This is new Title"
     descr="This is new description!"
     />
    <HeaderBlock
     title="This is new Title"
     hideBackground
     />
  </>
 );
}

export default App;
