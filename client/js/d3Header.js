$(document).ready(function(){
// set dimensions of force visualization
var width = window.innerWidth;
var height = 600;

//miliseconds for duration of animation. default 250.
var animationStep = 250;

//define basic force objects later
var force;
var nodes;
var mouse;
var title;

//keep physics/style figures here for easy modification
var gravity = 0.11;
var nodeCharge = -13;
var mouseCharge = -3000;
var numOfNodes = 180
var nameNodeStartX = 400;
var nameNodeStartY = 250;
var strokeWidth = 1.7

//define attributes for nodes - scaleCategory10 = 10 predefined colors from d3 API (include link)
var color = d3.scale.category10()

//create SVG container with d3 to hold elements
var svg = d3.select('.d3head').append('svg')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'd3svg')

//create force initialization function
var initForce = function(){

	//clear all elements from svg, in case this is a reset
	svg.selectAll('*').remove()

	//define nodes of 200 indexed items with random radius, color, x and y coordinates
	var nodesData = d3.range(numOfNodes)
		.map(function() { 
			return {
				radius: Math.random() * 17 + 5,
				x: Math.random() * width,
				y: Math.random() * height,
				charge: nodeCharge,
				name: false
			}; 
		})

	mouse = nodesData[0];
	mouse.radius = 0;
	mouse.fixed = true;
	mouse.charge = mouseCharge;

	//define force layout object
	force = d3.layout.force()
	
	//standard d3 tuple for width/height of force layout
		.size([width,height])
		.nodes(nodesData)
		.gravity(gravity)

	//set separate charge for nodes (0) and mouse (negative, as you like)
		.charge(function(node) {
			return node.charge;
		});


	//add nodes to svg object and set properties to those predefined in datum
	nodes = svg.selectAll('.node')
		.data(nodesData)
		.enter().append('circle')
		.attr('class', 'node')
		.attr('class', function(d) { return d.name ? 'name' : 'node'})
		.attr('r', function(d) { return d.radius; })
		.attr('cx', function(d,i) { return d.xTrue ? d.xTrue : d.x; })
		.attr('cy', function(d,i) { return d.yTrue ? d.yTrue : d.y; })
		.style("fill", function(d, i) { return d.fill? d.fill : color(i % 10) })
		.style("stroke-width", strokeWidth);

	// title = svg.append('image')
	// 	.attr('xlink:href','images/evancodes-white2.png')
	// 	.attr('x', width/2.7)
	// 	.attr('y', height/3)
	// 	.attr('height', '20%')
	// 	.attr('width', '20%')


	force.on('tick', tick)

//define mouse actions
	svg.on("mousemove", function() {
	  var p1 = d3.mouse(this);
	  mouse.px = p1[0];
	  mouse.py = p1[1];
	  force.resume();
	});

	force.start();

}


var tick = function(){
	//check Collisions and repoisiton nodes as necessary to avoid overlap


	//update positions of nodes every tick with smooth transitions - default duration 250ms
	nodes.transition().ease('linear').duration(animationStep)
	    .attr('cx', function(d) { 
	    	if (d.name) {
	    		return d.xTrue; 
	    	} else {
		    	//constrain x to visualization board
		    	if (d.x > width) { return width-d.radius; }
		    	if (d.x < 0) { return d.radius; }
		    	//otherwise move x based on force
		    	return d.x; 
		    }
	    })
	    .attr('cy', function(d) { 
	    	if (d.name) {
	    		return d.yTrue;
	    	} else { 
		    	//constrain y to visualization board
		    	if (d.y > height) { return height-d.radius; }
		    	if (d.y < 0) { return d.radius; }
		    	//otherwise move y based on force
		    	return d.y; 
		    }
	    })
}


//begin force animation
initForce();
})