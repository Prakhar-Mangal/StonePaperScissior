var ip= prompt("Please enter ip address");
var port = prompt("Please enter port no.");

if (port != null&& ip!=null) {
 	var socket=io.connect('http://'+ip+':'+port);
} 
else{
alert('please enter port no.');

}

var nam= prompt("Enter your name");

if (nam=="") 
	alert('Enter name correctly, please refresh!!');

//var socket=io.connect('http://localhost:8000');

var stone=document.getElementById('stone');
var paper=document.getElementById('paper');
var scissior=document.getElementById('scissior');
var btn=document.getElementById('btn');
var result=document.getElementById('result');


var selection=document.getElementById('selection');
//Emit events
btn.addEventListener('click',function(){
	if(stone.checked==true){
		alert(stone.value);
		socket.emit('choice',{
			choice:stone.value,
			name:nam
		});
	}
	else if(paper.checked==true){
		alert(paper.value);
		socket.emit('choice',{
			choice:paper.value,
			name:nam
		});

	}
	else if(scissior.checked==true){
		alert(scissior.value);
		socket.emit('choice',{
			choice:scissior.value,
			name:nam
		});
	}
});

//listen for events
// socket.on('choice',function(data){
// 	selection.innerHTML+='<p><strong>'+data.name+' selected:'+data.choice+'</strong></p>';
// 	});
socket.on('result',function(data){
	if(data.result!='tie'){
	result.innerHTML=data.name0+' selected: '+data.choice0+'  <br>'+
	data.name1+' selected: '+data.choice1+'  <br>'+
	data.result+' won';
}
else
{
	result.innerHTML=data.name0+' selected: '+data.choice0+'  <br>'+
	data.name1+' selected: '+data.choice1+'  <br>'+
	data.result;

}
});

