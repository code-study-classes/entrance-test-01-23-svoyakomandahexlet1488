const hotelNames = ['hotel1', 'hotel2', 'hotel3'];

const hotels = [
    {
        region: '',
        number: 0,
        category: 'Standard',
<<<<<<< HEAD
=======
        spaces: '',
>>>>>>> refs/remotes/origin/main
        occupation: 'empty'
    },
    {
        region: '',
        number: 0,
<<<<<<< HEAD
        category: 'Standard',
=======
        category: 'Lux',
        spaces: '',
>>>>>>> refs/remotes/origin/main
        occupation: 'empty'
    },
    {
        region: '',
        number: 0,
<<<<<<< HEAD
        category: 'Standard',
=======
        category: 'Apartment',
        spaces: '',
>>>>>>> refs/remotes/origin/main
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

<<<<<<< HEAD

=======
const changeOccupation = (hotel) => {
    if (hotels[hotel].occupation === 'empty') {
        hotels[hotel].occupation = 'taken';
    } else {
    hotels[hotel].occupation = 'empty';
    }
return hotels[hotel];
};

const checkSpaces = (hotel) => {
    if (hotels[hotel].category === 'Standard' || hotels[hotel].category === 'Lux') {
        hotels[hotel].spaces = 2;
    } else {
        hotels[hotel].spaces = 4;
    }
    return hotels[hotel];
}


console.log(checkSpaces(2));
>>>>>>> refs/remotes/origin/main
console.log(verifyName(0));