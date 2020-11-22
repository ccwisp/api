export GIT_COMMITTER_EMAIL='Travis@travisservice.com'
export GIT_COMMITTER_NAME='AutoMerge Bot'

printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit

printf '\nb2>>>>>>>>>>>>>>'
git stash
git checkout main || exit
git merge --no-ff origin/dev || exit

printf '3>>>>>>>>>\n'
git push "https://${GITHUB_TOKEN}@github.com/ccwisp/api.git"

git stash pop

printf '4>>>>>>>>>>>>n'