import React, { useState } from "react";

const Form = ({ onSub }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSub({ task });
    setTask("");
  };

  return (
    <form>
      <input
        type="text"
        className="form-control-lg"
        name="task"
        placeholder="Add a task..."
        value={task}
        onChange={handleTaskChange}
      />

      <button
        className="btn btn-primary btn-lg btn-margin"
        // type="submit"
        onClick={handleSubmit}
        //onClick={()=>onSub({task})}
      >
        +
      </button>
    </form>
  );
};

export default Form;
