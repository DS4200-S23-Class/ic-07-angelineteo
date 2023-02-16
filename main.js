// JS for ic-07

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS ={left:50, right:50, top:50, bottom:50}

// bind data
const data1 = [55000, 48000, 27000, 66000, 90000];

// add frame
const FRAME =
// add points based on data
d3.selectAll("points") // empty selection . just required by d3
		.data(data1) // creates association so that every added point is linked to the data
		.enter() // loops through all the data you passed in
		.append("circle")
			.attr("cx", (d) => {return d;})
			.attr("cy", 0 + MARGINS.top)
			.attr("r", 20)
			.attr("class", "point");