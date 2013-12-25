angular.module('newSpeakApp')
.factory('collocationChart', function() {

	var service = {};
	service.render = function(data, scope, element, attrs, svg) {
		
		var update = function() {
			var nodes = flatten(root),
			links = d3.layout.tree().links(nodes);
				
		  // Restart the force layout.
		  force
		  .nodes(nodes)
		  .links(links)
		  .start();
		  
		  // Update links.
		  link = link.data(links, function(d) { return d.target.id; });
		  
		  link.exit().remove();
		  
		  link.enter().insert("line", ".node")
		  .attr("class", "link");
		  
		  // Update nodes.
		  node = node.data(nodes, function(d) { return d.id; });
		  
		  node.exit().remove();
		  
		  var nodeEnter = node.enter().append("g")
		  .attr("class", "node")
		  .on("click", click)
		  .call(force.drag);
		  
		  nodeEnter.append("circle")
		  .attr("r", function(d) { return d.size * 2 + 5; });
		  
		  nodeEnter.append("text")
		  .attr("dy", ".35em")
		  .text(function(d) { return d.word; });
		  
		  node.select("circle")
		  .style("fill", color);
		};//end of update

		var tick = function() {
			link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });
			
			node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
		};

		var color = function(d) {
		  return d._children ? "#3182bd" // collapsed package
		    : d.children ? "#c6dbef" // expanded package
		    : "#fd8d3c"; // leaf node
		};
    
		// Toggle children on click.
		var click = function(d) {
		  if (d3.event.defaultPrevented) return; // ignore drag
		  if (d.children) {
		  	d._children = d.children;
		  	d.children = null;
		  } else {
		  	if (d._children) {
			  	d.children = d._children;
			  	d._children = null;
		  	} else {
		  		scope.onClick({word: d.word});
		  	}
		  }
		  update();
		};

		// Returns a list of all nodes under the root.
		var flatten = function(root) {
			var nodes = [], i = 0;
			
			function recurse(node) {
				if (node.children) node.children.forEach(recurse);
				if (!node.id) node.id = ++i;
				nodes.push(node);
			}
			
			recurse(root);
			return nodes;
		};

		var width 	= window.innerWidth,
				height 	= 500,
				root;

		if (width > 960) { width = 960; }

		svg.attr("width", width).attr("height", height);
		
		var force = d3.layout.force()
		.linkDistance(80)
		.charge(-120)
		.gravity(.05)
		.size([width, height])
		.on("tick", tick);
		
		var link = svg.selectAll(".link"),
		node = svg.selectAll(".node");
		
		var root = data;
		update();

  };//end of .render

  return service;
});