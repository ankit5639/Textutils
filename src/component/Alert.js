import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase(); //The charAt() method returns the character at a specified index (position) in a string.
    return lower.charAt(0).toUpperCase() + lower.slice(1); //The slice() method extracts a part of a string.
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
