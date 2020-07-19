import { Request, Response } from "express";
import {
	asyncHandler,
	succeesResponse,
	validationFailResponse,
} from "../../utils";
import { User } from "../../models";
import { validationResult } from "express-validator";

/**
 * for re exporting validator
 */
export * from "./validator";

/**
 * Get all data from user table
 */
export const get = asyncHandler(async (req: Request, res: Response) => {
	succeesResponse(res, await User.findAll());
});

/**
 * create user to table user
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
	const error = validationResult(req);
	if (error) {
		validationFailResponse(res, error.array());
		return;
	}

	const user: Omit<User, "id"> = req.body;
	succeesResponse(res, await User.create(user));
});

/**
 * get single user
 */
export const getUser = asyncHandler(async (req: Request, res: Response) => {
	const id: number = +req.params.id;
	succeesResponse(res, await User.findByPk(id));
});