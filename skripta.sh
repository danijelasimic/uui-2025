for pr in $(gh pr list --limit 500 --json number -q '.[].number'); do
  echo "Processing PR $pr"
  git fetch origin pull/$pr/head:pr-$pr
  git worktree add -f _pr$pr pr-$pr
done