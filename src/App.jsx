import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import SingleArticle from "./components/Articles/SingleArticle";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/topics/:topic' element={<Articles />} />
        <Route path='/article/:articleId' element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
