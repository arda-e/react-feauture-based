import React from 'react'
import { FormProvider, SubmitHandler } from 'react-hook-form'
import useLoginForm from './useLoginForm'
import { LoginRequest } from '../../auth.dto'

const Form = () => {
  const { login, result, methods, navigateToHomePage } = useLoginForm()

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    await login({ username: data.username, password: data.password })
  }

  if (result.isSuccess) navigateToHomePage()

  return (
    <>
      <FormProvider {...methods}>
        <form
          id="userLoginForm"
          className="bg-white shadow-md shadow-gray-200 rounded-md px-8 pt-6 pb-8 mb-4 border-gray-200 border-2 flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div
            id="userLoginForm__header"
            className="font-semibold text-3xl text-gray-600"
          >
            Login
          </div>
          {result.isLoading ? (
            <div>Loading...</div>
          ) : (
            <div
              id="userLoginForm__body"
              className="flex flex-col gap-4 my-4"
            >
              {/**
               * //TODO: Replace input with custom input component
               * */}
              <input
                id="userLoginForm__body__username"
                type="text"
                placeholder="Username"
                {...methods.register('username')}
              />
              <input
                id="userLoginForm__body__password"
                type="text"
                placeholder="Password"
                {...methods.register('password')}
              />
            </div>
          )}
          <div id="userLoginForm__submitContainer">
            {/**
             * //TODO: Replace input with custom input component
             * */}
            <button
              id="userLoginForm__submitContainer__button"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default Form
