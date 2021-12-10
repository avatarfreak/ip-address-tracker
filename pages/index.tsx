import dynamic from "next/dynamic";
import React from "react";

const Home = () => {
  const [center] = React.useState({ lat: 0, lng: 0 });

  const MapViewer = React.useMemo(
    () =>
      dynamic(() => import("@components/map"), {
        loading: () => (
          <p className="text-center font-bold text-3xl text-indigo-500">
            Loading...
          </p>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <main>
      <MapViewer location={center} />
    </main>
  );
};

export default Home;
