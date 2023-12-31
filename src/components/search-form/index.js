import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-context.js"
import { Form, Input, SearchBtn } from "./styled.js"

const Search = () => {
    const [ name, setName ] = useState('')
    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext)


    function handleSubmit(e) {
        e.preventDefault();
        navigate(`./pokemon/${name}`)
        setName('')
    }

    return(
        <Form onSubmit={ handleSubmit } theme={ theme }>
            <div>
                <Input required value={ name } name="name" type="text" onChange={ e => setName(e.target.value)} placeholder="Search Pokemon by name"/>
                <SearchBtn type="submit" theme={ theme }>Go</SearchBtn>
            </div>
        </Form>
    )
}

export { Search }