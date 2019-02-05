install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

link:
	npx eslint .
	
publish:
	npm publish