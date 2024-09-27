import Image from 'next/image';
import TeamZeshanSarwar from "@/images/wpa-team-zeeshan-sarwar.png";
import zahrakashif from '@/images/zahra-kashif.png';
import muhammadomerali from "@/images/muhammad-omer-ali.png";
import ShahidAnwer from "@/images/wpa-shahid-anwer.jpg";
import jhazibZaman from "@/images/jhazib-zaman.jpg";
import OurTeambg from '@/images/wpa-our-team-member.png';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 576 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 575, min: 480 },
        items: 2,
        slidesToSlide: 1,
        arrows: true,
    },
    sm_mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
        slidesToSlide: 1,
        arrows: false,
    },
};

const teamMembers = [
    { name: 'Shahid Anwer', designation: 'Chief Technology Officer', image: ShahidAnwer },
    { name: 'Muhammad Zeeshan Sarwar', designation: 'Chief Executive Officer', image: jhazibZaman },
    { name: 'Muhammad Omer Ali', designation: 'Chief Financial Officer', image: muhammadomerali },
    { name: 'Zahra Kashif', designation: 'HR Lead / Project Engineer', image: zahrakashif },
];

const OurTeam = () => {
    return (
        <div className="mt-6 lg:bg-contain bg-cover bg-no-repeat" style={{ backgroundImage: `url(${OurTeambg.src})` }}>
            <div className='md:px-20 xs:px-10 px-5 md:py-10 py-5'>
                <h2 className='xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold mb-4 text-white'>OUR TEAM</h2>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 items-center justify-center'>
                    <div className='rounded-md overflow-hidden border-white shadow-md'>
                        <div className=''>
                            <Image className="w-full" src={TeamZeshanSarwar} alt='Nouman S. Ghuman' />
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>Managing Director</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Nouman S. Ghuman</h4>
                        </div>
                    </div>
                    <div className='rounded-md overflow-hidden border-white shadow-md'>
                        <div className=''>
                            <Image className="w-full" src={TeamZeshanSarwar} alt='Muhammad Zeeshan Sarwar' />
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>Director & Creative Editor</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Muhammad Zeeshan Sarwar</h4>
                        </div>
                    </div>
                    <div className='rounded-md overflow-hidden border-white shadow-md'>
                        <div className=''>
                            <Image className="w-full" src={muhammadomerali} alt='Muhammad Omer Ali' />
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>Chief Financial Officer</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Muhammad Omer Ali</h4>
                        </div>
                    </div>
                    <div className='rounded-md overflow-hidden border-white shadow-md' >
                        <div className=''>
                            <Image className="w-full" src={zahrakashif} alt='Zahra Kashif' />
                        </div>
                        <div className='py-5 px-8 bg-white h-full'>
                            <span className='text-slate-600 2xl:text-base text-sm'>HR Lead / Project Engineer</span>
                            <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>Zahra Kashif</h4>
                        </div>
                    </div>
                </div>

                {/* <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    showDots={false}
                    arrows={false}
                >
                    {teamMembers.map((member, index) => (
                        <div key={index} className='wpa-our-team-common wpa-h4-font-size'>
                            <div className='wpa-our-team-thumbnial'>
                                <Image src={member.image} alt={member.name} />
                            </div>
                            <div className='wpa-h4-font-size wpa-team-content'>
                                <span>{member.designation}</span>
                                <h4>{member.name}</h4>
                            </div>
                        </div>
                    ))}
                </Carousel> */}
            </div>
        </div>
    );
}

export default OurTeam;
