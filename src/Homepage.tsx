import React from 'react';
import Content from "./components/Content";
import Podcast from "./components/Podcast";

const Homepage = (): React.ReactElement => (
  <>
    <div className="content">
      <div className="content-elemements">
        <Content/>
        <Podcast/>
      </div>
    </div>
  </>
);

export default Homepage;
