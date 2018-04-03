import mergeSchedules from './merged_schedules'

test('merged same start time', () => {
  const schedules = [{startTime: 1, endTime: 3}, {startTime: 1, endTime: 4}, {startTime: 1, endTime: 9}]
  expect(mergeSchedules(schedules)).toEqual([{startTime: 1, endTime: 9}])
})

test('merged same end time', () => {
  const schedules = [{startTime: 1, endTime: 9}, {startTime: 2, endTime: 9}, {startTime: 3, endTime: 9}]
  expect(mergeSchedules(schedules)).toEqual([{startTime: 1, endTime: 9}])
})

test('merged two overlapping times into 1 schedule', () => {
  const schedules = [{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]
  expect(mergeSchedules(schedules)).toEqual([{startTime: 1, endTime: 4}])
})

test('merged multiple overlapping times into condensed schedules', () => {
  const schedules = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10}
  ]

  expect(mergeSchedules(schedules)).toEqual([
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12}
  ])
})

test('merged multiple overlapping times into 1 schedule', () => {
  const schedules = [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
  ]

  expect(mergeSchedules(schedules)).toEqual([
    {startTime: 1, endTime: 10}
  ])
})


