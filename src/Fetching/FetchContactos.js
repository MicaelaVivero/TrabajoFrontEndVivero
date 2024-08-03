export const obtenerContactos = async () => {
    const response = await fetch(
        '/data.json',
        {
            method: "GET"
        }
    )
    const data = await response.json()
    return data
}
