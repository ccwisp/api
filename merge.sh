export GIT_COMMITTER_EMAIL='Travis@travisservice.com'
export GIT_COMMITTER_NAME='ccwisp'

printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit

printf '\nb2>>>>>>>>>>>>>>'
git checkout main || exit
git merge --no-ff origin/dev || exit

printf '3>>>>>>>>>\n'
git push @github.com/"https://${GITHUB_TOKEN}@github.com/ccwisp/api.git"

printf '4>>>>>>>>>>>>n'