import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

const tomato = "Potato";

const images = [
  "https://scontent-lga3-1.cdninstagram.com/vp/f69db1aa05157d5ea3b9b18f22d12a8e/5C6F647A/t51.2885-15/sh0.08/e35/c190.0.700.700/s640x640/42651871_1551997461620839_6491807432560345088_n.jpg",
  "https://scontent-lga3-1.cdninstagram.com/vp/8d610ee34ca72fb181ff2f95fc29d409/5C738767/t51.2885-15/sh0.08/e35/c178.0.724.724a/s640x640/44619037_292623318128549_1428949539368206336_n.jpg",
  "https://scontent-lga3-1.cdninstagram.com/vp/a7576665b1662365ad9c397457b46bd6/5C729517/t51.2885-15/sh0.08/e35/c182.0.715.715/s640x640/44412292_2177439929187291_3753849971309281280_n.jpg"
];

console.log(images);

const MyImg = props => {
  console.log("In MyImage and the tomato prop is", props.tomato);
  console.log("in Img");
  return <img src={props.imageUrl} />;
};

const MyImage = props => {
  console.log("In MyImage");
  console.log("My tomatos are, ", props.tomato);
  return (
    <>
      <MyImg tomato={props.tomato} imageUrl={props.imageUrl} />
    </>
  );
};

class App extends React.Component {
  state = {
    images
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     images
  //   };
  // }

  constructor(props) {
    super(props);
    // setInterval(() => {
    //   this.setState({
    //     images: [
    //       ...this.state.images,
    //       "https://scontent-lga3-1.cdninstagram.com/vp/4c7950673e0e3cc4a972755cf62b8c84/5C8F1CB7/t51.2885-15/sh0.08/e35/c0.107.860.860/s640x640/40536587_235361330478129_8293550980646043648_n.jpg"
    //     ]
    //   });
    // }, 100);
  }

  render() {
    return (
      <>
        <h1>Ciao</h1>
        {this.state.images.map((cv, i) => (
          <MyImage
            key={cv}
            collectionIndex={i}
            favCoffee="Espresso"
            imageUrl={cv}
            tomato={this.props.tomato}
          />
        ))}
      </>
    );
  }
}

// const App = props => {
//   console.log("In App, the tomato prop is ", props.tomato);
//   console.log("In App");
//   return (
//     <>
//       <h1>Ciao</h1>
//       {images.map((cv, i) => (
//         <MyImage
//           key={cv}
//           collectionIndex={i}
//           favCoffee="Espresso"
//           imageUrl={cv}
//           tomato={props.tomato}
//         />
//       ))}
//     </>
//   );
// };

export default App;
