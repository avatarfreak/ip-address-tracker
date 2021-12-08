export const IPInformation = () => {
  return (
    <div className="flex flex-col items-center py-6 rounded-xl shadow-lg bg-white absolute top-44 left-0 right-0 mx-6  z-[9999] ">
      <div className="space-y-2 mb-5">
        <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
          Ip Address
        </h2>
        <p className="text-fs-400 text-clr-100 tracking-600 font-medium">
          192.212.174.101
        </p>
      </div>

      <div className="space-y-2 mb-5">
        <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
          Location
        </h2>
        <p className="text-fs-300 text-clr-100 tracking-t-400 font-medium">
          Brooklyn, NY 10001
        </p>
      </div>

      <div className="space-y-2 mb-5">
        <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
          TimeZone
        </h2>
        <p className="text-fs-200 text-clr-100 tracking-t-400 font-medium">
          utc - 05:00
        </p>
      </div>

      <div className="space-y-2 mb-5">
        <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
          isp
        </h2>
        <p className="text-fs-100 text-clr-100 tracking-t-400 font-medium">
          SpaceX Starlink
        </p>
      </div>
    </div>
  );
};
