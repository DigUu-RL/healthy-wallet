import { HttpStatusCode } from 'axios';

export type TError = {
	statusName: string;
	statusCode: HttpStatusCode;
	error: string;
	innerError?: string;
};
