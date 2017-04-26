/**
 * Created by starsky on 4/26/17.
 */

const expect = require('expect');

const {Users} = require('./users');


beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: 'Jose',
        room: 'Steeling the Fire'
    }, {
        id: '2',
        name: 'Starsky',
        room: 'Steeling the Technology'
    }, {
        id: '4',
        name: 'Lara',
        room: 'Steeling the Fire'
    }];
});

describe('Users', () => {
    it('shlould add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Starsky',
            room: 'free your mind'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Steeling the Fire', () => {
        let userList = users.getUserList('Steeling the Fire');

        expect(userList).toEqual(['Jose', 'Lara']);
    });

    it('should return names for Steeling the Technology', () => {
        let userList = users.getUserList('Steeling the Technology');

        expect(userList).toEqual(['Starsky']);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = 'abs';
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });
});
