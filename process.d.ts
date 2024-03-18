declare namespace NodeJS {
  export interface ProcessEnv {
    API_SECRET: string;
    MONGO_DB: string;
    NODE_ENV: string;
    PORT: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_SSL: string;
  }
}
