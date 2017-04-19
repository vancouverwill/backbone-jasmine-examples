var Todos = Backbone.Collection.extend({
  
  url: 'http://localhost:3000/todos',
  model: Todo,
  
  parse: function(response) {
    var todos = response.response.todos;
    return _(todos).map(function(todo) {
      return _.extend(todo, {
        list: response.response.list
      });
    });
  },
  
  comparator: function(todo) {
    return todo.get("priority");
  },
  
  findByPriority: function(priority) {
    return this.filter(function(todo) {
      return todo.get('priority') == priority;
    });
  }
  
});