import TopHeader from "../assets/component/home-component/TopHeader"
import MainHeader from "../assets/component/home-component/MainHeader"
import Footer from "../assets/component/home-component/Footer"
// import Breadcrumb from "../assets/component/home-component/Breadcrumb"
import JobDescription from "../assets/component/home-component/JobDescription"

function JobDetails() {
  return (
    <>
    <TopHeader />
    <MainHeader />
    {/* <Breadcrumb /> */}
    <JobDescription />
    <Footer />
    </>
  )
}

export default JobDetails