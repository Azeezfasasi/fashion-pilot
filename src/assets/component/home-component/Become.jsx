import candidatereg from '../../images/candidatereg.svg';
import employerreg from '../../images/employerreg.svg'
import arrowright from '../../images/arrowright.svg'
import { Link } from 'react-router-dom';

function Become() {
  return (
    <div className="py-10 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center w-full bg-white">
      {/* Become a Candidate Section */}
      <div
        className="flex-1 rounded-xl shadow-md p-8 md:p-10 flex flex-col gap-6 items-start justify-start relative bg-cover bg-no-repeat bg-center min-w-[260px] max-w-xl w-full"
        style={{ backgroundImage: `url(${candidatereg})` }}
      >
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Become a Candidate
          </div>
          <div className="text-gray-600 text-base md:text-lg opacity-80 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.
          </div>
        </div>
        <Link to="/register" className="bg-white rounded-[3px] py-3 px-6 flex flex-row gap-3 items-center justify-center shadow hover:bg-primary-50 transition border border-primary-100">
          <span className="text-primary-500 font-semibold text-base md:text-lg">Register now</span>
          <img className="w-6 h-6" src={arrowright} alt="arrow" />
        </Link>
      </div>

      {/* Become an Employer Section */}
      <div
        className="flex-1 rounded-xl shadow-md p-8 md:p-10 flex flex-col gap-6 items-start justify-start relative bg-cover bg-no-repeat bg-center min-w-[260px] max-w-xl w-full"
        style={{ backgroundImage: `url(${employerreg})` }}
      >
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Become an Employer
          </div>
          <div className="text-white text-base md:text-lg opacity-80 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.
          </div>
        </div>
        <Link to="/register" className="bg-white rounded-[3px] py-3 px-6 flex flex-row gap-3 items-center justify-center shadow hover:bg-primary-50 transition border border-primary-100">
          <span className="text-primary-500 font-semibold text-base md:text-lg">Register now</span>
          <img className="w-6 h-6" src={arrowright} alt="arrow" />
        </Link>
      </div>
    </div>
  );
}

export default Become;