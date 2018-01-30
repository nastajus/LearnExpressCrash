var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        id: 1,
        first_name: 'Ian',
        last_name: 'Nastajus',
        email: 'ian.nastajus@gmail.com',
    },
    {
        id: 2,
        first_name: 'John',
        last_name: 'Smith',
        email: 'jsmith@gmail.com',
    },
    {
        id: 3,
        first_name: 'Rebecca',
        last_name: 'Tallfallow',
        email: 'rebecca@gmail.com',
    },
]

app.get('/', function(req, res){
    //res.send('hello');
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.post('/users/add', function(req,res){
    console.log('FORM SUBMITTED');
});

app.listen(3000, function(){
    console.log('server started on port 3000...');
})