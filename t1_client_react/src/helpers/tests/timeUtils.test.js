import { timestampToDateString } from './../timeUtils';

describe('helpers - timeUtils', () => {
    // Arrange
    const specificTimestamp = 1492039993;
    const specificDateString = '01/18/1970';

    it('should return the proper role', () => {
        // Act
        const result = timestampToDateString(specificTimestamp);

        // Assert
        expect(result).toEqual(specificDateString);
    });
})
