import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { jsonMessage } from "./jsonMessage.js";
import db from './db.js';

const getTokenFromHeader = (req: Request) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.split(' ')[0] === 'Bearer')
        return authorization.split(' ')[1];
    else
        console.log('NO AUTHORIZATION HEADER');
}

const authorize = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, async (err: any, user: any) => {
        
        if (user) {
            const tokenFromDB = await db.one(`SELECT token FROM users WHERE id = $1`, user.id);
            const tokenFromHeader = getTokenFromHeader(req);

            if (!user || err || tokenFromDB.token !== tokenFromHeader) {
                res.status(401).json(jsonMessage('Unauthorized.'));
            } else {
                req.user = user;
                next();
            }
        } else {
            res.status(401).json(jsonMessage('Unauthorized'));
        }
    })(req, res, next);
}
export default authorize;