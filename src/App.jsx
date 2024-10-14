import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import SingleArticle from "./components/SingleArticles/SingleArticle";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:articleId' element={<SingleArticle />} />
      </Routes>
      <Modal />
    </div>
  );
}

// need to:

// create a back button to navigate to the previous page
// button to take you back to the top of the page
// pagination for articles and comments

export default App;
