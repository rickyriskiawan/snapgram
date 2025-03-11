import { z } from 'zod';

export const SignupValidation = z.object({
  name: z.string().min(3),
  username: z.string().min(2),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

export const SigninValidation = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});
