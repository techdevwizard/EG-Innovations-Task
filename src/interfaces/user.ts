
export interface Credentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    name: string;
}


export type LoginFormData = {
    username: string;
    password: string;
}

export type LoginFormDataError = {
    username: string;
    password: string;
}
