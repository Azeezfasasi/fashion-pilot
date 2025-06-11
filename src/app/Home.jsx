import React from 'react';
import {Helmet} from 'react-helmet';
import TopHeader from '../assets/component/home-component/TopHeader';
import MainHeader from '../assets/component/home-component/MainHeader';
import Hero from '../assets/component/home-component/Hero';
import MostRecentVacancy from '../assets/component/home-component/MostRecentVacancy';
import HowItWorks from '../assets/component/home-component/HowItWorks';
import FeaturedJobs from '../assets/component/home-component/FeaturedJobs';
import Testimonial from '../assets/component/home-component/Testimonial';
import Become from '../assets/component/home-component/Become';
import Footer from '../assets/component/home-component/Footer';

function Home() {
  return (
    <>
    <Helmet>
      <title>Job Pilot - Home</title>
      <meta name="description" content="Welcome to Job Pilot, your go-to platform for job seekers and employers." />
      <meta name="keywords" content="jobs, employment, job search, career, hiring" />
      <link rel="canonical" href="https://www.jobpilot.com/" />
    </Helmet>
    <TopHeader />
    <MainHeader />
    <Hero />
    <MostRecentVacancy />
    <HowItWorks />
    <FeaturedJobs />
    <Testimonial />
    <Become />
    <Footer />
    </>
  )
}

export default Home