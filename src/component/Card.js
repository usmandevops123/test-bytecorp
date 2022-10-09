import React from "react";
function get_my_coords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

function Card(props) {
  let new_coords = get_my_coords(props.theta, props.radius);
  console.log("props", props, new_coords);
  return (
    <div
      style={{
        ...styles.card,
        left: `${props.center.x + new_coords.x}px`,
        top: `${props.center.y - new_coords.y}px`,
      }}
    >
      <img src={props.data.url} width={"100%"} />
      <img src={props.data.url1} width={"100%"} />
    </div>
  );
}
const styles = {
  card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "100px",
    width: "100px",
    backgroundColor: "blue",
    borderRadius: "50%",
  },
};
export default Card;
