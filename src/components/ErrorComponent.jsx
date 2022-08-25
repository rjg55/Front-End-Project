const ErrorComponent = ({status, message}) => {

    return (
        <>
        <h1>Error: {status}</h1>
        <h3>{message}</h3>
        </>
    )
}

export default ErrorComponent