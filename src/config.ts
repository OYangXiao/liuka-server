export interface IConfig {
    port: number | string;
    prettyLog: boolean;
    sessionKey: string;
}

export const config:IConfig = {
    port: process.env.NODE_PORT as string || 3000,
    prettyLog: process.env.NODE_ENV == 'development',
    sessionKey: "awfeawef"
};