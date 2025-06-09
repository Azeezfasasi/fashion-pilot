import link from '../../images/link.svg'
import facebookshare from '../../images/facebookshare.svg'
import twittershare from '../../images/twittershare.svg'
import message from '../../images/message.svg'
import whatsapp from '../../images/whatsapp.svg'

function ShareThisJob() {
  return (
    <div className="w-full max-w-2xl px-4 sm:px-8 flex flex-col gap-3 items-start justify-start">
      <div className="text-gray-900 font-semibold text-lg sm:text-xl mb-1">Share this job:</div>
      <div className="flex flex-wrap gap-2 items-center">
        <button className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded flex flex-row gap-2 items-center px-4 py-2 transition-colors" aria-label="Copy Link">
          <img className="w-6 h-6" src={link} alt="Copy Link" />
          <span className="text-[#0a65cc] font-medium text-base">Copy Link</span>
        </button>
        <button className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors" aria-label="Share on Facebook">
          <img className="w-5 h-5" src={facebookshare} alt="Facebook" />
        </button>
        <button className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors" aria-label="Share on Twitter">
          <img className="w-5 h-5" src={twittershare} alt="Twitter" />
        </button>
        <button className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors" aria-label="Share via Message">
          <img className="w-5 h-5" src={message} alt="Message" />
        </button>
        <button className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors" aria-label="Share on WhatsApp">
          <img className="w-5 h-5" src={whatsapp} alt="WhatsApp" />
        </button>
      </div>
    </div>
  );
}

export default ShareThisJob