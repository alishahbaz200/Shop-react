import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

const Directory = () => {
  const [section, setSection] = useState([
    {
      title: "hats",
      imageUrl: "https://i.pinimg.com/236x/51/35/3f/51353f9fb4ca03a1e4791cd685c202c7.jpg",
      size:"large",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl: "https://i.pinimg.com/236x/51/35/3f/51353f9fb4ca03a1e4791cd685c202c7.jpg",
      size:"large",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.pinimg.com/236x/51/35/3f/51353f9fb4ca03a1e4791cd685c202c7.jpg",
      size:"large",
      id: 3,
    },
    {
      title: "womans",
      imageUrl: "https://i.pinimg.com/236x/51/35/3f/51353f9fb4ca03a1e4791cd685c202c7.jpg",
      size:"large",
      id: 4,
    },
    {
      title: "mans",
      imageUrl: "https://i.pinimg.com/236x/51/35/3f/51353f9fb4ca03a1e4791cd685c202c7.jpg",
      size:"large",
      id: 5,
    },
  ]);
  return (
    <div className="directory-menu">
      {section.map(({ title, imageUrl, id , size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};
export default Directory;
