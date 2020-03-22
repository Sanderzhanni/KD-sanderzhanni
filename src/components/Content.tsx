import React from "react";
import {Link} from "react-router-dom";
import {stories} from "../mocks/stories";

const Content = (): React.ReactElement =>(
  <>
    {stories.map((story, i) =>
      <div key={i} className={"story"}>
        <h3>{story.title}</h3>
        <p>
          {story.text}
        </p>
        <Link to={"TODO"}>Loe lisaks</Link>
      </div>
    )}
  </>
);

export default Content;