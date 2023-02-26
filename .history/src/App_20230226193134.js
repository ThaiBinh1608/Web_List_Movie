import { Fragment , lazy, Suspense} from "react";
import "swiper/scss";
import { Routes,Route } from "react-router-dom";
import Main from "./components/layout/Main";
// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviesPage";
import Banner from "./components/banner/Banner";
import TVseriesPage from "./pages/TVseriesPage";
// import MoviesDetailsPage from "./pages/MoviesDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("./pages/MoviesDetailsPage"));


function App() {
  return (
    <Fragment>
    <Suspense fallback={<></>}>
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

            <Route path="/tvseries" element={<TVseriesPage></TVseriesPage>}></Route>
            <Route path="/tvserio/:movieId" element={<MoviesDetailsPage></MoviesDetailsPage>}></Route>
            
              

          </Route>
      </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
