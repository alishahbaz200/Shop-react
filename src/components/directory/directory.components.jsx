import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

const Directory = () => {
  const [section, setSection] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      size: "large",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      size: "large",
      id: 2,
      linkUrl: "",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      size: "large",
      id: 3,
      linkUrl: "",
    },
    {
      title: "womans",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "mans",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ]);
  return (
    <div className="directory-menu">
      {section.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} /> 
      ))}
    </div>
  );
};
export default Directory;
