import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/feature/user/userSlice";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div className="max-w-[1340px] mx-auto">
      <MainLayout />
    </div>
  );
}

export default App;
