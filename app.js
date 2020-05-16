var express 			= require("express"),
    app     			= express(),
    bodyParser			= require('body-parser'),
    mongoose 			= require('mongoose');

var indexRoutes 		= require('./routes/index');
//Mongoose random things
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

let mongoUrl = process.env.PROFICIENT_MONGO_DB;

// mongoose.connect(mongoUrl);

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public')); //for js scripts

app.use(indexRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);