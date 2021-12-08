import dynamic, { DynamicOptions } from "next/dynamic";
import React from "react";

const Home = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("@components/map") as any, {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }),
    []
  );

  return (
    <main className="">
      <Map />
    </main>
  );
};

export default Home;
