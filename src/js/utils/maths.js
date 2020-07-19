require.config({
	baseUrl: 'js/utils/'
});

define(['add', 'subtract', 'multiply', 'divide'], function (add, subtract, multiply, divide) {
	return {
		add,
		subtract,
		multiply,
		divide
	}
});
