interface Settings {
    version: number;
    active: boolean;
}

export interface Config {
    env: string;
    name: string;
    settings: Settings;
}
