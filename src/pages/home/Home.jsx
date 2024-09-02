
import BestDeal from "../../components/bestDeal/BestDeal"
import HomeFeatured from "../../components/HomeFeatured/HomeFeatured"
import HomeProperties from "../../components/HomeProperties/HomeProperties"
import Slider from "../../components/slider/Slider"
import VideoSection from "../../components/videoSection/VideoSection"



function Home() {
  return (
    <div>
      <Slider/>
      <HomeFeatured/>
      <VideoSection/>
      <BestDeal/>
      <HomeProperties/>
      

    </div>
  )
}

export default Home
