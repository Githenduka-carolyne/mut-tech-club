import Bannerpart from "../../component/Header/Banner/Bannerpart/";
import React from "react";
import Eventss from "./Eventss";
const events = () => {
  return (
    <React.Fragment>
      <Bannerpart
        maintitle="Available Events"
        description="Murang'a University Tech Club (MUTC)."
      />

      <section>
        <Eventss/>
      </section>
    </React.Fragment>
  );
};
export default events;
