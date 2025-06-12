import user from '../../images/user.svg';
import upload from '../../images/upload.svg';
import find from '../../images/find.svg';
import check from '../../images/check.svg';

function HowItWorks() {
  return (
    <>
    <div className="bg-gray-50 pt-[40px] lg:pt-[100px] pr-[30px] pb-[30px] lg:pb-[100px] pl-[30px] flex flex-col gap-[50px] items-center justify-start shrink-0 relative">
        <div className="text-gray-900 text-center font-heading-01-font-family text-[40px] leading-[48px] font-[500] relative">
        How Fashion Pilot Works
        </div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center lg:justify-start items-start lg:items-center mx-auto gap-3 relative">
            <div className="rounded-xl w-[100%] p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md">
                <div className="bg-gray-scale-white rounded-[80px] p-5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                    className="shrink-0 w-8 h-8 relative overflow-visible"
                    src={user}
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
                    <div className="text-gray-900 text-center font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative w-full">
                    Create account
                    </div>
                    <div className="text-gray-500 text-center font-body-small-400-font-family text-[14px] leading-b[20px] font-[400] relative w-full">
                    Sign up quickly to access thousands of job opportunities tailored to your skills and interests.
                    </div>
                </div>
            </div>

            <div className="rounded-xl w-full p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md">
                <div className="bg-[#0a65cc] rounded-[80px] p-5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                    className="shrink-0 w-8 h-8 relative overflow-visible"
                    src={upload}
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
                    <div className="text-gray-900 text-center font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative w-full">
                    Upload CV/Resume
                    </div>
                    <div className="text-gray-500 text-center font-body-small-400-font-family text-[14px] leading-b[20px] font-[400] relative w-full">
                    Easily upload your CV or resume to showcase your experience and stand out to top employers.
                    </div>
                </div>
            </div>

            <div className="rounded-xl w-full p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md">
                <div className="bg-gray-scale-white rounded-[80px] p-5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                    className="shrink-0 w-8 h-8 relative overflow-visible"
                    src={find}
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
                    <div className="text-gray-900 text-center font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative w-full">
                    Find Suitable Job
                    </div>
                    <div className="text-gray-500 text-center font-body-small-400-font-family text-[14px] leading-b[20px] font-[400] relative w-full">
                    Browse and filter jobs that match your preferences, qualifications, and career goals.
                    </div>
                </div>
            </div>

            <div className="rounded-xl w-full p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md">
                <div className="bg-gray-scale-white rounded-[80px] p-5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                    className="shrink-0 w-8 h-8 relative overflow-visible"
                    src={check}
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
                    <div className="text-gray-900 text-center font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative w-full">
                    Apply Job
                    </div>
                    <div className="text-gray-500 text-center font-body-small-400-font-family text-[14px] leading-b[20px] font-[400] relative w-full">
                    Submit your application directly to employers and track your progress seamlessly.
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default HowItWorks