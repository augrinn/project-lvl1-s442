#!/usr/bin/env node
import { greeting, askName, sayHello, printSeparator } from '..';

greeting();
printSeparator();
const name = askName();
sayHello(name);
