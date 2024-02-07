import React from 'react'
import { FormProvider, SubmitHandler } from 'react-hook-form'
import useLoginForm from './useLoginForm'
import { LoginRequest } from '../../auth.dto'

/**
 * Component for showing details of the user.
 *
 * @component
 */
const Form = () => {
  const { login, result, methods, navigateToHomePage } = useLoginForm()

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    await login({ username: data.username, password: data.password })
    result.isSuccess && navigateToHomePage()
  }

  return (
    <>
      <FormProvider {...methods}>
        <form
          id="userLoginForm"
          className=""
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div id="userLoginForm__header">form</div>
          {result.isLoading ? (
            <div>Loading...</div>
          ) : (
            <div id="userLoginForm__body">
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
