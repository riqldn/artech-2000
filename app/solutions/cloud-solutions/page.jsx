"use client"
import React, { useRef } from 'react'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Cta from '@/app/components/Cta';
import Image from 'next/image';
import { motion, useInView} from 'motion/react';
import SlidingText from '@/app/components/SlidingText';
import Hero from "@/app/solutions/assets/cloud-solutions/cloud-hero.png"
import Dynamic from "@/app/solutions/assets/cloud-solutions/dynamic.png"
import Sharepoint from "@/app/solutions/assets/cloud-solutions/sharepoint.png"
import Retail from "@/app/solutions/assets/cloud-solutions/retail.png"
import Office from "@/app/solutions/assets/cloud-solutions/office.png"
export default function Cloud() {
    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null)
    const four = useRef(null);
    
    const isOne = useInView(one, {margin: "0px 0px 0px 0px", amount: "some"})
    const isTwo = useInView(two, {margin: "0px 0px 0px 0px", amount: "some"})
    const isThree = useInView(three, {margin: "0px 0px 0px 0px", amount: "some"})
    const isFour = useInView(four, {margin: "0px 0px 0px 0px", amount: "some"})
    return ( 
        <>
            <Navbar />
            <section className='relative min-h-[90vh] md:min-h-screen w-full '>
                <div className='flex w-11/12 min-h-[90vh] md:min-h-screen mx-auto pb-8'>
                    <div className="flex flex-col self-end">
                        <h2 className='text-white text-md z-40'>
                            <SlidingText>
                                Cloud Solutions
                            </SlidingText>
                        </h2>
                        <h1 className='z-40 tracking-xtra leading-xtra text-white text-2xl md:text-4xl md:max-w-[21ch]'>
                            <SlidingText>Professional cloud advisory and assessment services</SlidingText>
                        </h1>
                    </div>
                </div>
                <Image alt='hero image of a hand interacting with a holographic menu' className='-z-10 object-cover object-[73%] md:object-top ' sizes='100vw' priority src={Hero} fill quality={90} />
                <div className='top-0 left-0 opacity-[0.65] overlay-cloud bg-black absolute w-full min-h-[90vh] md:min-h-screen'></div>
            </section>

            <section className='py-40 min-h-max w-full'>
                <div className='w-11/12 mx-auto'>
                    <div className='flex flex-col gap-8 justify-center items-center'>
                        <h3 className='text-2xl md:text-3xl text-header leading-tightest tracking-xtra text-center max-w-[20ch]'>
                            Give undivided attention to the things that matter
                        </h3>
                        <p className='max-w-[50ch] text-center text-base'>
                            Cloud solutions designed to give your business a competitive edge by allowing your organization to scale, maintain flexibility and devoting time to business operations instead iof IT infrastructures
                        </p>
                    </div>
                </div>
            </section>

            <section className='min-h-max w-full'>
                <div className='w-11/12 mx-auto gap-4 flex flex-col'>

                    <h4 className='text-md font-geist text-header'>Benefits</h4>

                    <motion.div className='flex flex-col w-full' initial="initial" whileInView="inView" viewport={{ once: true, margin: "0px 0px -20% 0px" }} transition={{ staggerChildren: "0.3", ease: "linear" }}>
                        <div className='md:border-border md:border-y'>
                            <motion.div className='flex gap-4 md:items-center px-4 py-16  md:px-0 md:py-6 flex-col md:grid w-full grid-cols-12' transition={{ duration: 0.6, ease: "easeInOut" }} variants={{ initial: { opacity: 0, translateY: 10 }, inView: { opacity: 1, translateY: 0 } }}>
                                <svg className='col-start-1 col-end-3' width="63" height="53" viewBox="0 0 63 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.0388 0.0691154C43.1438 -1.41184 56.8738 21.2017 46.5988 39.5824C37.1438 56.4978 13.9038 56.8917 3.87883 40.3491C-6.18117 23.754 4.42883 1.43979 23.0388 0.0691154ZM27.0988 10.961H22.9338V15.3356C17.1238 15.3881 14.4038 23.15 19.0388 27.0152C21.7438 29.2682 24.2838 28.1076 27.2938 28.4594C28.9138 28.6485 29.7438 30.5338 28.7888 31.9465C28.5988 32.2301 27.8538 32.834 27.5538 32.834H16.6838V37.2086H22.9338V41.5832H27.0988V37.2086C32.9088 37.1561 35.6288 29.3942 30.9938 25.529C28.2888 23.2761 25.7488 24.4367 22.7388 24.0848C21.0938 23.8905 20.2338 21.9054 21.3038 20.5295C21.4588 20.3299 22.1688 19.7102 22.3488 19.7102H33.3488V15.3356H27.0988V10.961Z" fill="#D01B22" />
                                    <path d="M43.1085 50.3377C45.6185 48.0113 47.8735 45.5272 49.6685 42.5338C49.9635 42.0402 51.0685 39.6927 51.2385 39.5351C51.3585 39.4196 51.4635 39.3828 51.6235 39.3933C57.6435 39.6139 63.3335 37.5868 62.4985 46.441C62.3435 48.0638 60.6835 50.3377 59.0485 50.3377H43.1035H43.1085Z" fill="#D01B22" />
                                    <path d="M59.054 13.1509C60.334 13.3294 61.759 14.5846 62.214 15.8502C62.674 17.1264 62.679 20.3351 62.139 21.585C60.704 24.9093 57.164 23.9587 54.364 24.0953L54.169 24.0007C53.814 20.2353 52.859 16.5539 51.314 13.1509H59.059H59.054Z" fill="#D01B22" />
                                    <path d="M52.2189 37.2138C53.4339 33.7162 54.1539 30.0191 54.1689 26.2747H59.0489C60.2039 26.2747 61.8089 27.8554 62.2089 28.974C62.7089 30.3604 62.6789 33.6689 62.0039 34.9871C61.5589 35.8641 60.0139 37.2138 59.0489 37.2138H52.2139H52.2189Z" fill="#D01B22" />
                                </svg>
                                <h4 className='md:col-start-3 lg:col-start-4  col-end-7'>Cost Effective</h4>
                                <p className='md:col-start-7 text-body lg:col-start-8 col-end-13 max-w-[35ch] md:max-w-full'>Users only pay for the resources  used, and cloud providers can manage hardware and software for a montly fee</p>

                            </motion.div>

                        </div>

                        <div className='md:border-border md:border-y'>
                            <motion.div className='flex gap-4 md:items-center px-4 py-16  md:px-0 md:py-6 flex-col md:grid w-full grid-cols-12' transition={{ duration: 0.6, ease: "easeInOut" }} variants={{ initial: { opacity: 0, translateY: 10 }, inView: { opacity: 1, translateY: 0 } }}>
                                <svg width="50" height="53" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0412431 38.4159C0.286202 35.5123 1.72097 32.8921 3.54566 30.7918C6.44518 27.4471 10.2945 23.3883 13.484 20.3586C15.0487 18.8726 16.6635 17.7542 18.7231 17.1661C23.9622 15.6749 29.3914 17.9905 32.1909 22.816C32.1959 22.9052 32.1409 22.9577 32.1009 23.0207C31.8709 23.3778 30.1712 25.121 29.8013 25.4203C27.3367 27.4104 25.9969 24.5802 24.0322 23.8083C22.0076 23.0155 19.873 23.3463 18.2082 24.806C14.5839 27.9774 11.3394 32.5088 7.73496 35.8063C3.54066 41.2881 9.83461 48.5604 15.4237 44.7011L22.3175 37.6178C24.7771 38.6312 27.5167 39.1458 30.1463 38.626L30.0013 38.9358C23.4374 44.8534 18.0482 55.7959 7.73997 51.5691C3.74564 49.9308 0.411181 45.5254 0.0412431 40.9783C-0.0137477 40.2904 -0.0137477 39.1038 0.0412431 38.4212V38.4159Z" fill="#D01B22" />
                                    <path d="M39.0096 0.0485686C44.2887 0.521136 49.0529 5.38858 49.8078 10.8546C50.3977 15.0972 49.0879 18.6047 46.4133 21.6869C43.5138 25.0316 39.6645 29.0905 36.475 32.1201C31.0709 37.2606 23.0523 37.0559 18.508 30.8285C18.3181 30.5659 17.6882 29.7941 17.8131 29.5105C19.2629 28.2188 20.1828 26.1448 22.3874 26.4493C23.4922 26.6016 24.1721 27.678 25.0719 28.2346C27.1316 29.521 29.7011 29.3267 31.5958 27.8145L42.3991 16.4467C46.3934 10.5921 39.4595 3.64008 34.0904 8.12947L27.6415 14.8609C25.6219 14.0156 23.4072 13.5587 21.2226 13.6428C20.8426 13.6585 20.3927 13.7478 19.9828 13.774C19.8728 13.7793 19.7928 13.9841 19.8128 13.7005C22.8123 10.6866 25.6068 7.43112 28.6263 4.4382C30.911 2.17512 33.2906 0.342611 36.57 0.0433187C37.2199 -0.0144396 38.3547 -0.0144396 39.0046 0.0433187L39.0096 0.0485686Z" fill="#D01B22" />
                                </svg>

                                <h4 className='md:col-start-3 lg:col-start-4 col-end-7'>Accessibility</h4>
                                <p className='md:col-start-7 text-body lg:col-start-8 col-end-13 max-w-[35ch] md:max-w-full'>Users can access their data from any device with an internet connection</p>

                            </motion.div>

                        </div>

                        <div className='md:border-border md:border-y'>
                            <motion.div className='flex gap-4 md:items-center px-4 py-16  md:px-0 md:py-6 flex-col md:grid w-full grid-cols-12' transition={{ duration: 0.6, ease: "easeInOut" }} variants={{ initial: { opacity: 0, translateY: 10 }, inView: { opacity: 1, translateY: 0 } }}>
                                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.7647 41.831C53.6397 43.2384 52.9497 45.1657 52.2747 46.3892C49.0799 52.171 41.8502 53.7044 36.6005 50.0074C30.5457 53.3526 23.2311 53.3526 17.1764 50.0074C12.2666 53.4418 5.64691 52.4178 2.12707 47.387C-1.95774 41.537 0.0621762 33.245 6.29188 30.2255C6.49187 22.9733 10.2167 16.2831 16.0264 12.4706C15.3664 3.81627 23.6761 -2.55365 31.3357 1.00679C35.5205 2.95505 38.1654 7.66029 37.7504 12.4706C43.5651 16.2726 47.28 22.9891 47.485 30.2255C50.7998 31.7904 53.3997 35.4559 53.7696 39.2946C53.8296 39.9405 53.8246 41.1851 53.7696 41.831H53.7647ZM26.6559 4.44644C17.7963 4.71426 18.3263 19.3446 27.6709 18.4309C35.7755 17.6379 35.2755 4.18387 26.6559 4.44644ZM17.4314 17.0025C17.2614 16.8817 16.8164 17.3176 16.6514 17.4436C13.2965 20.0588 11.0017 24.8008 10.6117 29.1384C18.3163 29.0072 23.6911 36.8422 21.1112 44.5355C20.8762 45.2444 20.5012 45.7748 20.2512 46.3945C20.2012 46.5153 20.1012 46.5048 20.2712 46.6308C24.486 48.5423 29.2808 48.5423 33.4956 46.6308C33.6656 46.51 33.5656 46.5205 33.5156 46.3945C33.3806 46.0636 33.1056 45.7013 32.9556 45.3285C29.7658 37.4251 35.0605 29.0649 43.1602 29.1384C42.7002 24.3282 40.2653 19.7595 36.4905 16.992L34.8655 19.2606C29.8858 24.9006 20.8412 23.8083 17.4264 16.9972L17.4314 17.0025ZM10.4867 33.5864C1.67209 34.1168 2.51705 48.4163 11.6066 47.5708C19.9212 46.7936 19.2063 33.0612 10.4867 33.5864ZM42.5102 33.5864C33.6506 34.122 34.5555 48.4058 43.5251 47.5708C52.0097 46.7778 51.1548 33.0665 42.5102 33.5864Z" fill="#D01B22" />
                                </svg>


                                <h4 className='md:col-start-3 lg:col-start-4  col-end-7'>Collaboration</h4>
                                <p className='md:col-start-7 text-body lg:col-start-8 col-end-13 max-w-[35ch] md:max-w-full'>Cloud Storage enables teams to access files and collaborate on work in real time</p>

                            </motion.div>

                        </div>

                        <div className='md:border-border md:border-y'>
                            <motion.div className='flex gap-4 md:items-center px-4 py-16  md:px-0 md:py-6 flex-col md:grid w-full grid-cols-12' transition={{ duration: 0.6, ease: "easeInOut" }} variants={{ initial: { opacity: 0, translateY: 10 }, inView: { opacity: 1, translateY: 0 } }}>
                                <svg width="50" height="53" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.8992 20.6378H33.9752C34.0052 20.6378 34.3953 20.8847 34.4703 20.9372C34.9254 21.2577 35.2105 21.7619 35.2655 22.3292C35.5005 24.8769 35.0855 27.8237 35.2505 30.4186C35.2655 30.8651 34.3003 31.8894 33.9752 31.8894H29.8992V36.1705C29.8992 36.5119 28.924 37.5257 28.4989 37.51C26.0534 37.3524 23.3227 37.7463 20.9122 37.5205C20.247 37.4574 19.1868 36.8061 19.1868 36.0497V31.8894H15.2258C14.7807 31.8894 13.9155 31.0017 13.8805 30.4869C14.0206 27.9393 13.5205 24.6983 13.8405 22.2242C13.9206 21.6149 14.6357 20.6326 15.2258 20.6326H19.1868V16.4723C19.1868 15.7159 20.247 15.0646 20.9122 15.0015C23.3227 14.7756 26.0534 15.1749 28.4989 15.012C28.924 14.9963 29.8992 16.0101 29.8992 16.3515V20.6326V20.6378Z" fill="#D01B22" />
                                    <path d="M3.78337 41.3917C3.60333 41.3602 3.67836 41.5493 3.67336 41.6806C3.65836 42.0641 3.71338 42.4107 3.62336 42.7995C3.15826 44.7115 0.297569 44.6117 0.0975226 42.3897C-0.0325075 40.9242 -0.0325075 37.8723 0.0975226 36.4015C0.192545 35.3562 0.867696 34.7258 1.84292 34.5998C3.0282 34.4527 6.32899 34.4422 7.49425 34.6155C9.72477 34.9517 9.74978 38.1087 7.39923 38.4396C7.06916 38.4869 6.71408 38.4081 6.40401 38.4501C6.29398 38.4659 6.16394 38.4186 6.23896 38.6234C6.404 39.0647 7.70429 40.7036 8.07938 41.1501C20.4773 55.8528 43.4626 47.9945 45.5281 28.5432C45.6231 27.6555 45.4931 25.9431 45.8831 25.2812C46.6983 23.8892 48.7588 24.1676 49.1389 25.6909C49.489 27.1092 48.9438 30.513 48.6238 32.0206C46.7033 41.0923 40.0868 48.6144 31.6398 51.3458C21.3174 54.6814 9.85478 50.7418 3.78838 41.3812L3.78337 41.3917Z" fill="#D01B22" />
                                    <path d="M43.5175 13.1367C40.0217 8.02572 34.3904 4.53258 28.394 3.87597C17.1314 2.6468 6.65399 10.9516 4.91859 22.7074C4.73355 23.9629 4.81857 25.2656 4.66853 26.4317C4.36846 28.7272 1.28775 28.7009 1.1027 26.4474C0.382538 17.7487 6.22391 8.13603 13.1255 3.78142C23.888 -3.01051 37.7162 -0.431362 45.583 9.73815C45.648 9.14983 45.598 8.73485 45.9231 8.22533C46.8783 6.72827 49.0188 7.32184 49.2088 9.0973C49.3439 10.3737 49.3589 14.0507 49.1988 15.3009C49.1138 15.9733 48.5887 16.6404 47.9586 16.8137C47.0984 17.0501 42.8224 17.0081 41.7771 16.8978C40.1167 16.7297 39.5216 14.4552 40.9519 13.4414C41.0269 13.3889 41.417 13.142 41.447 13.142H43.5125L43.5175 13.1367Z" fill="#D01B22" />
                                </svg>



                                <h4 className='md:col-start-3 lg:col-start-4  col-end-7'>Recovery</h4>
                                <p className='md:col-start-7 text-body lg:col-start-8 col-end-13 max-w-[35ch] md:max-w-full'>Cloud solutions offer backup and recovery features, and users can backup their entire server simultaneously</p>

                            </motion.div>

                        </div>

                    </motion.div>



                </div>

            </section>
            <section className='min-h-[300vh] w-full lg:py-16'>
                <div className='cloud-flex w-11/12 mx-auto sticky top-0  h-screen gap-8 lg:gap-0 flex justify-center flex-col lg:flex-row'>
                    <div className='order-2 lg:order-1 relative flex cloud-text justify-center flex-col lg:w-1/2 gap-4'>
                        <h3 className={!isThree && !isFour && !isTwo ? 'act relative text-lg md:text-2xl lg:text-xl font-semibold' : ' absolute text-lg md:text-2xl lg:text-xl font-semibold opacity-0 '}>Dynamic 365</h3>
                        <p className={!isThree && !isFour && !isTwo ? 'act relative max-w-[50ch] md:text-md lg:text-base leading-looser' : 'md:text-md lg:text-base absolute max-w-[50ch] leading-looser opacity-0 ' } >Microsoft Dynamics 365 is a suite of cloud-based ERP and customer related solutions. In addition to traditional ERP and CRM, other applications are also included the framework. It is a game-changer for businesses seeking to streamline their operations and enhance customer engagement.  Benefits of 365 include comprehensive integration, flexibility, and advanced analytics </p>
                   
                        <h3 className={!isThree && !isFour && isTwo ? 'act relative text-lg md:text-2xl lg:text-xl font-semibold' : ' absolute text-lg md:text-2xl lg:text-xl font-semibold opacity-0 '}>Sharepoint</h3>
                        <p className={!isThree && !isFour && isTwo ? 'act relative max-w-[50ch] md:text-md lg:text-base leading-looser' : 'md:text-md lg:text-base absolute max-w-[50ch] leading-looser opacity-0 ' } >Microsoft SharePoint is a web-based platform that integrates with Microsoft Office to enable collaboration, document management, workflow automation, and intranet development. It allows users to store, share, and access information from any device via a web browser.</p>
                   
                        <h3 className={isThree && !isFour ? 'act relative text-lg md:text-2xl lg:text-xl font-semibold' : ' absolute text-lg md:text-2xl lg:text-xl font-semibold opacity-0 '}>LS Retail</h3>
                        <p className={isThree && !isFour ? 'act relative max-w-[50ch] leading-looser md:text-md lg:text-base' : 'md:text-md lg:text-base absolute max-w-[50ch] leading-looser opacity-0 ' } >LS Retail is the leading unified POS and business management software solution for numerous businesses such as, retail stores, restaurants, pharmacies, hotels. Manage your business from front to back with one centralized software platform that combines Point of Sale, financials, inventory, eCommerce, and more.</p>

                        <h3 className={isFour ? 'act relative text-lg md:text-2xl lg:text-xl font-semibold' : ' absolute text-lg md:text-2xl lg:text-xl font-semibold opacity-0 '}>Office 365</h3>
                        <p className={ isFour ? 'act relative max-w-[50ch] leading-looser pb-4 md:text-md lg:text-base' : 'md:text-md lg:text-base absolute max-w-[50ch] leading-looser opacity-0 ' }>Microsoft Office 365 is a suite of cloud-based productivity and collaboration applications that integrates all Microsoft&apos;s existing online applications (Word, Excel, PowerPoint, OneNote, Outlook, Publisher, Sway, and Access) into a cloud service, adding Skype for Business and Microsoft Teams as the main communication and collaboration applications. </p>
                        <div className={isFour ? 'relative act' : 'absolute opacity-0'}>
                            <Cta href="/contact">Enquire Now</Cta>
                        </div>
                    </div>
                    <div className='cloud-image order-1 lg:order-2 w-full lg:w-1/2 lg:justify-center relative flex'>
                    <Image className={!isThree && !isFour && !isTwo ? "act relative object-contain w-full" : "w-full absolute object-contain opacity-0"} src={Dynamic} alt="screenshot of dynamic 365 interface" loading='eager' placeholder='blur' quality={80}/>
                    <Image className={!isThree && isTwo ? "act relative object-contain w-full" : "w-full absolute object-contain opacity-0"} src={Sharepoint} alt="screenshot of Sharepoint interface" loading='eager' placeholder='blur' quality={80}/>
                    <Image className={isThree && !isFour ? "act relative object-contain w-full" : "w-full absolute object-contain opacity-0"} src={Retail} alt='screenshot of Ls Retail interface' loading='eager' placeholder='blur' quality={80}/>
                    <Image className={isFour ? "act relative object-contain w-full" : "w-full absolute object-contain opacity-0"} src={Office} alt='screenshot of Microsoft Office'  loading='eager' placeholder='blur' quality={80}/>
                    </div>

                </div>
                <div ref={one} className='h-[80vh] w-full'></div>
                <div ref={two} className='h-[80vh] w-full'></div>
                <div ref={three} className='h-[80vh] w-full'></div>
                <div ref={four} className='h-[80vh] w-full'></div>
            </section>
            <Footer />

        </>
    )
}
