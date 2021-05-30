tutorial followed
https://www.youtube.com/watch?v=Gv-FWOTY4TM

- Setup a Node.js project with Express framework, EJS view engine.
- Deploy a Node.js app to Heroku cloud.
- Setup a Facebook Page, a Facebook developer app.
- Config facebook webhook to work with Node.js app
- Embed the Facebook Chat Plugin into a website.

Need wit ai to make this happen
- Train the Messenger Bot to handle basic messages with meaning "greetings", "thanks", and "bye". The bot also can reply if users press the like button.

licence used in chat bot from this site
https://app.freeprivacypolicy.com/download/19a26332-be24-409a-ba2e-f49e7c8b25cb


useful command

git remote -v to know where the git will push (needeed to make sure there is the origin for github and the heroku for heroku)

heroku run bash to enter to the server that hold the project and see the files from the terminal

heroku login to log the heroku cli

heroku apps to see the heroku apps in the account

heroku git:remote -a nameoftheapp to set the origin in heroku server

to make heroku install npm dependency after the push otherwise it donsn't
heroku config:set NPM_CONFIG_PROFUCTION = false
