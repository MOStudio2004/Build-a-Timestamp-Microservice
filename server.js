import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

app.get("/api/:date", (req, res)=> {
    let date = req.params.date

    if (/^\d+$/.test(date)){
      date = new Date(Number(req.params.date))
    }else{
      date = new Date(req.params.date);
    }

  const utc = date.toUTCString()
  const unix = date.getTime()
  if (isNaN(unix)) {
  return res.json({ error: "Invalid Date" });
}
  res.json({utc , unix})
} );


app.get("/api" , (req,res) => {
  const date = new Date();
    const utc = date.toUTCString()
  const unix = date.getTime()
  res.json({utc , unix})
})


// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
