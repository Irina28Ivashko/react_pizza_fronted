import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="118" cy="118" r="118" />
    <rect x="0" y="259" rx="10" ry="10" width="227" height="23" />
    <rect x="0" y="345" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="447" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="443" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
