require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdata = {
    "login": "tusharnangare31",
    "id": 111036424,
    "node_id": "U_kgDOBp5ICA",
    "avatar_url": "https://avatars.githubusercontent.com/u/111036424?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tusharnangare31",
    "html_url": "https://github.com/tusharnangare31",
    "followers_url": "https://api.github.com/users/tusharnangare31/followers",
    "following_url": "https://api.github.com/users/tusharnangare31/following{/other_user}",
    "gists_url": "https://api.github.com/users/tusharnangare31/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tusharnangare31/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tusharnangare31/subscriptions",
    "organizations_url": "https://api.github.com/users/tusharnangare31/orgs",
    "repos_url": "https://api.github.com/users/tusharnangare31/repos",
    "events_url": "https://api.github.com/users/tusharnangare31/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tusharnangare31/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Tushar Nangare",
    "company": null,
    "blog": "",
    "location": "pune",
    "email": null,
    "hireable": null,
    "bio": "I am Tushar Nangare, a student of Modern College of Engineering, Pune. I am pursuing my BE degree in Information Technology and am currently studying in the 3rd",
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-08-11T04:16:42Z",
    "updated_at": "2024-07-19T14:18:04Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.send('<h1>This is Home page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>This is contact page</h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubdata)
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})