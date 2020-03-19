import Joi from '@hapi/joi';

const MIN_PASSWORD_LENGTH: number = 8;
const MAX_PASSWORD_LENGTH: number = 15;

export const userSchema = {
	identity: Joi.string().required().email({tlds: false})
		.messages({
			'string.email': `Email is not valid`,
			'string.empty': `Email field is required`,
		}),
	password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\da-zA-Z!@#$%^&*]{2,}$/)
		.min(MIN_PASSWORD_LENGTH)
		.max(MAX_PASSWORD_LENGTH)
		.messages({
			'string.pattern.base': `Password is not valid`,
			'string.empty': `Password field is required`,
			'string.min': `Length must be at least ${MIN_PASSWORD_LENGTH} characters long`,
			'string.max': `Length must be maximum ${MAX_PASSWORD_LENGTH} characters long`
		}),
	fullName: Joi.string().required().regex(/^[a-zA-Z ]{2,}$/)
		.messages({
			'string.pattern.base': `Full-Name is not valid`,
			'string.base': `Full-Name is not valid`,
			'string.empty': `Full-Name field is required`,
		}),
};
