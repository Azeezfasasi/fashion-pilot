import DashboardHeader from "../assets/component/general-component/DashboardHeader"
import { useState } from "react";
import useJob from "../assets/context-api/job/useJob";

function PostJob() {
  const { createJob, loading, error } = useJob();
  const [form, setForm] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
    contract: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    // requirements: split by comma, trim
    const jobData = {
      ...form,
      requirements: form.requirements
        .split(",")
        .map((r) => r.trim())
        .filter((r) => r),
    };
    const res = await createJob(jobData);
    if (res) {
      setSuccess("Job posted successfully!");
      setForm({ title: "", description: "", requirements: "", location: "", salary: "" });
    }
  };

  return (
    <>
      <DashboardHeader />
      <div className="max-w-2xl mx-auto mt-8 bg-white shadow rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Job Title<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Senior Fashion Designer"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description<span className="text-red-500">*</span></label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Describe the job role, responsibilities, etc."
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Requirements <span className="text-xs text-gray-500">(comma separated)</span></label>
            <input
              type="text"
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 3+ years experience, Adobe Suite, etc."
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Lagos, Remote, Hybrid"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Salary</label>
            <input
              type="text"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. ₦200,000 - ₦300,000/month"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Salary</label>
            <select name="contract" id="contract" value={form.contract} onChange={handleChange} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Contract Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </>
  );
}

export default PostJob;