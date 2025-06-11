import React, { useEffect, useState } from 'react';
import useJob from '../../context-api/job/useJob';

function MyJobMain() {
  const { myJobs, fetchMyJobs, updateJob, deleteJob, loading, error } = useJob();
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', requirements: '', location: '', salary: '', contract: '' });
  const [statusLoading, setStatusLoading] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchMyJobs();
    // eslint-disable-next-line
  }, []);

  const handleEditClick = (job) => {
    setEditId(job._id);
    setEditForm({
      title: job.title,
      description: job.description,
      requirements: job.requirements.join(', '),
      location: job.location || '',
      salary: job.salary || '',
      contract: job.contract || '',
      experience: job.experience || '',
    });
    setSuccess('');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateJob(editId, {
      ...editForm,
      requirements: editForm.requirements.split(',').map((r) => r.trim()).filter(Boolean),
    });
    if (updated) {
      setSuccess('Job updated successfully!');
      setEditId(null);
      fetchMyJobs();
    }
  };

  const handleDelete = async (id) => {
    setDeleteLoading(id);
    const ok = window.confirm('Are you sure you want to delete this job?');
    if (!ok) {
      setDeleteLoading(null);
      return;
    }
    const res = await deleteJob(id);
    if (res) {
      setSuccess('Job deleted successfully!');
      fetchMyJobs();
    }
    setDeleteLoading(null);
  };

  const handleStatusChange = async (job, status) => {
    setStatusLoading(job._id);
    const updated = await updateJob(job._id, { status });
    if (updated) {
      setSuccess(`Job marked as ${status}`);
      fetchMyJobs();
    }
    setStatusLoading(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white shadow rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Posted Jobs</h2>
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : myJobs && myJobs.length > 0 ? (
        <div className="space-y-8">
          {myJobs.map((job) => (
            <div key={job._id} className="border rounded p-5 relative bg-gray-50">
              {editId === job._id ? (
                <form onSubmit={handleEditSubmit} className="space-y-3">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Title</label>
                    <input type="text" name="title" value={editForm.title} onChange={handleEditChange} required className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Description</label>
                    <textarea name="description" value={editForm.description} onChange={handleEditChange} required rows={3} className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Requirements (comma separated)</label>
                    <input type="text" name="requirements" value={editForm.requirements} onChange={handleEditChange} className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Location</label>
                    <input type="text" name="location" value={editForm.location} onChange={handleEditChange} className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Salary</label>
                    <input type="text" name="salary" value={editForm.salary} onChange={handleEditChange} className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Contract Type</label>
                    <select name="contract" id="contract" value={editForm.contract} onChange={handleEditChange} className="w-full border rounded px-3 py-2">
                        <option value="">Select Contract Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Job Experience Required</label>
                    <select name="experience" id="experience" value={editForm.experience} onChange={handleEditChange} className="w-full border rounded px-3 py-2">
                        <option value="">Select Job Experience</option>
                        <option value="Full Time">Less than a year</option>
                        <option value="1 year experence">1 year Experence</option>
                        <option value="2 year experence">2 year Experence</option>
                        <option value="3 year experence">3 year Experence</option>
                        <option value="4 year experence">4 year Experence</option>
                        <option value="over 5 year experence">Over 5 year Experence</option>
                    </select>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
                    <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setEditId(null)}>Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <div className="text-gray-700 text-sm mb-1">{job.location} {job.salary && <span className="ml-2">| {job.salary}</span>}</div>
                      <div className="text-gray-600 text-sm mb-1">Status: <span className={job.status === 'open' ? 'text-green-600' : 'text-red-600'}>{job.status}</span></div>
                      <div className="text-gray-600 text-sm mb-1">Contract Type: <span className={job.contract === 'Full Time' ? 'text-green-600' : 'text-blue-600'}>{job.contract}</span></div>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0">
                      <button onClick={() => handleEditClick(job)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                      <button onClick={() => handleDelete(job._id)} disabled={deleteLoading === job._id} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-60">{deleteLoading === job._id ? 'Deleting...' : 'Delete'}</button>
                      <select
                        value={job.status}
                        onChange={(e) => handleStatusChange(job, e.target.value)}
                        disabled={statusLoading === job._id}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2 text-gray-800 text-sm">
                    <strong>Description:</strong> {job.description}
                  </div>
                  <div className="mt-1 text-gray-700 text-sm">
                    <strong>Requirements:</strong> {job.requirements && job.requirements.length > 0 ? job.requirements.join(', ') : 'None'}
                  </div>
                  <div className="mt-1 text-gray-500 text-xs">Posted: {new Date(job.createdAt).toLocaleString()}</div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600">You have not posted any jobs yet.</div>
      )}
    </div>
  );
}

export default MyJobMain;