const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(express.json())


const PORT = process.env.PORT;

const indexRouter = require("./routes/index")
const aboutRouter = require("./routes/about")
const productCtrl = require("./routes/product")
const authRouter = require("./routes/auth")
const cartRouter = require("./routes/cart")
const newsLetterRouter = require("./routes/newsletter")

app.use("/", indexRouter);
app.use("/", aboutRouter);
app.use("/", productCtrl)
app.use("/", authRouter);
app.use("/", cartRouter);
app.use("/", newsLetterRouter);



app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true,
        useUnifiedTopology: true},
        () => {
            console.log('MongoDB connected')
        });
        