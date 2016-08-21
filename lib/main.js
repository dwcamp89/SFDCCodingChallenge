require.config({
	paths : {
		'DatePicker' : '../node_modules/react-datepicker/dist/react-datepicker.min',
		'moment' : '../node_modules/react-datepicker/node_modules/moment/moment',
		'jquery' : '../jquery.min',
		'react' : '../react',
		'react-onclickoutside' : '../node_modules/react-datepicker/node_modules/react-onclickoutside/index',
		'react-dom' : '../react-dom'
	}
});

require(['App'], function(App){
	App.start();
})