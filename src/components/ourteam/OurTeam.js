import Image from 'next/image';
import TeamZeshanSarwar from "@/images/wpa-team-zeeshan-sarwar.png";
import zahrakashif from '@/images/zahra-kashif.png';
import muhammadomerali from "@/images/muhammad-omer-ali.png";
import ShahidAnwer from "@/images/wpa-shahid-anwer.jpg";
import jhazibZaman from "@/images/jhazib-zaman.jpg";
import OurTeambg from '@/images/wpa-our-team-member.png';

const teamMembers = [
    { name: 'Jazib Zaman', designation: 'Chief Executive Officer', image: jhazibZaman },
    { name: 'Shahid Anwer', designation: 'Chief Technology Officer', image: ShahidAnwer },
    { name: 'Muhammad Omer Ali', designation: 'Chief Financial Officer', image: muhammadomerali },
    { name: 'Zahra Kashif', designation: 'HR Lead / Project Engineer', image: zahrakashif },
];

const OurTeam = () => {
    return (
        <div className="mt-6 lg:bg-contain bg-cover bg-no-repeat" style={{ backgroundImage: `url(${OurTeambg.src})` }}>
            <div className='md:px-20 xs:px-10 px-5 md:py-10 py-5'>
                <h2 className='xl:text-5xl lg:text-4xl xs:text-3xl text-2xl font-semibold mb-4 text-white'>OUR TEAM</h2>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 items-center justify-center'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className='rounded-md overflow-hidden border-white shadow-md'>
                            <div className='relative w-full h-96'>
                                <Image 
                                    src={member.image} 
                                    alt={member.name} 
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
                            <div className='py-5 px-8 bg-white'>
                                <span className='text-slate-600 2xl:text-base text-sm'>{member.designation}</span>
                                <h4 className='2xl:text-2xl text-lg font-semibold text-[#2980b9]'>{member.name}</h4>
                            </div>
                        </div>
                    ))}
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
    );
}

export default OurTeam;