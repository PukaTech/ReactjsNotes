function getMood(){
    const moods = ['angry', 'happy','sad',]
    return moods[Math.floor(Math.random() * moods.length)]  //return a random mood from the array 
}

//use the {} when you want to embed javascript code into JSX below

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {getMood()}</h1>
         <h1>My number is: {2 *65}</h1>
        <h1>this is my image</h1>
        <img src="https://plus.unsplash.com/premium_photo-1671485196355-32005a27fd02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </div>

    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
