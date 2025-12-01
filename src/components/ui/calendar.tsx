import { DayPicker } from 'react-day-picker'
import type { DayPickerProps } from 'react-day-picker'

import { cn } from '@/lib/utils'

export type CalendarProps = DayPickerProps

export function Calendar({ className, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn('p-3', className)}
      showOutsideDays
      fixedWeeks
      {...props}
    />
  )
}

export default Calendar


