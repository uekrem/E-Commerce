import { useSelector } from 'react-redux'

export const AuthGhost = ({ children }) => {
  const { isLoading } = useSelector((state) => state.authR)
  if (isLoading) {
    return 'Loading...'
  }
  return children
}