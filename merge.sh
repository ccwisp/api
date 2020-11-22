if [ "$TRAVIS_BRANCH" != "dev" ]; then 
    exit 0;
fi

export GIT_COMMITTER_EMAIL='Travis@travisservice.com'
export GIT_COMMITTER_NAME='AutoMerge Bot'

printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
printf '\nb2>>>>>>>>>>>>>>'

git checkout main || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit

printf '3>>>>>>>>>\n'
git push "https://${GITHUB_TOKEN}@github.com/ccwisp/api.git"



printf '4>>>>>>>>>>>>n'