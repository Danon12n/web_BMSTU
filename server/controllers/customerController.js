const db = require("../dbHandler/dbPets");

class customerController {
    async getPets(request, response) {
        let pets;
        await db.getPets().then((data) => (pets = data));

        return response.json(pets);
    }
}

module.exports = new customerController();
