const database = {
    Venues: [
        { id: 1, name: "The Velvet Lounge", address: '2704 New valley Point', squareFeet: 3100, maxOccupancy: 300 },
        { id: 2, name: "The sapphire Ballroom", address: '1301 Scarlet Drive', squareFeet: 4500, maxOccupancy: 400 },
        { id: 3, name: "The Diamond Plazza", address: '2606 Haven Court', squareFeet: 2200, maxOccupancy: 250 },
        { id: 4, name: "The Red Rose Theatre", address: '1883 Thompson Lane', squareFeet: 6000, maxOccupancy: 490 },
        { id: 5, name: "The Crystal Palace", address: '1105 Hardy Place', squareFeet: 4950, maxOccupancy: 399 },
    ],
    Bands: [
        { name: "The Beatles", id: 1, numMembers: 4, genre: "Rock", yearPerformed: 1970 },
        { name: "Led Zeppelin", id: 2, numMembers: 4, genre: "Rock", yearPerformed: 1980 },
        { name: "The Rolling Stones", id: 3, numMembers: 4, genre: "Rock", yearPerformed: 2021 },
        { name: "AC/DC", id: 4, numMembers: 5, genre: "Rock", yearPerformed: 2020 },
        { name: "Metallica", id: 5, numMembers: 4, genre: "Metal", yearPerformed: 2019 },
        { name: "Pink Floyd", id: 6, numMembers: 5, genre: "Rock", yearPerformed: 1995 },
        { name: "Nirvana", id: 7, numMembers: 3, genre: "Grunge", yearPerformed: 1994 },
        { name: "Red Hot Chili Peppers", id: 8, numMembers: 4, genre: "Alternative rock", yearPerformed: 2022 },
        { name: "Guns N' Roses", id: 9, numMembers: 5, genre: "Rock", yearPerformed: 2020 },
        { name: "The Who", id: 10, numMembers: 4, genre: "Rock", yearPerformed: 2019 }
    ],
    Bookings: [
        { id: 1, bandId: 7, VenueId: 1, dateOfBooking:1644806400000 },
        { id: 2, bandId: 4, VenueId: 5, dateOfBooking: 1647532800000 },
        { id: 3, bandId: 1, VenueId: 3, dateOfBooking: 1650643200000 },
        { id: 4, bandId: 1, VenueId: 4, dateOfBooking: 1653840000000 },
        { id: 5, bandId: 8, VenueId: 2, dateOfBooking: 1654636800000},
        { id: 6, bandId: 10, VenueId: 5, dateOfBooking: 1658265600000 },
        { id: 7, bandId: 2, VenueId: 1, dateOfBooking: 1661558400000 },
        { id: 8, bandId: 9, VenueId: 2, dateOfBooking: 1640995200000 },
    ]
}


export const getVenues = () => {
    return structuredClone(database.Venues)
}

export const getBands = () => {
    return structuredClone(database.Bands)
}

export const getBookings = () => {
    return structuredClone(database.Bookings)
}