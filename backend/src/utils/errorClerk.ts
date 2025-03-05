import { Response } from "express";

interface ErrorProps {
    status: number,
    errors: [{ message: string }]
};

export function errorClerk(res: Response, err: unknown) {
    const error = err as ErrorProps;
    res.status(error.status).send({ message: error.errors[0].message });
}