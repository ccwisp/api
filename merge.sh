
printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
printf '\nb2>>>>>>>>>>>>>>'

git stash
git checkout 'origin/main' || exit
git merge --no-ff 'origin/dev' || exit
git stash pop

printf '3>>>>>>>>>\n'
git push "https://${GITHUB_TOKEN}@github.com/ccwisp/api.git"



printf '4>>>>>>>>>>>>n'