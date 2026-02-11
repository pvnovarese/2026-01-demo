import chalk from 'chalk';
import debug from 'debug';
import express from 'express';
import { exec } from 'child_process';
import fs from 'fs';
import crypto from 'crypto';

// Create a debug instance for our app
const log = debug('app:hello');

// Enable debug output (you can also set DEBUG=app:* in environment)
debug.enable('app:*');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// VULNERABILITY 1: Hard-coded credentials (CWE-798)
// Credentials removed; use environment variables or a secrets manager instead.

// VULNERABILITY 2: Weak cryptographic algorithm (CWE-327)
// Weak hash function removed; use a secure password hashing library instead.
// Use chalk to colorize the Hello World message
console.log(chalk.blue.bold('=== Hello World Application ==='));
console.log(chalk.green('Hello, World!'));
console.log(chalk.yellow('This message uses chalk for colors!'));

// Use debug for logging
log('Application started successfully');
log(chalk.magenta('Debug and chalk work great together!'));

// VULNERABILITY 11: Insecure server configuration
const PORT = 3000;

// Simple endpoint that responds with the current date and time
app.get('/', (req, res) => {
    const now = new Date();
    res.send(`Current date and time: ${now.toString()}`);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(chalk.cyan(`\n✓ Server running on http://0.0.0.0:${PORT}`));
});

console.log(chalk.cyan('\n✓ Application completed'));
