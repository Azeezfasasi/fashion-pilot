import { useContext } from "react";
import { JobContext } from "./JobContext";

const useJob = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJob must be used within a JobProvider");
  }

  return context;
};

export default useJob;
