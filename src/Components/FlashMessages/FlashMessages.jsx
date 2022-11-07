import { FlashMessage } from "./FlashMessagesStyled"
import { useFlashMessagesStore } from "./useFlashMessagesStore"

const FlashMessages = () => {
    const { FlashMessages, FlashDuration } = useFlashMessagesStore()
    return
    FlashMessages &&
        FlashMessages.map((msg, i) => (
            <FlashMessage FlashDuration={FlashDuration} key={i}>
                <div>{msg}</div>
            </FlashMessage>
        ))
}
export default FlashMessages
