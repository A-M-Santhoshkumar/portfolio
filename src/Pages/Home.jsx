import HeroSection from "../Components/HomeComponets/HeroSection"
import Section1 from "../Components/HomeComponets/Section1"
import Section3 from "../Components/HomeComponets/Section3"
import Section4 from "../Components/HomeComponets/Section4"
import Section5 from "../Components/HomeComponets/Section5"
import LastContact from "../Components/HomeComponets/LastContact"






function Home(){
    return(
        <div>
            <HeroSection/>
            <Section1/>

            <Section3/>
            <Section4/>
            <Section5/>
            <LastContact/>
        </div>
    )
}
export default Home;