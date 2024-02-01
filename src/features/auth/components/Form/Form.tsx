import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LoginRequest, LoginRequestSchema } from '../../auth.dto'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginMutation } from '../../auth.api'

const Form = () => {
  const [login, result] = useLoginMutation()

  const methods = useForm<LoginRequest>({
    resolver: zodResolver(LoginRequestSchema),
  })

  const navigateToHomePage = () => {
    // navigate to home page
  }

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    await login({ username: data.username, password: data.password })
    result && navigateToHomePage()
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
          {result.isLoading ? <div>Loading...</div> : <div id="userLoginForm__body">ddsds</div>}
          <div id="userLoginForm__submitButton"></div>
        </form>
      </FormProvider>
    </>
  )
}

export default Form
