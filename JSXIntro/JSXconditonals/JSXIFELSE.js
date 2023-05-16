function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = <div>
        <h2>CONGRATS YOU WIN!</h2>
        <img src="https://media.tenor.com/tSDmbxafFXsAAAAC/yes-sweet.gif" />
      </div>
    } else {
      msg = <h2>YOU LOST !</h2>;
    }
    return (
      <div>
        <h1>Your number is {num}</h1>
        <p>{msg}</p>
      </div>
    );
  }
}
ReactDOM.render(<NumPicker />, document.getElementById("root"));
