export interface RegisterData {
    fullName: string;
    email: string;
    password: string;
    role: "investor" | "business";
    [key: string]: any;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface User {
    _id: string;
    fullName: string;
    email: string;
    role: "investor" | "business";
    token?: string;
}