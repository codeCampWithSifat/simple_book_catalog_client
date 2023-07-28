/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

interface IProp {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProp) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
