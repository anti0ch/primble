import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the prime number in 6 tries. After each guess, the color of the
        tiles will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="1" status="correct" />
        <Cell value="2" />
        <Cell value="0" />
        <Cell value="7" />
        <Cell value="1" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 1 is in the 5-digit prime and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" />
        <Cell value="7" />
        <Cell value="2" status="present" />
        <Cell value="2" />
        <Cell value="3" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 2 is in the 5-digit prime but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="5" />
        <Cell value="3" />
        <Cell value="4" />
        <Cell value="7" status="absent" />
        <Cell value="9" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 7 is not in the 5-digit prime in any spot.
      </p>
    </BaseModal>
  )
}
