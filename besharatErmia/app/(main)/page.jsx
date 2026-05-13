"use client";

import MainBanner from "./components/banner";
import Speciality from "./components/speciality";
import ProductSection from "./components/product";
import LiveCourses from "./components/liveCourses/item";
import Score from "./components/score/score";
import Maliat from "./components/maliat/maliat";
import Library from "./components/libraryBanner/library";
import Employment from "./components/employment";
import Maghalat from "./components/maghalat/maghalat";
import PodCastPage from "./components/podCasts/item";
import MaghalatPage from "./components/maghalat/item";
import { Loan } from "./components/loan/Loan";
import InstagramGallery from "./components/instagram/page";
import PriceListLink from "./components/prices/page";
import Satisfaction from "./components/satisfaction/page";
import ExamGrid from "./examGrid/page";

export default function Home() {
  return (
    <div className="py-4 px-4">
      <div className="container mx-auto">
      <MainBanner />
      <Speciality />
      <PriceListLink  />
      <ProductSection  />
      {/* <LiveCourses /> */}
      <ExamGrid/>
      <InstagramGallery />
      <Library />
      <Maliat />
      <Score/>
      <Employment />
      <Loan />
      <PodCastPage />
      <MaghalatPage />
      </div>
    </div>
  )
}
