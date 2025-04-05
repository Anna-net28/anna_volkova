echo "# anna_volkova" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Anna-net28/anna_volkova.git
git push -u origin main
# git-config

git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main
git config --global user.name “Anna Volkova”
git config --global user.email “anna35.anna35.v@gmail.com”
git config --global core.autocrlf true
git init
git status
git add .
git commit -m "footer"
git diff --color-words
git push
