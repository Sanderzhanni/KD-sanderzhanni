import React from 'react';
import Content from "./components/Content";
import Podcast from "./components/Podcast";

const Homepage = (): React.ReactElement => (
  <>
    <div className="content">
      <Content/>
      <Podcast/>
    </div>
  </>
);

export default Homepage;
