import React from 'react';
import {useRouter} from 'next/router';
import { IPInformation } from "@components/IPInformation";
import dynamic from 'next/dynamic';

export interface IPProps {
  ip:string;
  city:string;
  region:string;
  timezone_gmt:string;
  isp:string;
  country_code:string;
  success:boolean;
  latitude:number;
  longitude:number;
}

const IPAddress = () =>{
const [data, setData] = React.useState({} as IPProps);

// Router get ip address from path
const router = useRouter();
const query = router.query;

// Load Map
const MapViewer = React.useMemo(
    () =>   dynamic(() => import("@components/map"), {
    loading: () =><p className="text-center font-bold text-3xl text-indigo-500">Loading...</p>,
    ssr: false,
}),[data]);

// Fetch IP Information from API
React.useEffect(() => {
     const fetchData = async () => {
        const response = await fetch(`https://ipwhois.app/json/${query.ip}`);
        const data = await response.json();
          if(data.success){
           setData(data);
          }
      };
      fetchData();
}, [query.ip]);

return (
    <>
        <IPInformation
         success={data.success}
          ip={data.ip}
          city={data.city}
          region={data.region}
          timezone_gmt={data.timezone_gmt}
          isp={data.isp}
          country_code={data.country_code}
        />
      {
       data.success && <MapViewer location={{ lat:data.latitude, lng:data.longitude }} />
        }
    </>
    );
}

export default IPAddress;

