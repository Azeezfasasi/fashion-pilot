import heroright from '../../images/heroright.svg'
import ButtomHero from './ButtomHero'
import HeroSearch from './HeroSearch'

function Hero() {
  return (
    <div className="border bg-amber-50">
      <div className="flex flex-col lg:flex-row justify-between items-start bg-[rgba(241,242,244,0.60)] pt-16 lg:pt-[100px] pr-2 lg:pr-[50px] pb-5 lg:pb-[20px] pl-2 lg:pl-[50px] shrink-0 min-h-[494px] relative">
        {/* Hero Left */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start justify-start relative">
          <div className="flex flex-col gap-6 items-start justify-start relative w-full">
            <div className="text-[#18191c] text-left font-display-01-font-family text-[2rem] sm:text-[2.3rem] md:text-[2.5rem] lg:text-[56px] leading-[2.5rem] sm:leading-[2.8rem] md:leading-[3rem] lg:leading-[64px] font-[500] relative">
              Find a job that suits your interest &amp; skills.
            </div>
            <div className="text-gray-600 text-left font-[400] text-base sm:text-lg md:text-[18px] leading-[20px] md:leading-[28px] font-[Inter-Regular, sans-serif] relative w-full">
              Discover thousands of opportunities and connect with top employers. Start your journey to a rewarding career today.
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative w-full">
            <div className="bg-white rounded-lg border border-gray-100 p-2 sm:p-3 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-start shadow-2xl relative z-5 w-full">
              <HeroSearch />
            </div>
            <div className="flex flex-row gap-1 items-start justify-start relative text-sm sm:text-base">
              <div className="text-[#9199a3] text-center font-body-small-400-font-family leading-[20px] font-[400] relative">
                Suggestion:
              </div>
              <div className="text-[#474c54] text-left font-body-small-400-font-family leading-[20px] font-[400] relative">
                Fashion Designer, Pattern Maker, Textile Specialist, Fashion Marketing etc.
              </div>
            </div>
          </div>
        </div>
        {/* Hero Right */}
        <div className="hidden lg:flex w-1/2 h-full flex-row justify-center relative rounded-b-md">
          <img className="w-[80%] h-fit object-cover" src={heroright} alt="hero" />
        </div>
      </div>
      <ButtomHero />
    </div>
  )
}

export default Hero