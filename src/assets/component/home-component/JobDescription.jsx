import JobDescriptionRight from "./JobDescriptionRight"
import JobDescriptionText from "./JobDescriptionText"
import TopJobDescription from "./TopJobDescription"

function JobDescription() {
  return (
    <div className="flex flex-col gap-4 px-2 sm:px-5 py-2 w-full max-w-6xl mx-auto">
      <TopJobDescription />
      <div className="w-full bg-white rounded-lg border border-[#e7f0fa] pt-6 pb-6 px-0 flex flex-col lg:flex-row gap-8 lg:gap-6 items-start justify-between shadow-sm">
        <JobDescriptionText />
        <JobDescriptionRight />
      </div>
    </div>
  )
}

export default JobDescription