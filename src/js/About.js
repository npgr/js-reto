import React from "react";

export default class About extends React.Component {

	/*constructor(props) {
		super(props)
		console.log('About')
	}*/
	 
  render() {
	var img = { maxWidth: "100%", height: "auto" }
	var center = { display:"flex", justifyContent:"center"}
	
	return (
		<div>
			<div style={center}>
				<img src="../images/highwindow2.jpg" style={img}/>
			</div>
		</div>
	)
  }
}

