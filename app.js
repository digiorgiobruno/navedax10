const express = require('express');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
const userRouter = require('./routes/userRouter');
app.use('/', userRouter);
app.listen(port || 3000, () => {
    console.log('Example app listening on port arranco el 3000 ');
});
//