import Header from "../components/Header"
import Navbar from "../components/Navbar"
import linkedin from "../assets/linkedin_logo.png"
import github from "../assets/github_logo.png"
import gmail from "../assets/gmail_logo.png"

function Links(){
    return(
        <>
            <Header/>
            <Navbar/>
            <div className="link-box">

                <h1>Relevant Links:</h1>
                    
                    <div className="link-items">
                        <ul> 
                            <li>
                                <a href="https://www.linkedin.com/in/jet-dong-b80830289/"> 
                                    <img id="linkedin-icon" src={linkedin} alt="linkedin logo"/>
                                </a>
                                My Linkedin profile
                            </li>
                            <li>
                                <a href="https://github.com/jet5378"> 
                                    <img id="github-icon" src={github} alt="github logo"/>
                                </a>
                                My Github projects
                            </li>
                        </ul>
                    </div>
            </div>

            <div className="socials">
                <h1>Other ways to contact me</h1>

                <ul>
                    <li>
                        <img src={gmail} alt="gmail logo"/>
                        Email me at: jet.dong5378@gmail.com
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Links