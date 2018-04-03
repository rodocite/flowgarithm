// @flow

export default (schedules: { startTime: number, endTime: number }[]): { startTime: number, endTime: number }[] => {
  const sortedSchedules = schedules.sort((a, b) => a.startTime > b.startTime ? 1 : -1)
  const mergedSchedules: { startTime: number, endTime: number }[] = [sortedSchedules[0]]
  let lastMerged

  sortedSchedules.forEach((schedule) => {
    const { startTime, endTime } = schedule
    lastMerged = mergedSchedules[mergedSchedules.length - 1]

    if (startTime > lastMerged.startTime && startTime > lastMerged.endTime) {
      mergedSchedules.push(schedule)
    } else {
      lastMerged = {
        startTime: Math.min(startTime, lastMerged.startTime),
        endTime: Math.max(lastMerged.endTime, endTime)
      }

      mergedSchedules[mergedSchedules.length - 1] = lastMerged
    }
 })

  return mergedSchedules
}