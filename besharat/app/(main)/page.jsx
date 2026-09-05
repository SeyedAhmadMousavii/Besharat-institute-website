"use client";

import MainBanner from "./components/banner";
import Speciality from "./components/speciality";
import ProductSection from "./components/product";
import Score from "./components/score/score";
import Library from "./components/libraryBanner/library";
import Employment from "./components/employment";
import { Loan } from "./components/loan/Loan";
import InstagramGallery from "./components/instagram/page";
import PriceListLink from "./components/prices/page";
import ExamGrid from "./examGrid/page";
import DiplomaPromoCard from "./components/DiplomaPromoCard/page";
import TajershooCard from "./components/TajerShooCard/page";
import ArticlePage from "./components/articleComponent/item";
import Head from "next/head";
import StudyAbroadCard from "./components/Internationalcard/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>آموزشگاه بشارت | آموزش کامپیوتر، نقشه کشی، حسابداری و ارز دیجیتال</title>
        <meta name="description" content='آموزشگاه بین المللی بشارت در غرب تهران، بیش از 20 سال سابقه در آموزش کامپیوتر، ICDL، حسابداری، ارز دیجیتال و نقشه کشی. مدرک فنی و حرفه ای معتبر، اساتید مجرب، تضمین بازگشت وجه. مشاوره رایگان بگیرید.' />
        <meta name="keywords" content="آموزشگاه بشارت, ساناز فراهانی, ایلیا درخشان, سیداحمد موسوی, آموزش کامپیوتر, آموزش حسابداری, آموزش ارز دیجیتال, آموزش نقشه کشی, MBA, ICDL, فنی و حرفه ای, شهریار, کارآفرین برتر" />
      </Head>
      <div className="py-4 px-4">
        <div className="container mx-auto">
          <MainBanner />
          <Speciality />
          <StudyAbroadCard/>
          {/* <PriceListLink  /> */}
          <ProductSection  />
          <TajershooCard />
          <ExamGrid/>
          <InstagramGallery />
           <DiplomaPromoCard />
          <Library />
    
          <Score/>
          <Employment />
          <Loan />
         
          <ArticlePage />
        </div>
      </div>
    </>
  )
}