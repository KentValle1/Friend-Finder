var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

app.use(urlencodedParser = bodyParser.urlencoded({
    extened: true
}))
app.use(bodyParser.json({
    type: 'application/*+json'
}))
app.use(bodyParser.raw({
    type: 'application/vnd.custom-type'
}))
app.use(bodyParser.text({
    type: 'text/html'
}))

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});