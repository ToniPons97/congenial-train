var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import passport from "passport";
import { jsonMessage } from "./jsonMessage.js";
import db from './db.js';
const getTokenFromHeader = (req) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.split(' ')[0] === 'Bearer')
        return authorization.split(' ')[1];
    else
        console.log('NO AUTHORIZATION HEADER');
};
const authorize = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        if (user) {
            const tokenFromDB = yield db.one(`SELECT token FROM users WHERE id = $1`, user.id);
            const tokenFromHeader = getTokenFromHeader(req);
            if (!user || err || tokenFromDB.token !== tokenFromHeader) {
                res.status(401).json(jsonMessage('Unauthorized.'));
            }
            else {
                req.user = user;
                next();
            }
        }
        else {
            res.status(401).json(jsonMessage('Unauthorized'));
        }
    }))(req, res, next);
};
export default authorize;
