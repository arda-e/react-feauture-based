import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '@/features/auth'
import { User, Role } from '@/features/auth/auth.types'

const isCurrentUserAuthorized = (user: User, allowedRoles: Role[]) => {
  return user.roles.find((role) => allowedRoles.includes(role))
}

const RequireAuth = ({ allowedRoles }: { allowedRoles: Role[] }) => {
  const user = useSelector(selectCurrentUser)
  const location = useLocation()

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    )
  }

  if (isCurrentUserAuthorized(user, allowedRoles)) {
    return <Outlet />
  }

  return (
    <Navigate
      to="/unauthorized"
      state={{ from: location }}
      replace
    />
  )
}

export default RequireAuth
