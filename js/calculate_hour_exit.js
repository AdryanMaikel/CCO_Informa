function transformInTimeDelta(time) {
  time = String(time)
  const [hours, minutes] = time.split(':').map(Number)
  return { hours, minutes }
}

function calculateHourExit(schedules = {}) {
  const {
    journey = '07:10',
    startJourney = '17:00',
    startInterval = '17:00',
    endInterval = '17:30'
  } = schedules

  const journeyDelta = transformInTimeDelta(journey)
  const startJourneyDelta = transformInTimeDelta(startJourney)
  const startIntervalDelta = transformInTimeDelta(startInterval)
  const endIntervalDelta = transformInTimeDelta(endInterval)

  const totalInterval =
    (endIntervalDelta.hours * 60 + endIntervalDelta.minutes) -
    (startIntervalDelta.hours * 60 + startIntervalDelta.minutes)

  const totalJourney = {
    hours: journeyDelta.hours + Math.floor(totalInterval / 60),
    minutes: journeyDelta.minutes + totalInterval % 60,
  }

  const endJourney = {
    hours: startJourneyDelta.hours + totalJourney.hours,
    minutes: startJourneyDelta.minutes + totalJourney.minutes,
  }

  if (endJourney.hours >= 24){
    endJourney.hours -= 24
  }
  if (endJourney.minutes >= 60){
    endJourney.hours += 1
    endJourney.minutes -= 60
  }
  
  return `${String(endJourney.hours).padStart(2, '0')}:${String(endJourney.minutes).padStart(2, '0')}`
}

/* testes
var start_journey = '14:00'
var start_interval = '17:00'
var end_interval = '17:30'

const hour_exit = calculateHourExit( {
  startJourney: start_journey,
  startInterval: start_interval,
  endInterval: end_interval
})
console.log(hour_exit)
*/

export { calculateHourExit }