import user from '../../images/user.svg';
import upload from '../../images/upload.svg';
import find from '../../images/find.svg';
import check from '../../images/check.svg';

function HowItWorks() {
  return (
    <>
    <div className="bg-gray-50 pt-[100px] pr-[30px] pb-[100px] pl-[30px] flex flex-col gap-[50px] items-center justify-start shrink-0 relative">
        <div className="text-gray-900 text-center font-heading-01-font-family text-[40px] leading-[48px] font-[500] relative">
        How jobpilot work
        </div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center lg:justify-start items-start lg:items-center mx-auto gap-3 h-56 relative">
            <div className="rounded-xl p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md w-[264px]">
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
                    Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                    </div>
                </div>
            </div>

            <div className="rounded-xl p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md w-[264px]">
                <div className="bg-[#0a65cc] rounded-[80px] p-5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                    className="shrink-0 w-8 h-8 relative overflow-visible"
                    src={upload}
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
                    <div className="text-gray-900 text-center font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative w-full">
                    Create account
                    </div>
                    <div className="text-gray-500 text-center font-body-small-400-font-family text-[14px] leading-b[20px] font-[400] relative w-full">
                    Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                    </div>
                </div>
            </div>

            <div className="rounded-xl p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md w-[264px]">
                <div className="bg-gray-scale-white rounded-[80px] p-5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                    className="shrink-0 w-8 h-8 relative overflow-visible"
                    src={find}
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
                    <div className="text-gray-900 text-center font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative w-full">
                    Create account
                    </div>
                    <div className="text-gray-500 text-center font-body-small-400-font-family text-[14px] leading-b[20px] font-[400] relative w-full">
                    Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                    </div>
                </div>
            </div>

            <div className="rounded-xl p-6 flex flex-col gap-6 items-center justify-start relative border border-solid border-gray-200 shadow-md w-[264px]">
                <div className="bg-gray-scale-white rounded-[80px] p-5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                    className="shrink-0 w-8 h-8 relative overflow-visible"
                    src={check}
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
                    <div className="text-gray-900 text-center font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative w-full">
                    Create account
                    </div>
                    <div className="text-gray-500 text-center font-body-small-400-font-family text-[14px] leading-b[20px] font-[400] relative w-full">
                    Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default HowItWorks