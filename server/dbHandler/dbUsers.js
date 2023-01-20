const MySQLRep = require("./MySQLRep");

class UserMySQLRep extends MySQLRep {
    // получение всех пользователей
    async getUsers() {
        this.start();

        return this.connection
            .execute("SELECT * FROM users")
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    // добавить user в базу         // user => Model.User //todo тут можно было сделать обработчик совпадения логинов
    async addUser(user) {
        this.start();
        return this.connection
            .execute(
                "Insert into users (login, password, name, surname, role)" +
                    ` values ('${user.login}', '${user.password}', '${user.name}', '${user.surname}', 'customer')`
            )
            .then((res) => {
                return res;
            })
            .then((data) => {
                this.stop();
                return data;
            });
        //кароче тут catch добавить
    }

    async changeRole(id, role) {
        this.start();
        return this.connection
            .execute(`Update users set role = '${role}' where user_id = ${id}`)
            .then((res) => {
                return res;
            })
            .then((data) => {
                this.stop();
                return data;
            });
        //кароче тут catch добавить
    }

    // найти user по login // login => string
    async getUserByLogin(payload) {
        this.start();
        if (payload.login === "" || payload.login === undefined) {
            return Promise.reject("empty payload");
        }
        return this.connection
            .execute(`Select * from users where login like '${payload.login}'`)
            .then((res) => {
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    // id => int
    async getUserById(payload) {
        this.start();
        if (payload.id === undefined) {
            return Promise.reject("empty payload");
        }
        return this.connection
            .execute(`Select * from users where user_id = '${payload.id}'`)
            .then((res) => {
                console.log(res);
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }

    // id => int
    async deleteUserById(payload) {
        this.start();
        if (payload.id === undefined) {
            return Promise.reject("empty payload");
        }
        return this.connection
            .execute(`Delete from users where user_id = ${payload.id}`)
            .then((res) => {
                console.log(res);
                return res[0];
            })
            .then((data) => {
                this.stop();
                return data;
            });
    }
}

module.exports = new UserMySQLRep();
