import { Navigate } from "react-router-dom";

function ProtectedRoutes({ childer, user }) {
  if (user) {
    return childer;
  } else {
    return <Navigate to={"/register"} />;
  }
}

export default ProtectedRoutes;
