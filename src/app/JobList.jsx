import MainHeader from "../assets/component/home-component/MainHeader";
import TopHeader from "../assets/component/home-component/TopHeader";
import Footer from "../assets/component/home-component/Footer";
import SearchFilter from "../assets/component/home-component/SearchFilter";
import FindJobsList from "../assets/component/home-component/FindJobList";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useJob from "../assets/context-api/job/useJob";

function JobList() {
  const { searchJobs } = useJob();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword") || "";
    const loc = params.get("location") || "";
    if (keyword || loc) {
      searchJobs(keyword, loc);
    }
    searchJobs(keyword, loc);
    // Optionally, clear filters if both are empty
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <>
      <TopHeader />
      <MainHeader />
      <SearchFilter />
      <FindJobsList />
      <Footer />
    </>
  );
}

export default JobList;