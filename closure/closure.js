//Una función puede tener otra función dentro
//son funciones anidadas
function greeting() {
    let userName = 'Oscar'

    function displayUserName() {
        return `Hello ${userName}`
    }
    return displayUserName
}

const saludo = greeting()
console.log(saludo);
console.log(saludo());