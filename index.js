const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
    console.log('app rodando na porta 3000');
});
