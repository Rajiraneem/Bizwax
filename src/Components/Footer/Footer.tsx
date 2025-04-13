import insta from "../../assets/ri_instagram-fill.png"
import facebook from "../../assets/ic_outline-facebook.png"
import linkedin from "../../assets/mdi_linkedin.png"
const Footer = () => {
    return (
        <section className='bg-white'>
            <div className='grid grid-cols-2 border-b-1 border-[#254c6a]'>
                <div className='p-4'>
                    <h2 className='font-[poppins] text-[15px] font-extrabold mb-2'>Contact For More</h2>
                    <h3 className='font-[poppins] text-[13px] font-semibold'>91-8129733687</h3>
                    <h3 className='font-[poppins] text-[13px] font-semibold'>966-592336275</h3>
                </div>
                <div className="flex overflow-hidden mt-[58px] justify-evenly ">
                    <a href="https://www.instagram.com/missionmeansprojects/"> <img src={insta} alt="" className=" w-[35px] h-[35px]" /></a>
                    <a href="https://www.linkedin.com/company/mission-means-consulting-service/"><img src={facebook} alt="" className=" w-[35px] h-[35px]" /></a>
                    <a href="https://www.facebook.com/missionmeans"><img src={linkedin} alt="" className=" w-[35px] h-[35px]" /></a>
                </div>
            </div>
            <div className="text-center mt-2.5 mb-3">
                <h4 className="text-[16px] mb-2.5 font-[Inter]">© Mission Means Consulting All Rights Reserved </h4>
                <h6 className="font-[Inter] text-[15px]">Powered by <a
                    href="https://wa.me/+919544038022"><span className="text-[20px] text-[#874dac]" style={{ fontFamily: 'BauhausCustom' }}>invitech.ai</span></a> </h6>
            </div>
        </section>

    )
}

export default Footer