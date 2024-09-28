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
        <Route path='/' element={<></>} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:articleId' element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
