import { Navigate } from "react-router-dom";
import useUser from "../../assets/context-api/user/useUser";

const PrivateRoute = ({ children }) => {
  const { user, loading,  token } = useUser();

  if (loading) return null;

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
