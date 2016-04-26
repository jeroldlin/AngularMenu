angular.module('menuApp', [])
  .controller('MenuListController', function() {
    var menuList = this;
    menuList.items = [
      {text:'Caffe Latte', selected:false, price:2.95},
      {text:'Caffe Mocha', selected:false, price:3.45},
	  {text:'White Chocolate Mocha', selected:false, price:3.75},
	  {text:'Caramel Macchiato', selected:false, price:3.75},
	  {text:'Freshly Brewed Coffee', selected:false, price:1.85}];
	  
	menuList.comments = [];
 
    menuList.addComment = function() {
      menuList.comments.push({text:menuList.commentText});
      menuList.commentText = '';
    };

	menuList.deleteComment = function(index) {
	  menuList.comments.splice(index, 1);
    };
 
    menuList.totalCost = function() {
      var total = 0;
      angular.forEach(menuList.items, function(item) {
		if (item.selected == true) total += item.price;
      });
      return total;
    };
 
    menuList.archive = function() {
      var oldTodos = menuList.items;
      menuList.items = [];
      angular.forEach(oldTodos, function(item) {
        if (!item.selected) menuList.items.push(item);
      });
    };
  });