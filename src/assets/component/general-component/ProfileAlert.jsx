import React from 'react'

function ProfileAlert() {
  return (
    <>
    <div className="bg-red-500 text-white rounded-md p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="font-semibold">Your profile editing is not completed.</p>
            <p className="text-sm">Complete your profile editing & build your custom Resume</p>
          </div>
        </div>
        <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-red-100 transition flex items-center gap-1">
          Edit Profile <span>→</span>
        </button>
      </div>
    </>
  )
}

export default ProfileAlert