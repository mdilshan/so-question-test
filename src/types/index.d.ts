import { IUser } from "../models/user";
import { Request } from "express";

export interface IUserRequest extends Request {
  user?: IUser; // or any other type
}

// import { IUser } from "../models/user";

// declare global {
//   namespace Express {
//     export interface Request {
//       user?: IUser;
//     }
//   }
// }

// declare namespace Express {
//   export interface Request {
//     user?: IUser;
//   }
// }