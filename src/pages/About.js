import Header from "../components/Header"
import Navbar from "../components/Navbar"

function About(){
    return(
        <>
            <Header/>
            <Navbar/>
            <div className="education-box">
                <h1>Education:</h1>
                    <h3>McGill University: (2020-2024)</h3>
                        <p>-Bachelor of Science: Major in Computer Science</p>
            </div>

        </>
    )
}

export default About