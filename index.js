import chalk from 'chalk';
import debug from 'debug';

// Create a debug instance for our app
const log = debug('app:hello');

// Enable debug output (you can also set DEBUG=app:* in environment)
debug.enable('app:*');

// Use chalk to colorize the Hello World message
console.log(chalk.blue.bold('=== Hello World Application ==='));
console.log(chalk.green('Hello, World!'));
console.log(chalk.yellow('This message uses chalk for colors!'));

// Use debug for logging
log('Application started successfully');
log(chalk.magenta('Debug and chalk work great together!'));

console.log(chalk.cyan('\n✓ Application completed'));
