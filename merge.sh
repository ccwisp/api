printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit

printf '\nb2>>>>>>>>>>>>>>'
git checkout main || exit
git merge --no-ff origin/dev || exit

printf '3>>>>>>>>>\n'
git push "https://ccwisp:${GITHUB_TOKEN}@github.com/ShroukMansour/E-learning.git"

printf '4>>>>>>>>>>>>n'
