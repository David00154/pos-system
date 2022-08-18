import { Field, Formik } from 'formik'
import React, { FC } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { CheckBoxField, TextField } from '~/components/InputField'
import { State, useGlobal } from '~/context/GlobalProvider'
import { trpc } from '~/context/utils/trpc'
import { validationRegisterSchema } from '~/context/utils/validationSchemas'

const Register: FC = () => {
    const { state, setState } = useGlobal()

    let location = useLocation()
    let navigate = useNavigate()

    let register = trpc.useMutation(['auth.signup'])
    return (
        <div className='grid md:place-content-center place-content-stretch h-screen'>
            <div className='text-custom-dark shadow-md bg-discord-dark md:rounded-md max-w-[480px] w-full text-center md:py-[64px] py-[45px]'>
                <h1 className='md:px-[48px] px-[38px] text-2xl leading-[30px] font-extrabold pb-[28px] text-white'>Create an account</h1>

                <Formik
                    validationSchema={toFormikValidationSchema(validationRegisterSchema)}
                    initialValues={
                        {
                            email: '',
                            password: '',
                            storeName: '',
                            subscribeEmail: false,
                            agreeTos: false
                        }
                    }
                    onSubmit={({ email, password, storeName }, { setSubmitting, resetForm }) => {
                        toast.promise(new Promise(async (resolve, reject) => {
                            try {
                                const data = await register.mutateAsync({ email, password, storeName })
                                if (data) {
                                    setTimeout(() => {
                                        resolve(data)
                                        resetForm()
                                        setSubmitting(false)
                                    }, 8000)
                                }
                            } catch (e) {
                                reject(e)
                                setSubmitting(false)
                            }
                        }), {
                            error: (e) => e.message,
                            loading: 'Signing you up...',
                            success: 'Signed successfully'
                        })
                    }}
                >
                    {({ handleSubmit, isSubmitting, values }) => (
                        <form className="w-full px-[20px] md:px-[28px] flex flex-col gap-4" onSubmit={handleSubmit}>
                            <Field
                                className='border-0  bg-discord-dark-2'
                                name="email" id="email" type="email" placeholder="Email Address" as={TextField} />
                            <Field
                                className='border-0 bg-discord-dark-2'
                                name="storeName" id="storeName" type="text" placeholder="Store Name" as={TextField} />
                            <Field
                                className='border-0 bg-discord-dark-2'
                                name="password" id="password" type="text" placeholder="Password" as={TextField} />
                            <div className="mt-5">
                                <span className='text-[14px] text-sm items-center flex gap-2 text-left text-[#b9bbbe]'>

                                    <Field
                                        type="checkbox"
                                        name="agreeTos"
                                        as={CheckBoxField} />
                                    <div>
                                    I agree to the
                                    <Link
                                        to={'/#'}
                                        replace={true}
                                        className='text-discord-blue hover:underline'
                                    >
                                        {" "}
                                        Terms of Service
                                        {" "}
                                    </Link>
                                    and
                                    <Link
                                        to={'/#'}
                                        replace={true}
                                        className='text-discord-blue hover:underline'
                                    >
                                        {" "}
                                        Privacy Statement
                                        {" "}
                                    </Link>
                                    </div>
                                </span>
                            </div>
                            <div className="mt-1">
                                <span className='text-[14px] text-sm items-center flex gap-2 text-left text-[#b9bbbe]'>

                                    <Field
                                        type="checkbox"
                                        name="subscribeEmail"
                                        as={CheckBoxField} />
                                    (Optional) It's ok to send me updates with company tips ans special offers. You can opt out at any time.
                                </span>
                            </div>
                            <div className='w-full mt-3'>
                                <button className='bg-discord-purple text-white h-[48px] px-[24px] w-full hover:bg-discord-dark-2 flex items-center justify-center relative rounded-md text-base font-semibold' type='submit' disabled={isSubmitting}>Continue</button>
                            </div>
                            <Link
                                to={'/login'}
                                replace={true}
                                className='text-discord-blue hover:underline text-sm font-normal text-left'
                            >
                                Already have an account?
                            </Link>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register