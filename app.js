var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    //res.send('hello');
    var title = 'Customers';
    res.render('index', {
        title: title
    });
});

app.listen(3000, function(){
    console.log('server started on port 3000...');
})