import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
  return (
   <>
   <h1>oops error!!</h1>
   <p>{error.status} - {error.statusText}</p>
   <p>{error.data}</p>
   </>
  )
}

export default Error