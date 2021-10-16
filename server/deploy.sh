

#!/usr/bin/env sh

# abort on errors

git init

git add .
git commit -m "deploying jonabooks server..."
git push heroku master
heroku git:remote -a jonabooks-server