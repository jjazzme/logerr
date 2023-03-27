export enum EImportanceLevel {hidden= -1, notImportance, importance, veryImportance}
export type TUserErrorType = 'common'
export class Logerr {
    #env?: NodeJS.ProcessEnv;
    get env(): NodeJS.ProcessEnv | undefined {
        return this.#env;
    }
    set env(value: NodeJS.ProcessEnv | undefined) {
        this.#env = value;
    }
    error(args: {hint?: string, level?: EImportanceLevel, ctx?: any }, ...e: any[]) {
        if (args.level === EImportanceLevel.hidden) return;
        args.level ??= EImportanceLevel.notImportance;
        const rest = ['ERROR: ', `(${Date.now()}) `];
        if (args.level) rest.push(`[${EImportanceLevel[args.level]}] `)
        if (args.hint != null) rest.push(`{HINT: ${args.hint} }`);
        if (e) rest.push(...e);
        if (args.ctx) {

        }

        // TODO
        console.log(...rest);
    }
    log(args: {hint?: string, level?: EImportanceLevel}, ...e: any[]) {
        if (args.level === EImportanceLevel.hidden) return;
        args.level ??= EImportanceLevel.notImportance;
        const rest = ['LOG: ', `(${Date.now()}) `];
        if (args.level) rest.push(`[${EImportanceLevel[args.level]}] `)
        if (args.hint != null) rest.push(`{HINT: ${args.hint} }`);
        if (e) rest.push(...e);

        // TODO
        console.log(...rest);
    }
    debug(args: {hint?: string, level?: EImportanceLevel}, ...e: any[]) {
        if (this.env?.NODE_ENV?.charAt(0).toLowerCase() !== 'd') return;
        this.log(args, ...e);
    }
}

export class UserError {
    text: string;
    type: TUserErrorType;
    originalError?: any;
    constructor(text: string, args?: {type?: TUserErrorType, originalError?: any}) {
        this.text = text;
        this.type = args?.type ?? 'common';
        this.originalError = args?.originalError;
    }
}

export const logerr: Logerr = new Logerr();