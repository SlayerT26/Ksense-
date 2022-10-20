const table = document.querySelector('h2')

// const handler = async () => {
//     try {
//         const url = 'https://jsonplaceholder.typicode.com/users'
//         const res = await axios.get(url)
//         const info = res.data[0]
//         console.log(info)
//         return info
//     }
//     catch(error) {
//         console.log(error)
//     }
    
// }
handler()
function getName(data) {
    table.textContent = data.name
    return data
}