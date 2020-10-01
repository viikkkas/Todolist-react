import React, { useState } from "react";

const ListSingular = ({ data, onDel }) => {
  const handleDelete = () => {
    onDel(data);
  };
  const [list_class, setListClass] = useState("list-data");
  function handleStrike() {
    if (list_class === "list-data strike") {
      handleDelete();
    } else {
      setListClass("list-data strike");
    }
  }

  return (
    <div className={list_class} onClick={handleStrike}>
      {data}
    </div>
  );
};

export default ListSingular;
