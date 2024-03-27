import { useSelector } from 'react-redux'

export const AuthGhost = ({ children }) => {
  const { isLoading } = useSelector((state) => state.authR)
  const { isLoadingPersonal } = useSelector((state) => state.personalSpaces)
  if (isLoading || isLoadingPersonal) {
    return 'Loading...'
  }
  return children
}