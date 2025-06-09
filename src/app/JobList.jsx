import MainHeader from "../assets/component/home-component/MainHeader"
import TopHeader from "../assets/component/home-component/TopHeader"
import Footer from "../assets/component/home-component/Footer"
import SearchFilter from "../assets/component/home-component/SearchFilter"
import FindJobsList from "../assets/component/home-component/FindJobList"

function JobList() {
  return (
    <>
    <TopHeader />
    <MainHeader />
    <SearchFilter />
    <FindJobsList />
    <Footer />
    </>
  )
}

export default JobList