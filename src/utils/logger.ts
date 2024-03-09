import P, { type Logger } from 'pino';

const logger: Logger = P({
  timestamp: () => `,"time":"${new Date().toJSON()}"`,
}).child({});
logger.level = 'trace';

export { logger };
