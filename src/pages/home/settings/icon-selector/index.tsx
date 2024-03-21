import EmojiPicker, { type EmojiClickData } from 'emoji-picker-react'

import { usePreferences } from '../../../../store/preferences'

export function IconSelector() {
  const changeIcon = usePreferences(state => state.changeIcon)

  function handleEmojiClick(data: EmojiClickData) {
    changeIcon(data.emoji)
  }

  return (
    <div>
      <EmojiPicker width={380} onEmojiClick={handleEmojiClick} />
    </div>
  )
}
