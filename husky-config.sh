# Useful to prepare husky hooks
npx husky add .husky/prepare-commit-msg "exec < /dev/tty && git cz --hook || true"
