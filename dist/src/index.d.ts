export declare enum EImportanceLevel {
    hidden = -1,
    notImportance = 0,
    importance = 1,
    veryImportance = 2
}
export type TUserErrorType = 'common';
export declare class Logerr {
    error(args: {
        hint?: string;
        level?: EImportanceLevel;
        ctx?: any;
    }, ...e: any[]): void;
    log(args: {
        hint?: string;
        level?: EImportanceLevel;
    }, ...e: any[]): void;
    debug(args: {
        hint?: string;
        level?: EImportanceLevel;
    }, ...e: any[]): void;
}
export declare class UserError {
    text: string;
    type: TUserErrorType;
    originalError?: any;
    constructor(text: string, args?: {
        type?: TUserErrorType;
        originalError?: any;
    });
}
export declare const logerr: Logerr;
