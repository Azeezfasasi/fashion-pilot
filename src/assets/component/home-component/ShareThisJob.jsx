import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import link from '../../images/link.svg'
import facebookshare from '../../images/facebookshare.svg'
import twittershare from '../../images/twittershare.svg'
import message from '../../images/message.svg'
import whatsapp from '../../images/whatsapp.svg'

function ShareThisJob() {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const jobUrl = typeof window !== 'undefined'
    ? window.location.origin + location.pathname
    : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(jobUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Failed to copy link');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(jobUrl)}&text=Check out this job!`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent('Check out this job: ' + jobUrl)}`;
  const mailShare = `mailto:?subject=Check out this job&body=${encodeURIComponent(jobUrl)}`;


  return (
    <>
    <div className="w-full max-w-2xl px-4 sm:px-8 flex flex-col gap-3 items-start justify-start">
      <div className="text-gray-900 font-semibold text-lg sm:text-xl mb-1">Share this job:</div>
      <div className="flex flex-wrap gap-2 items-center">
        <button
          className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded flex flex-row gap-2 items-center px-4 py-2 transition-colors"
          aria-label="Copy Link"
          onClick={handleCopyLink}
        >
          <img className="w-6 h-6" src={link} alt="Copy Link" />
          <span className="text-[#0a65cc] font-medium text-base">
            {copied ? 'Copied!' : 'Copy Link'}
          </span>
        </button>
        <a
          href={whatsappShare}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors"
          aria-label="Share on WhatsApp"
        >
          <img className="w-5 h-5" src={whatsapp} alt="WhatsApp" />
        </a>
        <a
          href={facebookShare}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors"
          aria-label="Share on Facebook"
        >
          <img className="w-5 h-5" src={facebookshare} alt="Facebook" />
        </a>
        <a
          href={twitterShare}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors"
          aria-label="Share on Twitter"
        >
          <img className="w-5 h-5" src={twittershare} alt="Twitter" />
        </a>
        <a
          href={mailShare}
          className="bg-[#e7f0fa] hover:bg-[#d0e3fa] rounded p-2 flex items-center transition-colors"
          aria-label="Share via Message"
        >
          <img className="w-5 h-5" src={message} alt="Message" />
        </a>
      </div>
    </div>
    </>
  );
}

export default ShareThisJob