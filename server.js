const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/any',
            name: '박인협',
            birth: '970907',
            sex: '남자',
            job: '대학생'
        }, {
            id: 2,
            image: 'https://placeimg.com/64/64/any',
            name: '박하은',
            birth: '950408',
            sex: '여자',
            job: '직장인'
        }, {
            id: 3,
            image: 'https://placeimg.com/64/64/any',
            name: '박서영',
            birth: '050704',
            sex: '여자',
            job: '고등학생'
        }
    ])
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})