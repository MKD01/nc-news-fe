import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className='App'>
      <Link to='/'>
        <h1>NC News</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:articleId' element={<SingleArticle />} />
        {/* <Route path='/topics' element={<Topics />} /> */}
      </Routes>
    </div>
  );
}

export default App;
