export interface ISession {
  startDate: string
  startTime: string
  endTime: string
  place: string
}

export const getSessionString = (session: ISession): string => {
  const startDate = new Date(session.startDate)

  return `${startDate.toLocaleDateString('hu', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })} ${session.startTime} - ${session.endTime}`
}
