import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        console.info(`Request from: ${req.url}. Method: ${req.method}`);
        next();
    }
}

// functional middleware
export function logger(req: Request, res: Response, next: NextFunction) {
    console.info(`Request from: ${req.url}. Method: ${req.method}`);
    next();
} 