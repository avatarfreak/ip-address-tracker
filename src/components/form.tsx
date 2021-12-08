import React from "react";

export const Form = () => {
  const [ip, setIp] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  // Form submit action
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    const isValid = pattern.test(ip);

    isValid ? setError("") : setError("Invalid IP format");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center mb-5">
        <label className="sr-only">Ip address</label>
        <input
          type="text"
          className="rounded-l-2xl pl-6 text-fs-600 font-medium
          text-clr-100 outline-none focus:ring w-full"
          placeholder="192.212.174.101"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          autoComplete="off"
        />
        <button className="bg-gray-900 p-6 rounded-r-2xl">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="14"
          >
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
          <span className="sr-only">submit</span>
        </button>
      </form>

      <span className="block text-lg text-red-300 tracking-widest -mt-5 text-left font-bold">
        {error}
      </span>
    </>
  );
};
