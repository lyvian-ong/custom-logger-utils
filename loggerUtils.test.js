const logger = require('./loggerUtils');

describe('Testing for logger utils', () => {
    test('Test if the result return in the sequence of the received object', () => {
        const loggerContext = {
            transactionId: 123,
            startTime: new Date(),
            trxType: 'TESTING_LOGGER',
            trxResult: 'SUCCESS',
            metadata: {
                metadata1: 'metadata1',
                metadata2: 'metadata2'
            }
        }
        logger.info('', loggerContext);
    });
});