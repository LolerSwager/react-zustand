import { useFlashMessagesStore } from "../Components/FlashMessages/useFlashMessagesStore"
import Page from "../Components/MetaTags/Page"
import { useModalStore } from "../Components/Modal/useModalStore"
import Login from "./Login/Login"
export default function Home() {
    const { setModalPayload } = useModalStore()
    const { setFlashMessage } = useFlashMessagesStore()
    return (
        <Page title="somthing 2" withHeader>
            min fede app
            <button onClick={() => setModalPayload("noget text")}>modal with text</button>
            <button onClick={() => setModalPayload(<Login />)}>Login</button>
            <button onClick={() => setFlashMessage("hej med dig ")}>Flash msg</button>
        </Page>
    )
}
