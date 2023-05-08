import { bandList } from "./Bands.js"
import { bookingList } from "./Bookings.js"
import { venueList } from "./Venues.js"

const mainContainer = document.querySelector("#bookingSection")
const venues = venueList()
const bands = bandList()
const bookings = bookingList()
mainContainer.innerHTML = bookings

const secondContainer = document.querySelector("#venueBandSection")
secondContainer.innerHTML = venues + bands