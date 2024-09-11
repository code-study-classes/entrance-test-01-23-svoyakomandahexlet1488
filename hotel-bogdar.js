const hotelNames = ['hotel1', 'hotel2', 'hotel3'];

const hotels = [
    {
        name: hotelNames[0],
        region: 'Canada',
        roomFond: [
            {
                number: '101',
                category: 'Standard',
                occupation: 'empty',
                capacity: 2,
            },
        ],
    },
    {
        name: hotelNames[1],
        region: 'Police',
        roomFond: [
            {
                number: '35',
                category: 'Standard',
                occupation: 'empty',
                capacity: 2,
            },
        ],
    },
    {
        name: hotelNames[2],
        region: 'Himki',
        roomFond: [
            {
                number: '7',
                category: 'Standard',
                occupation: 'empty',
                capacity: 2,
            },
        ],
    },
];

const verifyName = (hotelName) => {
    if (hotelName.length > 150) {
        return 'Invalid Name!';
    } else {
        return 'Valid Name';
    }
};


console.log(verifyName(hotel.name));