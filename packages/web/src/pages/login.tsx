import { Field, Formik } from 'formik'
import React, { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { TextField } from '~/components/InputField'
import { State, useGlobal } from '~/context/GlobalProvider'
import { trpc } from '~/context/utils/trpc'
import { validationLoginSchema } from '~/context/utils/validationSchemas'
import { IoWalletOutline } from "react-icons/io5"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const Login: FC = () => {
    const { state, setState } = useGlobal()

    let location = useLocation()
    let navigate = useNavigate()

    let login = trpc.useMutation(['auth.login'])
    return (
        <div className='grid md:place-content-center place-content-stretch h-screen'>
            <div className='text-custom-dark bg-discord-dark md:rounded-md sm:min-w-[480px] w-full text-center md:py-[64px] py-[50px]'>
                <h1 className='md:px-[48px] px-[38px] pb-[4px] text-2xl leading-[30px] font-extrabold text-white'>Welcome back!</h1>
                <p className="md:px-[48px] px-[38px] pb-[20px] text-[#b9bbbe]">We are so excited to see you again!</p>

                <Formik
                    validationSchema={toFormikValidationSchema(validationLoginSchema)}
                    initialValues={
                        {
                            email: '',
                            password: '',
                        }
                    }
                    onSubmit={({ email, password }, { setSubmitting }) => {
                        toast.promise(new Promise(async (resolve, reject) => {
                            try {
                                const data = await login.mutateAsync({ email, password })
                                if (data) {
                                    setTimeout(() => {
                                        setState((state: State) => ({ ...state, loggedIn: true }))
                                        resolve(data)
                                        setSubmitting(false)
                                    }, 8000)
                                }
                            } catch (e) {
                                reject(e)
                                setSubmitting(false)
                            }
                        }), {
                            error: (e) => e.message,
                            loading: 'Logging in...',
                            success: 'Authenticated and ready!'
                        })
                    }}
                >
                    {({ handleSubmit, isSubmitting, values }) => (
                        <form className="w-full px-[20px] md:px-[28px] flex flex-col gap-5" onSubmit={handleSubmit}>
                            <Field
                                value={values.email}
                                className='border-0 bg-discord-dark-2 focus:bg-discord-dark-2'
                                name="email" id="email" type="email" placeholder="Email Address" as={TextField} />
                            <Field
                                value={values.password}
                                className='border-0 bg-discord-dark-2'
                                extraElement={
                                    <button className='text-discord-blue hover:underline mt-2 text-sm font-normal' onClick={() => navigate('/register', { replace: true })}>Forgot your password?</button>
                                }
                                name="password" id="password" type="text" placeholder="Password" as={TextField} />
                            <div className='w-full mt-10'>
                                <button className='bg-discord-purple text-white h-[48px] px-[24px] w-full hover:bg-discord-dark-2 flex items-center justify-center relative
                                rounded-md text-base font-semibold' type='submit' disabled={isSubmitting}>Login</button>
                            </div>

                            <div className='flex items-center gap-5'>
                                <div className='h-[1px] content-["x"] w-full bg-[#b9bbbe]' />
                                <span className='text-[#b9bbbe] text-sm font-normal'>or</span>
                                <div className='h-[1px] content-["x"] w-full bg-[#b9bbbe]' />
                            </div>

                            <WalletMultiButton disabled={isSubmitting} endIcon={<IoWalletOutline size={24} color="white" />} onClick={() => console.log('woo1')} />

                            <p className='text-left text-[#b9bbbe] text-sm font-normal'>Need an account?{' '}
                                <Link
                                    to={'/register'}
                                    replace={true}
                                    className='text-discord-blue hover:underline'
                                >
                                    Register
                                </Link>
                            </p>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login






// after:absolute after:content-[""] after:h-full after:w-full after:top-[6px] after:left-[6px] after:border after:rounded-md after:border-custom-dark 