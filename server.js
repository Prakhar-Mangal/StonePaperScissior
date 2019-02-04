var express=require('express');
var socket=require('socket.io');
var count=0,a=0,b=1;
var che=[];
var nam=[];
//app setup
var app=express();
var server=app.listen(8080,function(){
	console.log("listening to port 8080");
});

app.use(express.static('public'));

//Socket Setup
var io=socket(server);

io.on('connection', function(socket) {
   console.log('A user connected',socket.id);

   socket.on('choice',function(data){
   		che.push(data.choice);
   		nam.push(data.name);
   		//io.sockets.emit('choice',data);
   		count++;
   		if(count%2==0){
   			console.log("both selected"+che[0]+"and"+che[1]);
   			if(che[a]=='stone'){
   				if(che[b]=='stone'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:'tie'

   					});
   				}
   				else if(che[b]=='paper'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:nam[b]

   					});
   				}
   				else if(che[b]=='scissior'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:nam[a]

   					});
   				}

   			}
   			else if(che[a]=='paper'){
   				if(che[b]=='stone'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:nam[a]

   					});
   				}
   				else if(che[b]=='paper'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:'tie'

   					});
   				}
   				else if(che[b]=='scissior'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:nam[b]

   					});
   				}
   		}

   	 else if(che[a]=='scissior'){
   				if(che[b]=='stone'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:nam[b]

   					});
   				}
   				else if(che[b]=='paper'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:nam[a]

   					});
   				}
   				else if(che[b]=='scissior'){
   					io.sockets.emit('result',{
   						name0:nam[a],
   						name1:nam[b],
   						choice0:che[a],
   						choice1:che[b],
   						result:'tie'

   					});
   				}
   		}
   		a+=2;
   	    b+=2;
   	}

  
   });

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected',socket.id);
   });
});
