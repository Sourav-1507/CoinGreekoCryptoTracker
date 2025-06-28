import Cointable from "../cointable/cointable";
import Banner from "../Component/Banner/Banner";
import Navbar from "../Component/Navbar/Navbar";

function Home(){
    return(
        <div>
          <Navbar />
          <Banner />
          <Cointable />
        </div>
    )
}
export default Home;