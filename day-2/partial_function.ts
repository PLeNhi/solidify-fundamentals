const logToConsole = (level: string, component: string, message: string) => {
    console.log(`[${level}] [${component}]: ${message}`);
};

const logInfo = logToConsole.bind(null, 'INFO');
const logError = logToConsole.bind(null, 'ERROR');
const logDebug = logToConsole.bind(null, 'DEBUG');

logInfo('AuthService', 'User logged in successfully.');
logError('Database', 'Failed to connect to the database.');
logDebug('PaymentService', 'Processing payment for order #12345.');
