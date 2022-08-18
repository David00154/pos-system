import * as trpc from '@trpc/server';
import { createRouter } from "../utils";
import { boolean, z } from 'zod'

const validationRegisterSchema = z.object({
    email: z.string().email('This should be a valid email address'),
    storeName: z.string(),
    password: z.string().min(7, 'The password field should be a minimum of 7 characters'),
})

const validationLoginSchema = z.object({
    email: z.string().email('This should be a valid email address'),
    password: z.string().min(7, 'The password field should be a minimum of 7 characters')
})



export const authRouter = createRouter()
    .mutation('signup', {
        input: validationRegisterSchema,
        resolve({ input: { email, password, storeName } }) {
            try {
                return true
            } catch (e) {
                throw new trpc.TRPCError({ code: 'CONFLICT' })
            }
        }
    })
    .mutation('login', {
        input: validationLoginSchema,
        resolve({ input: { email, password } }) {
            try {
                return true
            } catch (e) {
                throw new trpc.TRPCError({ code: 'CONFLICT' })
            }
        }
    })
