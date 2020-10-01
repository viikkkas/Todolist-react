// import PropTypes from "prop-types";
import React from "react";
import ListSingular from "./listSingular";
const List = ({ list, onDel }) => {
  return (
    <div className="list">
      {list.map((data, idx) => (
        <ListSingular data={data} onDel={onDel} key={idx} />
      ))}
    </div>
  );
};

List.defaultProps = {
  list: ["hello", "world"],
};

export default List;
