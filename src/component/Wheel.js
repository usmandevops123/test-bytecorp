import React, { Component } from "react";
import Card from "./Card";
import image1 from "../asset/image1.png";
import image2 from "../asset/image2.png";
import image3 from "../asset/image3.png";
import image4 from "../asset/image4.png";
import image5 from "../asset/image5.png";
let Menu = [
  {
    url: image1,
  },
  {
    url1: image2,
  },
  {
    url: image3,
  },
  {
    url: image4,
  },
  {
    url: image5,
  },
  {
    url: image5,
  },
];

export class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 250,
      cards: [],
    };
    this.tempTheta = 0.0;
  }

  componentDidMount() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };
    let new_cards = [];
    Menu.forEach((item, i) => {
      new_cards.push(
        <Card
          data={item}
          theta={(Math.PI / 3.0) * i}
          radius={this.state.radius}
          center={center_of_wheel}
          key={`card ${i}`}
        />
      );
    });

    this.setState({ cards: new_cards });
  }
  plus = () => {
    this.tempTheta += 30;
    console.log(this.tempTheta);
    this.wheel.style.transform = `translate(-50%,-50%) rotate(${this.tempTheta}deg)`;
  };
  minus = () => {
    this.tempTheta -= 30;
    console.log(this.tempTheta);
    this.wheel.style.transform = `translate(-50%,-50%) rotate(${this.tempTheta}deg)`;
  };
  render() {
    return (
      <>
        <div ref={(ref_id) => (this.wheel = ref_id)} style={styles.wheel}>
          {this.state.cards}
        </div>
        <div style={{ alignSelf: "start", marginRight: "650px" }}>
          <button onClick={() => this.minus()}>-</button>
          <button onClick={() => this.plus()}>+</button>
        </div>
      </>
    );
  }
}

const styles = {
  wheel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "150px",
    width: "150px",
    backgroundColor: "red",
    borderRadius: "50%",
  },
};

export default Wheel;
