const hotelNames = ['hotel1', 'hotel2', 'hotel3'];

const hotels = [
    {
        region: '',
        number: 0,
        category: 'Standard',
        occupation: 'empty'
    },
    {
        region: '',
        number: 0,
        category: 'Standard',
        occupation: 'empty'
    },
    {
        region: '',
        number: 0,
        category: 'Standard',
        occupation: 'empty'
    }
]

const verifyName = (hotelName) => {
    if (hotelNames[hotelName].length > 150) {
        return 'invalid Name!';
    } else {
    return 'works' 
}
};


console.log(verifyName(0));