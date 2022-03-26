import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exaxt path="/bookdetailspage/:id" element={<BookDetailsPage />} />
        <Route exact path="/section/:section" element={<Section/>} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        <Route  path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};
