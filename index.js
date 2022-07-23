let express = require('express');
const bodyparser = require('body-parser')

let routes = require('./Routes/bluelook-routes');

let app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/views/`))
app.use('/bluelook', express.static(`${__dirname}/views/`));
app.use('/services', express.static(`${__dirname}/views/`));
app.use('/technologies', express.static(`${__dirname}/views/`));
app.use('/bluelook/blogs', express.static(`${__dirname}/views/`));
app.use('/bluelook/projects', express.static(`${__dirname}/views/`));
app.use('/bluelook/industries', express.static(`${__dirname}/views/`));

////////////////////////////////////
//////////Routes///////////////////
app.use("/", routes);

app.listen('3000');