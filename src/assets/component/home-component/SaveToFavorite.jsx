import { useContext, useState } from "react";
import bookmarkblue from '../../images/bookmarkblue.svg';
import { UserContext } from "../../context-api/user/UserContext";

function SaveToFavorite({ jobId, jobTitle }) {
  const { addFavorite } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const handleSave = async () => {
    try {
      await addFavorite(jobId);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000); // Hide modal after 2 seconds
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <>
      <button
        className="bg-[#e7f0fa] hover:bg-gray-200 rounded p-3 flex items-center justify-center transition-colors"
        aria-label="Save job"
        onClick={handleSave}
      >
        <img
          className="w-6 h-6"
          src={bookmarkblue}
          alt="bookmark"
        />
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-blue-100 rounded-lg shadow-lg p-6 min-w-[250px] flex flex-col items-center border border-solid border-gray-300">
            <div className="text-green-600 text-2xl mb-2">★</div>
            <div className="text-gray-800 font-semibold mb-1">Saved to Favorites!</div>
            <div className="text-gray-600 text-sm text-center"><span className="font-semibold">{jobTitle}</span> has been added to your favorites.</div>
          </div>
        </div>
      )}
    </>
  );
}

export default SaveToFavorite;