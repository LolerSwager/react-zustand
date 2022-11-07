import { useEffect } from "react"
import { MainWrapper } from "./ContainerWrapper.Styled"

const Page = ({ title, description, withHeader, children }) => {
    /* console.log(props) */
    /* const { title, description, withHeader } = props */

    useEffect(() => {
        document.title = `${title}`
        window.scrollTo(0, 0)
        if (description) {
            document
                .querySelector('meta[name="description"]')
                .setAttribute("content", description)
        }
    }, [title, description])

    return (
        <>
            <MainWrapper>
                <article>
                    {withHeader && <h1>{title}</h1>}
                    {children}
                </article>
            </MainWrapper>
        </>
    )
}

export default Page
