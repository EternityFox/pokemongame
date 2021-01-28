import logo from './logo.svg';
import './App.css';
import Header from "./components/HeaderBlock/Index";
import Layout from "./components/HeaderBlock/Layout";
import Footer from "./components/HeaderBlock/Footer";
import LayoutImage1 from "./assets/bg1.jpg";
import LayoutImage2 from "./assets/bg2.jpg";

const App = () => {
 return (
  <>
    <Header 
    title='This is title'
    descr='This is Description!'
    />
    <Layout 
    id='1'    
    urlBg={LayoutImage2}
    />    
    <Layout 
    id='2'    
    colorBg="#F6BB42"
    />
    <Layout 
    id='3'
    title='This is Pika'
    urlBg={LayoutImage1}
    />    
    <Footer />
  </>
 );
}

export default App;
