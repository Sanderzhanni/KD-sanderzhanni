import React from "react";
import {podcasts} from "../mocks/podcasts";
import {Link} from "react-router-dom";

const Podcast = (): React.ReactElement =>(
  <>
    <div  className={"podcast"}>
      <h3>Kuula LHV Podcasti</h3>
      {podcasts.map((podcast: string, i) =>
        <div key={i}>
          {podcast}
        </div>
      )}
      <Link to={"TODO"}>Kuula kõiki</Link>
    </div>
  </>
);

export default Podcast;