import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col items-center">
      <div className="w-full max-w-2xl p-4">{children}</div>
    </div>
  );
};

export default Layout;
