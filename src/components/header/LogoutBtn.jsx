import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <Button onClick={logoutHandler} variant="outlined" color="error" className=" inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Log   Out
    </Button>
  );
}

export default LogoutBtn;
