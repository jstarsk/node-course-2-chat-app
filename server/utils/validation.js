/**
 * Created by starsky on 4/26/17.
 */
let isRealString = (str) => {
    return typeof  str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};