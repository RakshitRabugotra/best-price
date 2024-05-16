import { CardProps } from '@/utils/constants'
import { twMerge } from 'tailwind-merge'

export default function Card(props: CardProps) {
  return (
    <div
      id={props.id}
      className={twMerge(
        'w-full rounded-xl bg-gray-900 p-2 text-lg font-medium',
        props.className,
      )}
    >
      <h2 className='text-amber-400'>{props.heading}</h2>
    </div>
  )
}
