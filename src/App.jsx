import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import SingleArticle from "./components/SingleArticles/SingleArticle";
import Header from "./components/Header";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:articleId' element={<SingleArticle />} />
        <Route path='/user' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
