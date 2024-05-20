import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPost from '../components/DashPost';

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] =useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar */}
        <DashSidebar />
      </div>

      <div className="w-full">
        {/* {profile} */}
        {tab === "profile" && <DashProfile />}
        {/* {posts} */}
        {tab==="posts" && <DashPost/>}
      </div>
      
    </div>
  );
}

export default Dashboard