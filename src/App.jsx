import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Member = lazy(() => import("./pages/Member"));
const Contact = lazy(() => import("./pages/Contact"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ScrollToTop = lazy(() => import("./Utilities/ScrollToTop"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
