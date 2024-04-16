import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from './Loading';
import jsCookie from 'js-cookie';

export const AuthLoginPermission = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.authR)
  const { isLoadingPersonal } = useSelector((state) => state.personalSpaces)
  if (!isAuthenticated && jsCookie.get("auth") === undefined) {
    return <Navigate to="/SignIn" replace />
  }
  if (isLoading || isLoadingPersonal){
    return <Loading />
  }
  return children
}