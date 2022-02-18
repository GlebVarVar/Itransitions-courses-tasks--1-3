import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { auth, db } from "D:/Work_1/my-app/src/FirebaseConfig/config.js";
import { query, collection, where } from "firebase/firestore";


import NavbarDashboard from '../Components/NavbarDashboard';
import TableDashboard from "../Components/Table";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);


  

  
  return (
    <div>
      <NavbarDashboard/>
      <div className="dashboard__table">
        <TableDashboard/>
      </div>
     </div>
  );
}
export default Dashboard;