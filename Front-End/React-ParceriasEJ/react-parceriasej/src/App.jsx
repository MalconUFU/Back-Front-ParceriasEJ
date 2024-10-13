import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import './output.css';


function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-zinc-800">
        <h1 className="text-4xl font-bold text-white">
          Projeto Parcerias EJ
        </h1>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
