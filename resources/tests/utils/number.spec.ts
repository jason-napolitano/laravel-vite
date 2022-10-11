import * as number from '../../utils/number'

describe('Testing the number utility library', () => {
    test('A number should be converted into a comma separated string', () => {
        // What do we expect to happen?
        expect(number.thousandsSeparator(1000)).toEqual('1,000')
    });
});
