//class component:
// class Hello extends React.Component {
// 	render() {
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
// 	}
// }

//function component:
//function component is not efficient as class component 
//this is used for simpler component
function Hello() {
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

ReactDOM.render(<Hello />, document.getElementById('root'));
