console.log('tree.js is running')
function Tree() {
    this.root = null;
  }
  Tree.prototype.search = function(val) {
    let found = this.root.search(val);
    return found;
  };
  
  Tree.prototype.addValue = function(val) {
    let n = new Node(val)
    if (this.root === null) {
      this.root = n;
    } else {
      this.root.addNode(n)
    }
  };

  Tree.prototype.traverse = function() {
    this.root.visit();
  }