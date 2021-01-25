import { default as Calendar } from './calendar.svelte'
import { default as InlineCalendar } from './inline_calendar.svelte'
import { default as CalendarController } from './controller'

Calendar.Inline = InlineCalendar

export { Calendar, InlineCalendar, CalendarController }
export default Calendar
