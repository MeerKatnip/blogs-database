const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

//connecting to the database
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/blogdb'
const db = pgp(connectionString)


app.use(express.urlencoded())

app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

//Gets
app.get('/',(req,res) => {
    res.render('index')
})

app.get('/all-posts',(req,res) => {
    db.any('SELECT title,body,is_published FROM posts;').then(results => {
        res.render('all-posts',{posts: results})
    })
})


app.listen(3000,() => {
    console.log('Server is running')
})