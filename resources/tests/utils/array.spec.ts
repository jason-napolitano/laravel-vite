import * as array from '../../utils/arrays'

describe('Testing the array utility library', () => {
    test('Two arrays should be completely identical', () => {
        // What are our values?
        const array_one = [1,2,3]
        const array_two = [1,2,3]
        // What do we expect to happen?
        expect(array.equals(array_one, array_two)).toBeTruthy();
    });
});