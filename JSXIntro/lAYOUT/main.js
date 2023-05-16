class APP extends React.Component {
	render() {
		return (
			<div>
                <Hello />
                <List />
            </div>
		);
	}
}
ReactDOM.render(<APP />, document.getElementById('root'));