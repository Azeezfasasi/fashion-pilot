import { Navigate } from "react-router-dom";
import useUser from "../../assets/context-api/user/useUser";


const AdminRoute = ({ children }) => {
  const { user, token, loading, isAdmin } = useUser();

  if (loading) return null;

  if (!token || !user || !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  // return children;
  return user ? children : <Navigate to="/login" />;
};

export default AdminRoute;
