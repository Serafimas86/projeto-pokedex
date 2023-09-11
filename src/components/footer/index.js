import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import gitHub from '../../images/github.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin-in.svg'
import { FooterBar, Icons } from "./styled"

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <FooterBar theme={ theme }>
            <a href="https://github.com/Serafimas86" target="_blank" rel="noreferrer"><Icons src={ gitHub } theme={ theme }/></a>
            <a  href="https://instagram.com/aline.serafim86?utm_source=qr&igshid=MzNINGNkZWQ4Mg==" target="_blank" rel="noreferrer" ><Icons src={ instagram }/></a>
            <a  href="https://www.linkedin.com/in/aline-serafim-ba10a4213/" target="_blank" rel="noreferrer" ><Icons src={ linkedin }/></a>
        </FooterBar>
    )

}

export { Footer }