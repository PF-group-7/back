const test = async ( request , response) => {
    try {
        const message = "hello world"
        response.status(200).send(message)
    } catch (error) {
        response.status(400).send("error")
    }
}