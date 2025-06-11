import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useJob from '../../context-api/job/useJob';

function JobDescriptionText() {
  const { id } = useParams();
  const { job, fetchJob, loading } = useJob();

  useEffect(() => {
    if (id) fetchJob(id);
    // eslint-disable-next-line
  }, [id]);

  if (loading || !job) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <span>Loading job description...</span>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[50%] mx-auto flex flex-col gap-6 items-start justify-start bg-white p-2 sm:p-2 mt-4 border border-solid border-gray-200">
      <h2 className="text-gray-900 text-xl sm:text-2xl font-semibold mb-0">
        Job Description
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        {job.description}
      </p>
      {/* Requirements */}
      <div className="w-full">
        <h3 className="text-gray-900 text-lg font-semibold mb-1">Requirements</h3>
        <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1">
          {job.requirements && job.requirements.length > 0 ? (
            job.requirements.map((req, idx) => <li key={idx}>{req}</li>)
          ) : (
            <li>No specific requirements listed.</li>
          )}
        </ul>
      </div>
      {/* Optionally, add more job fields here, e.g. salary, contract, benefits, etc. */}
    </div>
  );
}

export default JobDescriptionText;