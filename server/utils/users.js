/**
 * Created by starsky on 4/26/17.
 */
// [
//     {
//         id: '/#12poicdcece',
//         name: 'starsky',
//         room: 'The office Fans'
//     }
// ]

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        let user = {
            id,
            name,
            room
        };
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        let user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room) {
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};
