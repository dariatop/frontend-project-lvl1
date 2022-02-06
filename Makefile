install:
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	node games/brain-even.js
brain-calc:
	node games/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .