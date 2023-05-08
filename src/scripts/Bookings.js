import { getBookings, getBands, getVenues } from "./database.js";

const Bookings = getBookings()
const Bands = getBands()
const Venues = getVenues()


const findBand = (booking, allBands) => {
    let bandName = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bandName = band
        }
    } return bandName
}

const findVenue = (booking, allVenues) => {
    let venueName = null

    for (const venue of allVenues) {
        if (venue.id === booking.VenueId) {
            venueName = venue
        }
    } return venueName
}

export const bookingList = () => {
    let html = "<section class = 'topSection'> <h2>All Bookings</h2> <ul class ='topList'>"

    for (const booking of Bookings) {
        const Venue = findVenue(booking, Venues)
        const Band = findBand(booking, Bands)

        html += `<li data-type = "bookingItem" data-bandId = ${booking.bandId}>${Band.name} are playing at ${Venue ? Venue.name : 'unknown'} on ${new Date(booking.dateOfBooking).toLocaleDateString()}</li>`
    }
    html += "</ul></section>"
    return html
}

addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const bookingForeign = itemClicked.dataset.bandid
        let html = ""
        if (itemClicked.dataset.type === 'bookingItem') {
            for (const band of Bands) {
                if (band.id === parseInt(bookingForeign)) {
                    html = `
                            ${band.name}
                            ${band.genre}
                             year Formed:${band.yearPerformed}
                             ${band.numMembers} band members`
                }
            }window.alert(html)
        }
    }
)
