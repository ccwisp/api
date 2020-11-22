
printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
printf '\nb2>>>>>>>>>>>>>>'

git stash
git checkout main || exit

echo $lav
git stash pop

printf '3>>>>>>>>>\n'
git push "https://ccwisp:${GITHUB_TOKEN}@github.com/ccwisp/api.git"



printf '4>>>>>>>>>>>>n'