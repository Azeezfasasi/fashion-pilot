import { Navigate } from "react-router-dom";
import useUser from "../../assets/context-api/user/useUser";


const EmployerRoute = ({ children }) => {
  const { user, token, loading, isEmployer } = useUser();

  if (loading) return null;

  if (!token || !user || !isEmployer) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default EmployerRoute;
