import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Header , Footer} from "./components"
import { Outlet } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Fullscreen } from "@mui/icons-material";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); //merger when we use redux from react
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header/>
        {/* <Outlet/> */}
        <Footer/>
      </div>
    </div>
  ) : ( <Stack spacing={1}>
  {/* For variant="text", adjust the height via font-size */}
  <Skeleton variant="text" width={Fullscreen} sx={{ fontSize: '1rem' }} />

  {/* For other variants, adjust the size with `width` and `height` */}
  {/* <Skeleton variant="circular" width={40} height={40} /> */}
  <Skeleton variant="rectangular" width={Fullscreen} height={90} />
  <Skeleton variant="rounded" width={Fullscreen} height={90} />
</Stack>)

}

export default App;
