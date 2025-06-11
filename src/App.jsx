// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/Home'
import Login from './Login'
import Register from './Register'
import EmailVerification from './EmailVerification'
import ResetPasword from './ResetPasword'
import AboutUs from './app/AboutUs'
import Blog from './app/Blog'
import ContactUs from './app/ContactUs'
import CustomerSupport from './app/CustomerSupport'
import Dashboard from './app/Dashboard'
import Faq from './app/Faq'
import FindEmployers from './app/FindEmployers'
import JobCategory from './app/JobCategory'
import JobDetails from './app/JobDetails'
import JobList from './app/JobList'
import PostJob from './app/PostJob'
import PrivacyPolicy from './app/PrivacyPolicy'
import TermsAndConditions from './app/TermsAndConditions'
import AppliedJobs from './candidate/AppliedJobs'
import CandidateOverview from './candidate/CandidateOverview'
import CandidateSettings from './candidate/CandidateSettings'
import FavoriteJobs from './candidate/FavoriteJobs'
import JobAlert from './candidate/JobAlert'
import AccountSetup from './employer/AccountSetup'
import AllCompanings from './employer/AllCompanings'
import EmployerOverview from './employer/EmployerOverview'
import EmployerSettings from './employer/EmployerSettings'
import EmployersProfile from './employer/EmployersProfile'
import MyJobs from './employer/MyJobs'
import PlansAndBilling from './employer/PlansAndBilling'
import SavedCandidates from './employer/SavedCandidates'
import PricingPlan from './app/PricingPlan'
import AccountCompletion from './employer/AccountCompletion'
import AdminRoute from './app/protected-routes/AdminRoute'
import Unauthorized from './app/protected-routes/Unauthorized'
import PrivateRoute from './app/protected-routes/PrivateRoute'
import { UserProvider } from './assets/context-api/user/UserProvider'
import EmployerRoute from './app/protected-routes/EmployerRoute'
import CandidateAccountSetup from './candidate/CandidateAccountSetup'
import { JobProvider } from './assets/context-api/job/JobProvider'
import { ApplicationProvider } from './assets/context-api/application/ApplicationProvider'
import JobApplication from './candidate/JobApplication'
import Applicants from './employer/Applicants'

function App() {

  return (
    <>
    <UserProvider>
      <JobProvider>
        <ApplicationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/emailverification" element={<EmailVerification />} />
            <Route path="/resetpassword" element={<ResetPasword />} />
            <Route path="/app/aboutus" element={<AboutUs />} />
            <Route path="/app/blog" element={<Blog />} />
            <Route path="/app/contactus" element={<ContactUs />} />
            <Route path="/app/customersupport" element={<CustomerSupport />} />
            <Route path="/app/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/app/faq" element={<Faq />} />
            <Route path="/app/findemployers" element={<FindEmployers />} />
            <Route path="/app/jobcategory" element={<JobCategory />} />
            <Route path="/app/jobdetails/:id" element={<JobDetails />} />
            <Route path="/app/joblist" element={<JobList />} />
            <Route path="/app/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/app/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/app/pricingplan" element={<PricingPlan />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Candiddate Routes */}
            <Route path="/candidate/accountsetup" element={<PrivateRoute><CandidateAccountSetup /></PrivateRoute>} />
            <Route path="/candidate/jobapplication/:id" element={<PrivateRoute><JobApplication /></PrivateRoute>} />
            <Route path="/candidate/appliedjobs" element={<PrivateRoute><AppliedJobs /></PrivateRoute>} />
            <Route path="/candidate/candidateoverview" element={<PrivateRoute><CandidateOverview /></PrivateRoute>} />
            <Route path="/candidate/candidatesettings" element={<PrivateRoute><CandidateSettings /></PrivateRoute>} />
            <Route path="/candidate/favoritejobs" element={<PrivateRoute><FavoriteJobs /></PrivateRoute>} />
            <Route path="/candidate/jobalert" element={<PrivateRoute><JobAlert /></PrivateRoute>} />

            {/* Employer Routes */}
            <Route path="/employer/accountsetup" element={<AccountSetup />} />
            <Route path="/app/postjob" element={<EmployerRoute><PostJob /></EmployerRoute>} />
            <Route path="/employer/allcompanings" element={<EmployerRoute><AllCompanings /></EmployerRoute>} />
            <Route path="/employer/employeroverview" element={<EmployerRoute><EmployerOverview /></EmployerRoute>} />
            <Route path="/employer/employersettings" element={<EmployerRoute><EmployerSettings /></EmployerRoute>} />
            <Route path="/employer/employersprofile" element={<EmployerRoute><EmployersProfile /></EmployerRoute>} />
            <Route path="/employer/myjobs" element={<EmployerRoute><MyJobs /></EmployerRoute>} />
            <Route path="/employer/plansandbilling" element={<EmployerRoute><PlansAndBilling /></EmployerRoute>} />
            <Route path="/employer/savedcandidates" element={<EmployerRoute><SavedCandidates /></EmployerRoute>} />
            <Route path="/employer/accountcompletion" element={<EmployerRoute><AccountCompletion /></EmployerRoute>} />
            <Route path="/employer/applicants" element={<EmployerRoute><Applicants /></EmployerRoute>} />

          </Routes>
        </ApplicationProvider>
      </JobProvider>
    </UserProvider>
    </>
  )
}

export default App
