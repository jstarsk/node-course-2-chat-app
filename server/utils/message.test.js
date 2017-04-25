/**
 * Created by starsky on 4/25/17.
 */
let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {

        let from = 'Starsky';
        let text = 'Some message';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});