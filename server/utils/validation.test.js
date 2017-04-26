/**
 * Created by starsky on 4/26/17.
 */
let expect = require('expect');

 // import isRealString
 const {isRealString} = require('./validation');


 describe('isRealString', () => {
    it('shloud reject non-string values', () => {
        let res = isRealString(98);
        expect(res).toBe(false)
    });

    it('should reject string with only spaces', () => {
        let res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('should allow string width non-space characters', () => {
        let res = isRealString('   Starsky  ');
        expect(res).toBe(true);
    });
 });