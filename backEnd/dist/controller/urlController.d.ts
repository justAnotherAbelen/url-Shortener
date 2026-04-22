import express from "express";
export declare const createUrl: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const getUrl: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const deleteUrl: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const getUrlByid: (req: express.Request, res: express.Response) => Promise<void | express.Response<any, Record<string, any>>>;
//# sourceMappingURL=urlController.d.ts.map