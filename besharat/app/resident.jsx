"use client";


import Providers from '@/providers';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

const Resident = ({ children }) => {
  useEffect(() => {
    // Clear local storage
    // localStorage.clear();
  }, []);

  return (
    <>
      <ToastContainer />
      <Providers>{children}</Providers>
    </>
  );
};

export default Resident;