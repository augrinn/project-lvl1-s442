#!/usr/bin/env node
import {
  greeting, tellRules, askName, sayHello, startGame, printSeparator,
} from '..';

printSeparator();
greeting();
tellRules();
printSeparator();
const name = askName();
sayHello(name);
printSeparator();
startGame(name);
