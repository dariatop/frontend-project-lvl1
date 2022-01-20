install:
	npm install
brain-games:
	node bin/brain-games.js
index-games:
	node src/index.js
publish:
	npm publish --dry-run
lint:
	npx eslint .