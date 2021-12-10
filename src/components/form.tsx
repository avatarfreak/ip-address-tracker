import React from "react";
import { useRouter } from "next/router";

export const Form = () => {
  const [ip, setIp] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const router = useRouter();
  // Form submit action
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    const isValid = pattern.test(ip);

    if (!isValid) {
      setError("Invalid IP format");
      return;
    }
    router.push(`/${ip}`);
    setError("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative flex justify-center mb-5 max-w-[35rem] w-full m-auto "
      >
        <label className="sr-only">Ip address</label>
        <input
          type="text"
          className="rounded-l-2xl text-fs-600 font-medium
          text-clr-100 outline-none focus:ring w-full text-center"
          placeholder="Search for any IP address"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-gray-900 p-6 rounded-r-2xl md:hover:bg-clr-100"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="14"
          >
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
          <span className="sr-only">submit</span>
        </button>
      </form>
      <span className="block w-full text-lg text-red-300 tracking-widest -mt-5 text-center font-bold">
        {error}
      </span>
    </>
  );
};
