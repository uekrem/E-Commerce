import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const AuthNotAccess = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.authR)
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }
  if (isLoading) {
    return 'Loading...'
  }
  return children
}