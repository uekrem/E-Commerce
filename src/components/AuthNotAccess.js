import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const AuthNotAccess = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.authR)
  const { isLoadingPersonal } = useSelector((state) => state.personalSpaces)
  if (isAuthenticated) {
    return <Navigate to="/Profile" replace />
  }
  if (isLoading || isLoadingPersonal) {
    return 'Loading...'
  }
  return children
}