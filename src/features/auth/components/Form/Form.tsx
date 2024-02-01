import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginRequestSchema } from '../../auth.dto'
import { zodResolver } from '@hookform/resolvers/zod'

const Form = () => {
  const methods = useForm({
    resolver: zodResolver(LoginRequestSchema),
  })

  const onSubmit = () => {}

  return (
    <>
      <FormProvider {...methods}>
        <form
          id="userLoginForm"
          className=""
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div id="userLoginForm__header">form</div>
          <div id="userLoginForm__body"></div>
          <div id="userLoginForm__submitButton"></div>
        </form>
      </FormProvider>
    </>
  )
}

export default Form
