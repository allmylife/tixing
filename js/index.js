var todo=[{
	id:1,
	title:'新列表1',
	color:'#c16bd8',
	list:[{
		content:111111,
		date:new Date(),
		done:true,
	},{
		content:1111112222222,
		date:new Date(),
		done:true,
	}]
},{
	id:2,
	title:'新列表2',
	color:'#6cdb30',
	list:[{
		content:222222,
		date:new Date(),
		done:true,
	}],
},{
	id:3,
	title:'新列表3',
	color:'#40acf9',
	list:[{
		content:3333333,
		date:new Date(),
		done:true,
	}],
}]


var app=angular.module('app',[]);
app.controller('myctr',function($scope){
	$scope.todo=todo;
	$scope.color=['#CE78E2','#6cdb30','#40acf9','#f1c900','#FF7C00','#FF2865','#f89600'];
	$scope.ids=0;
	$scope.index=0;
	$scope.add=function(){
		$scope.ids=$scope.todo[$scope.todo.length-1].id+1;
		$scope.todo.push({
			id:$scope.ids,
			title:'新列表'+$scope.ids,
			color:$scope.color[$scope.todo.length%7],
			list:[]
		})
		$scope.index=$scope.todo.length-1;
	}

	
	getNum()
	function getNum(){
		$scope.comNum=0;
		angular.forEach($scope.todo[$scope.index].list,function(o,i){
			if(o.done==true)
			{
				$scope.comNum++;
			}
		})	
	}
	$scope.flag=true;
	$scope.select=function(i){
		$scope.index=i;
		$scope.flag=true;
		$scope.f=false;
	}

	$scope.addList=function(){
		$scope.todo[$scope.index].list.push({
			content:'',
			done:false,
			date:new Date()
		})
	}

	$scope.changeStatus=function(v,sta){
		v.done=sta;
	}

	$scope.f=false;
	$scope.getColor=function(i){
		$scope.f=!$scope.f;
		$scope.fontColor=$scope.todo[i].color;
		$scope.wz=$scope.todo[i].title;
	}

	$scope.changeColor=function(c){
		$scope.fontColor=c;
	}

	$scope.save=function(i){
		$scope.todo[i].title=$scope.wz;
		$scope.todo[i].color=$scope.fontColor;
		$scope.f=false;
	}
	$scope.cancel=function(){
		$scope.f=false;
	}
	$scope.del=function(i){
		$scope.todo.splice(i,1);
		$scope.f=false;
	}

	


})