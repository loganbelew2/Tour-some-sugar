import { getBands, getBookings, getVenues } from "./database.js";
const Bands = getBands()
const Venues = getVenues()
const Bookings = getBookings()
 export const venueList = () => {
    let html = `<section class= "bottomSection"><h2>available Venues</h2> <ul class = "bottomList">`
    for (const venue of Venues) {
        html += `<li data-type = "venue" data-id = ${venue.id}>${venue.name}</li>`
    }
    html += `</ul></section>`
    return html
 }

addEventListener(
"click",
(clickEvent) => {
    const itemClicked = clickEvent.target
    let html = ""
    if (itemClicked.dataset.type === "venue") {
    for (const booking of Bookings) {
        if (booking.VenueId === parseInt(itemClicked.dataset.id)) {  
           let bandId = booking.bandId
            for (const band of Bands) {
                if (band.id === bandId ) {
                    html += `${band.name} performs here `
                }
            }                    
        }
    }window.alert(html)
}
}
)