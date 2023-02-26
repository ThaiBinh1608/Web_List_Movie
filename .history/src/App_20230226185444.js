import { Fragment , lazy, Suspense} from "react";
import "swiper/scss";
import { Routes,Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import Banner from "./components/banner/Banner";
import MoviesDetailsPage from "./pages/MoviesDetailsPage";

function App() {
  return (
    <Fragment>
      <Routes>
          <Route  element= {<Main></Main>}>

            <Route path="/" element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>}>
            </Route>
            <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
            <Route path="/movie/:movieId" element={<MoviesDetailsPage></MoviesDetailsPage>}></Route>
      

          </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
