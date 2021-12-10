import { IPProps } from "../../pages/[ip]";

export const IPInformation: React.FC<Partial<IPProps>> = ({
  ip,
  region,
  city,
  country_code,
  timezone_gmt,
  isp,
  success,
}) => {
  return (
    <>
      {success && (
        <div
          className="text-center py-6 rounded-xl shadow-lg bg-white absolute top-44 left-0 right-0 mx-6  z-[9999]
        md:grid md:grid-cols-4 md:top-56   md:px-6
        md:divide-x-2 md:divide-gray-200 xl:max-w-[69.25rem] xl:m-auto
        "
        >
          <div className="space-y-2 mb-5">
            <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
              Ip Address
            </h2>
            <p className="text-fs-400  text-clr-100 tracking-600 font-medium">
              {ip}
            </p>
          </div>

          <div className="space-y-2 mb-5">
            <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
              Location
            </h2>
            <p className="text-fs-300 text-clr-100 tracking-t-400 font-medium">
              {`${region}, ${city} ${country_code}`}
            </p>
          </div>

          <div className="space-y-2 mb-5">
            <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
              TimeZone
            </h2>
            <p className="text-fs-200 text-clr-100 tracking-t-400 font-medium">
              {timezone_gmt}
            </p>
          </div>

          <div className="space-y-2 mb-5">
            <h2 className="text-fs-500 text-clr-110 tracking-t-500 font-bold uppercase">
              isp
            </h2>
            <p className="text-fs-100 text-clr-100 tracking-t-400 font-medium">
              {isp}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
