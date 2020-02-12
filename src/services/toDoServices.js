service = {};

var toDoDataSource = [];

service.addToDo = function(toDo) {
  // https://www.freecodecamp.org/news/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5/
  // toDoDataSource.push(toDo) <-- this will not create new array, not working
  toDoDataSource = toDoDataSource.concat([toDo]); //this will asign new array, can't immutate current state
};

service.getToDo = function() {
  return toDoDataSource;
};

//create new array without the current toDoId
service.deleteToDo = function(toDoId) {
  var tempList = [];
  for (var i = 0; i < toDoDataSource.length; i++) {
    if (toDoDataSource[i].id != toDoId) {
      tempList.push(toDoDataSource[i]);
    }
  }

  console.log(tempList);

  toDoDataSource = tempList;
};

service.updateToDo = function(toDo) {
  var tempItems = toDoDataSource;
  for (var i = 0; i < tempItems.length; i++) {
    if (tempItems[i].id == toDo.id) {
      tempItems[i].description = toDo.description;
      break;
    }
  }
};

export default service;
