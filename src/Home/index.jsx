import Contacts from "../Components/Contacts"
import Experience from "../Components/Experience"
import Header from "../Components/Header"
import On from "../Components/On"
import Projects from "../Components/Projects"
import Stacks from "../Components/Stacks"


const Home = () => {
    return (
        <div>
            <Header />
            <On />
            <Experience />
            <Projects />
            <Stacks />
            <Contacts />
        </div>
    )
}

export default Home