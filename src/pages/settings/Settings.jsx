import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Switch from 'react-switch';
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
  const [privacySwitch, setPrivacySwitch] = useState(true);
  const [preferencesSwitch, setPreferencesSwitch] = useState(true);
  const [deleteSwitch, setDeleteSwitch] = useState(true);
  const [notificationsSwitch, setNotificationsSwitch] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768); // Adjust the width as needed
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row w-fit md:w-full" style={{ marginTop: '285px' }}>
        {/* Sidebar Section */}
        {showSidebar && <Sidebar />}

        {/* Main Content */}
        <div className="flex-grow p-6">
          {/* Privacy Section */}
          <div className="mb-6">
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Privacy
              <Switch
                onChange={() => setPrivacySwitch(!privacySwitch)}
                checked={privacySwitch}
                onColor="#000"
                onHandleColor="#000"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
              />
            </h2>
            <p className="text-sm mb-4 font-semibold">
              Exercise your privacy rights and control how your data is used.
            </p>
            <p className="text-sm mb-4 font-semibold">
              Privacy setting: <span className="font-bold">garima@xyz.in</span>
            </p>
            <p className="text-sm mb-4 font-semibold">
              Select <span className="font-bold">Manage</span> to change your privacy settings and exercise your rights during our request form.
            </p>
          </div>

          {/* Preferences Section */}
          <div className="mb-6">
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Preferences
              <Switch
                onChange={() => setPreferencesSwitch(!preferencesSwitch)}
                checked={preferencesSwitch}
                onColor="#000"
                onHandleColor="#000"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
                
              />
            </h2>
            <p className="text-sm mb-4 font-semibold">
              Exercise your privacy rights and control how your data is used.
            </p>
            <p className="text-sm mb-4 font-semibold">
              Privacy setting: <span className="font-bold">garima@xyz.in</span>
            </p>
            <p className="text-sm mb-4 font-semibold">
              Select <span className="font-bold">Manage</span> to change your privacy settings and exercise your rights during our request form.
            </p>
          </div>

          {/* Delete Account Section */}
          <div className="mb-6">
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Delete Your Account
              <Switch
                onChange={() => setDeleteSwitch(!deleteSwitch)}
                checked={deleteSwitch}
                onColor="#000"
                onHandleColor="#000"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
              />
            </h2>
            <p className="text-sm mb-4 font-semibold">
              Exercise your privacy rights and control how your data is used.
            </p>
          </div>

          {/* Notifications Section */}
          <div>
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Notifications
              <Switch
                onChange={() => setNotificationsSwitch(!notificationsSwitch)}
                checked={notificationsSwitch}
                onColor="#000"
                onHandleColor="#000"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
              />
            </h2>
            <p className="text-sm mb-4 font-semibold">
              Exercise your privacy rights and control how your data is used.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Settings;
