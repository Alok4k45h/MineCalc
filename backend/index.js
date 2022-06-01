const express = require('express');
const app = express();
const fs = require("fs");
const {spawn} = require("child_process");
var cors = require('cors');
const busboyBodyParser = require('busboy-body-parser');
app.use(busboyBodyParser());
app.use(cors());

const port = 8000;



app.get("/python", (req, res) => {
          //console.log("hello world");

        var dataToSend;
        // spawn new child process to call the python script
        const python = spawn('python', ['../python/scriptfile.py']);
        // collect data from script
        python.stdout.on('data', function (data) {
         console.log('Pipe data from python script ...');
         dataToSend = data.toString();
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.json({ downloadfile: true });
        //res.send(dataToSend);
        //console.clear();
        //process.stdout.write('\033c');
        console.log(dataToSend);

});
})


app.get('/', (req, res) => {
  res.send('Hi server started');
});


app.post("/upload", (req, res) => {
  //console.log("Connected to React");
  console.log(req.body);
  console.log("Hello dear");
  console.log(req.files);

  fs.writeFile("../res/temp/burdenspacing.csv", req.files.file["data"],'ascii', function (err) {
          if (err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      });
      res.redirect('/python');
  });


  app.get("/download", (req, res) => {
      res.download("../res/temp/burdenspacing.csv");
  });


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
