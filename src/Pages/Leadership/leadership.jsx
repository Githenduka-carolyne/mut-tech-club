import Bannerpart from "../../component/Header/Banner/Bannerpart/";
import Leaderships from "./Leaderships";
import React from "react";
const leadership = () =>{
      return (
        <React.Fragment>
          <Bannerpart
            maintitle="Our Leadership Team"
            description="Dedicated team behind Murang'a University Tech Club (MUTC)."
          /> 

          <section className="leader-section">
            <Leaderships/>
          </section>
        </React.Fragment> 
        
        
        
      );
}
export default leadership;