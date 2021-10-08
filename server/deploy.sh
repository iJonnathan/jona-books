

#!/usr/bin/env sh

# abort on errors
git add .
git commit -m "deploying jonabooks server..."
git push heroku main
heroku git:remote -a jonabooks-server