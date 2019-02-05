import readlineSync from 'readline-sync';

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    console.log('');
    const name = '';
    try {
        name = readlineSync.question('May I have your name? ');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }  
    console.log(`Hello, ${name}`);
}