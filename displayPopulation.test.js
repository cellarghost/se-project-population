const { displayPopulation } = require("./displayPopulation copy.js")

// Note - this test does not currently work. displayPopulation returns undefined due to the asynchronous http request, so this test always fails. 

test('displays population of entered country', () => {
    expect(
        displayPopulation('switzerland')
    ).toBe('8654622')
}, 5000 )