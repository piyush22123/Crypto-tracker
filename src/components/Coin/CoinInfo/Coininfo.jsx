import React, { useState } from "react";
import "./styles.css";

const Coininfo = ({ heading, desc }) => {
  const shortDesc =
    desc.slice(0, 200) + "<span style='color:var(--grey)'> Read more...</span>";
  const longDesc =
    desc + "<span style='color:var(--grey)'> Read less...</span>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="Coin-wrapper">
      <h1 className="Coin-info-heading">{heading}</h1>
      {desc.length > 200 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="Coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default Coininfo;
