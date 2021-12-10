import { Form } from "@components/form";
import React from "react";

const Header = () => {
  return (
    <header className="bg-header text-center bg-cover bg-no-repeat min-h-[18.75rem] p-6">
      {/* ==== header ==== */}
      <h1 className="text-white text-fs-700 font-medium tracking-t-700 mb-6">
        IP Address Tracker
      </h1>

      {/* ==== form ==== */}
      <Form />
    </header>
  );
};

export { Header };
