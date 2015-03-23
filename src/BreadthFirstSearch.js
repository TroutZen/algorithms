var Queue = function() {
	this.items = [];
};

// add to the back of the queue
Queue.prototype.enqueue = function(obj){
	this.items.push(obj);
};

// removes the item at the front
Queue.prototype.dequeue = function(obj){
	return this.items.shift();
};

Queue.prototype.isEmpty = function(){
	return this.items.length === 0;
};

// Tree data structure
var Tree = function(value){
  this.value = value;
  this.children = [];
};

// return number of times a number exists, make sure that it traverses tree breadth first
var bfs = function(node, target){
	var count = 0;
	// stores nodes
	var queue = new Queue();
	// add current working node to queue
	queue.enqueue(node);
	// while the queue is not empty
	while (!queue.isEmpty()) {
		// set currentNode equal to the dequeued node
		var currentNode = queue.dequeue();
		console.log(currentNode);
		// if the value is equal to the target
		if ( currentNode.value === target ) {
			// increment the count
			count++;
		}
		// iterate over the children of the currentNode if they exist
		for ( var i = 0; i < currentNode.children.length; i++ ) {
			// enqueue the current child
			queue.enqueue(currentNode.children[i]);
		}
	}

	return count;
};