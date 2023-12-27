function transform_in_time_delta(time) {
  time = String(time)
  const [hours, minutes] = time.split(':').map(Number)
  return { hours, minutes }
}

function calculate_hour_exit(schedules = {}) {
  const {
    journey = '07:10',
    start_journey = '13:00',
    start_interval = '17:00',
    end_interval = '17:30'
  } = schedules

  const journey_delta = transform_in_time_delta(journey)
  const start_journey_delta = transform_in_time_delta(start_journey)
  const start_interval_delta = transform_in_time_delta(start_interval)
  const end_interval_delta = transform_in_time_delta(end_interval)

  const total_interval =
    (end_interval_delta.hours * 60 + end_interval_delta.minutes) -
    (start_interval_delta.hours * 60 + start_interval_delta.minutes)

  const total_journey = {
    hours: journey_delta.hours + Math.floor(total_interval / 60),
    minutes: journey_delta.minutes + total_interval % 60,
  }

  const end_journey = {
    hours: start_journey_delta.hours + total_journey.hours,
    minutes: start_journey_delta.minutes + total_journey.minutes,
  }

  while (end_journey.minutes >= 60){
    end_journey.hours += 1
    end_journey.minutes -= 60
  }

  if (end_journey.hours >= 24){
    end_journey.hours -= 24
  }

  const hours = String(end_journey.hours).padStart(2, '0')
  const minutes = String(end_journey.minutes).padStart(2, '0')
  return `${hours}:${minutes}`
}

/* testes
var start_journey = '14:00'
var start_interval = '17:00'
var end_interval = '17:30'

const hour_exit = calculate_hour_exit( {
  start_journey: start_journey,
  start_interval: start_interval,
  end_interval: end_interval
})
console.log(hour_exit)
*/

export { calculate_hour_exit }