const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

let corsOptions = {
    origin: 'https://incitu-project-maps.vercel.app/'
};
app.use(cors())
var request = require('request');
app.get('/:id', function(req,res) {
  var newurl = 'https://zap-api-production.herokuapp.com/projects/'+req.params.id;
  request(newurl).pipe(res);
});

app.listen(port, () => {
  // console.log(`app listening on port ${port}`)
})
