let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function counterCharacter(value) {
    return value.length
}

user.forEach(user => {
    if (counterCharacter(users) <5) {
        console.log("c'est un prénom long de plus de 5 lettres.")
    } else {
        console.log("ce n'est pas du tout un prénom long.")
    }
});