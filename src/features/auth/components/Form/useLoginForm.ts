import { UseFormReturn, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGetPublicKeyQuery, useLoginMutation } from '../../auth.api'
import { LoginRequest, LoginRequestSchema, LoginResponse } from '../../auth.dto'
import { useNavigate } from 'react-router-dom'
import { UseMutationResult } from '@/stores/api.types'

interface UseLoginFormReturn {
  login: ReturnType<typeof useLoginMutation>[0]
  result: UseMutationResult<LoginResponse>
  methods: UseFormReturn<LoginRequest>
  navigateToHomePage: () => void
}
/**
    @name useLoginForm
    @description This hook is responsible for handling the login form state and logic.
    @returns {Object} The login api, form state and logic methods.
*/
const useLoginForm = (): UseLoginFormReturn => {
  const navigate = useNavigate()
  const [login, result] = useLoginMutation()
  useGetPublicKeyQuery()

  const methods = useForm<LoginRequest>({
    resolver: zodResolver(LoginRequestSchema),
  })

  const navigateToHomePage = () => {
    navigate('/device-list')
  }

  return {
    login,
    result,
    methods,
    navigateToHomePage,
  }
}

export default useLoginForm
