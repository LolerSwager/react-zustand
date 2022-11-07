import { useForm } from "react-hook-form"
import styled from "styled-components"
import appService from "../../App/Appservices/App.service"
import { useLoginStore } from "./useLoginStore"


const StyledForm = styled.form`
    background-color: red;
`

export default function Login() {
    const {loggedIn, setLoggedIn, setLogOut, username, user} = useLoginStore()
    const { register, handleSubmit } = useForm()

    const onSubmit = (submitData ) => {
        const fetchResults = async () => {
            try {
                const response = await appService.login(
                    submitData.username,
                    submitData.password
                )

                console.log(response)
                setLoggedIn(true, response.data.username, response.data.user)
            } catch (error) {
                console.error(error)
            }
        }
        fetchResults()
    }

    return (
        <>
        {!loggedIn ? (
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("username", {
                        required: "Brugernavn er påkrævet",
                    })}
                    type="text"
                    autoComplete="username"
                    placeholder="your username"
                />
                <input
                    {...register("password", {
                        required: "kodeord er påkrævet",
                    })}
                    type="password"
                    autoComplete="password"
                    placeholder="your password"
                />
                
                <button>Login</button>
            </StyledForm>
            ): (<>
            <div>du er logged ind som {username} class {user.class}</div>
            <button onClick={()=> setLogOut()}>logout</button>
            </>)}
        </>
    )
}
