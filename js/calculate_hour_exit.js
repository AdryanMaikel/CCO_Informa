function transformInTimeDelta(time) {
  time = typeof time === 'string' ? time : String(time);
  time = time.length === 3 && time.indexOf(':') === -1 ? `0${time[0]}:${time.slice(1)}` : time;
  time = time.length === 4 && time.indexOf(':') === -1 ? `${time.slice(0, 2)}:${time.slice(2)}` : time;

  const [hours, minutes] = time.split(':').map(Number);
  return { hours, minutes };
}

function formatTime(time) {
  return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`;
}

function calculateHourExit(
  journey = '07:10',
  startJourney = '17:00',
  startInterval = '17:00',
  endInterval = '17:30'
) {
  const journeyDelta = transformInTimeDelta(journey);
  const startJourneyDelta = transformInTimeDelta(startJourney);
  const startIntervalDelta = transformInTimeDelta(startInterval);
  const endIntervalDelta = transformInTimeDelta(endInterval);

  const totalInterval =
    (endIntervalDelta.hours * 60 + endIntervalDelta.minutes) -
    (startIntervalDelta.hours * 60 + startIntervalDelta.minutes);

  const totalJourney = {
    hours: journeyDelta.hours + Math.floor(totalInterval / 60),
    minutes: journeyDelta.minutes + totalInterval % 60,
  };

  const endJourney = {
    hours: startJourneyDelta.hours + totalJourney.hours,
    minutes: startJourneyDelta.minutes + totalJourney.minutes,
  };

  if (endJourney.hours >= 24){
    endJourney.hours -= 24
  }
  if (endJourney.minutes >= 60){
    endJourney.hours += 1
    endJourney.minutes -= 60
  }

  return (
    // `Duração do Intervalo: ${formatTime({ hours: Math.floor(totalInterval / 60), minutes: totalInterval % 60 })}\n` +
    formatTime(endJourney)
  );
}

// Example usage:
// calculateHourExit({
//   startJourney: prompt('Início da jornada: '),
//   startInterval: prompt('Início do intervalo: '),
//   endInterval: prompt('Fim do intervalo: '),
// });

var start_journey = '14:00'
var start_interval = '17:00'
var end_interval = '17:55'


const hour_exit = calculateHourExit('07:10', start_journey, start_interval, end_interval)
console.log(hour_exit)

export { calculateHourExit }