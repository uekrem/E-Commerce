import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const AuthLoginPermission = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.authR)
  if (!isAuthenticated) {
    return <Navigate to="/SignIn" replace />
  }
  if (isLoading) {
    return 'Loading...'
  }
  return children
}