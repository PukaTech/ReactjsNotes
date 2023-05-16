/*
Class Components:
Class components are created by defining a class that extends the React.Component class. 
These components are also known as stateful components because they have the ability to 
manage and update their own state using the setState method. Class components can also implement
 lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount.
  Here's an example of a class component:

*/
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h3>My name is </h3>
				<ul>
  					<li>Coffee</li>
					<li>Tea</li>
					<li>Milk</li>
				</ul>
			</div>
		);
	}
}



/*
Function Components:
Function components are created by defining a JavaScript function that returns JSX code.
These components are also known as stateless components because they don't manage their own state.
Function components accept props as an argument and can utilize them within the function body. 
They are simpler and easier to read compared to class components. 

*/
//function component is not efficient as class component 
//this is used for simpler component
// function Hello() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h3>My name is </h3>
// 				<ul>
//   					<li>Coffee</li>
// 					<li>Tea</li>
// 					<li>Milk</li>
// 				</ul>
// 			</div>
// 		);
// }

ReactDOM.render(<Hello />, document.getElementById('root'));
