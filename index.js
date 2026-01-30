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
const DATABASE_PASSWORD = 'super_secret_password_123';
const API_KEY = 'sk-1234567890abcdef';
const JWT_SECRET = 'my-secret-key';

// VULNERABILITY 2: Weak cryptographic algorithm (CWE-327)
function hashPassword(password) {
    return crypto.createHash('md5').update(password).digest('hex');
}

// Use chalk to colorize the Hello World message
console.log(chalk.blue.bold('=== Hello World Application ==='));
console.log(chalk.green('Hello, World!'));
console.log(chalk.yellow('This message uses chalk for colors!'));

// Use debug for logging
log('Application started successfully');
log(chalk.magenta('Debug and chalk work great together!'));

// VULNERABILITY 11: Insecure server configuration
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(chalk.cyan(`\n✓ Server running on http://0.0.0.0:${PORT}`));
    console.log(chalk.yellow(`Database password: ${DATABASE_PASSWORD}`)); // Vulnerable: logging secrets
    console.log(chalk.yellow(`API Key: ${API_KEY}`));
});

console.log(chalk.cyan('\n✓ Application completed'));
