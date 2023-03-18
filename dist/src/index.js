export var EImportanceLevel;
(function (EImportanceLevel) {
    EImportanceLevel[EImportanceLevel["hidden"] = -1] = "hidden";
    EImportanceLevel[EImportanceLevel["notImportance"] = 0] = "notImportance";
    EImportanceLevel[EImportanceLevel["importance"] = 1] = "importance";
    EImportanceLevel[EImportanceLevel["veryImportance"] = 2] = "veryImportance";
})(EImportanceLevel || (EImportanceLevel = {}));
export class Logerr {
    //TODO
    error(args, ...e) {
        if (args.level === EImportanceLevel.hidden)
            return;
        args.level ??= EImportanceLevel.notImportance;
        const rest = ['ERROR: ', `(${Date.now()}) `];
        if (args.level)
            rest.push(`[${EImportanceLevel[args.level]}] `);
        if (args.hint != null)
            rest.push(`{HINT: ${args.hint} }`);
        if (e)
            rest.push(...e);
        if (args.ctx) {
        }
        // TODO
        console.log(...rest);
    }
    log(args, ...e) {
        if (args.level === EImportanceLevel.hidden)
            return;
        args.level ??= EImportanceLevel.notImportance;
        const rest = ['LOG: ', `(${Date.now()}) `];
        if (args.level)
            rest.push(`[${EImportanceLevel[args.level]}] `);
        if (args.hint != null)
            rest.push(`{HINT: ${args.hint} }`);
        if (e)
            rest.push(...e);
        // TODO
        console.log(...rest);
    }
}
export class UserError {
    text;
    type;
    originalError;
    constructor(text, args) {
        this.text = text;
        this.type = args?.type ?? 'common';
        this.originalError = args?.originalError;
    }
}
export const logerr = new Logerr();
