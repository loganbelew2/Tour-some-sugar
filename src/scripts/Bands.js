import { getBands, getBookings, getVenues } from "./database.js";
const Bookings = getBookings()
const Bands =getBands()
const Venues = getVenues()
export const bandList = () => {
    let html = `<section class = "bottomSection"><h2>Bands</h2> <ul class = 'bottomList'>`
    for (const band of Bands) {
        html += `<li data-type = "band" data-id = ${band.id}>${band.name}</li>`
    }
    html += `</ul></section>`
    return html
}


addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let html = ""
        if (itemClicked.dataset.type === "band") {
             
        for (const booking of Bookings) {
            if (booking.bandId === parseInt(itemClicked.dataset.id)) {
                for (const venue of Venues) {
                    if (venue.id === booking.VenueId) {
                        html += `We perform at ${venue.name} `
                    }
                }
            }
        }window.alert(html)
        }
}
)