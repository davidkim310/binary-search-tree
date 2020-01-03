console.log('setup.js is running');
let tree;

function setup() {
  tree = new Tree;
  for(let i = 0; i < 10; i++) {
    tree.addValue(Math.floor(Math.random()*100))
  }
  console.log(tree);
  tree.traverse();
  let result = tree.search(10);
  if (result == null) {
    console.log('Not Found')
  } else {
    console.log('result', result)
  }
}

setup();