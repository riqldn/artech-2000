"use client"
import Image from "next/image";
import Link from "next/link";
import { useAnimate, animate, motion, useMotionValue, useMotionValueEvent, useTransform } from "motion/react";
import desktop from "./assets/Home/home-hero.png";
import Button from "./components/Cta";
import SlidingText from "./components/SlidingText";
import Marquee from "./components/Marquee";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {

    window.scrollTo(0, 0);
    let deviceWidth = window.screen.width
    if (deviceWidth < 768)
      setIsMobile(true)
    else
      setIsMobile(false)







    window.addEventListener('resize', () => {

      deviceWidth = window.screen.width
      if (deviceWidth < 768)
        setIsMobile(true)
      else
        setIsMobile(false)


    })


  },[isMobile])


  return (

    <div>
      <Navbar/>
      <motion.section initial={{ clipPath: "inset(0 0 0 0)" }} animate={{ clipPath: "inset(0 0 100% 0)" }} transition={{ ease: "easeInOut" }} className="loading-screen fixed min-h-screen pb-1 w-full bg-white z-50 flex items-center justify-center">



      </motion.section>
      <section className="relative min-h-screen w-full flex items-end">
        <Image alt="hero image" as="image" className="-z-50 object-cover object-top" priority={true} aria-description="decorative" src={desktop} fill sizes="100vw" quality={90} placeholder="blur" />
        <div className="md:pb-8 mx-auto w-11/12 min-h-max flex flex-col gap-4 lg:gap-0 lg:grid lg:grid-cols-12 justify-end">
          <h1 className="text-white text-xl leading-tightest home-header tracking-tightest md:text-3xl lg:text-4xl col-start-1 md:col-end-8 lg:col-end-8">
            <SlidingText>Innovative IT Solutions for a Seamless Tomorrow</SlidingText>
          </h1>
          <div className="md:col-start-8 lg:col-start-9 col-end-13 flex gap-4 flex-col">
            <p className="text-white  md:max-w-[50ch] leading-loose">
              <SlidingText>We Specialize in bridging the gap between cutting-edge technology and your business objectives, helping companies transform challenges into opportunities for growth. </SlidingText>
            </p>
            <motion.div initial={{ opacity: 0 }} viewport={{ once: true, margin: "0px 0px 0px 0px" }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}>
              <Button href="/solutions">View Our Solutions</Button>
            </motion.div>

          </div>
        </div>
      </section>

      <Marquee />

      <section className="home-solutions relative min-h-screen w-full" >
        <div className="w-11/12 min-h-screen auto-rows-max pb-10 pt-20 flex flex-col  mx-auto md:grid grid-cols-12">
          <div className="md:pl-4  h-max flex flex-col gap-4 col-start-1 md:col-end-9 lg:col-end-7 md:mb-16 lg:mb-0">
            <h2 className="text-2xl md:text-3xl mb-2 leading-tightest tracking-tighter ">Solutions we offer to provide value to your business</h2>
            <p className="max-w-[35ch] md:max-w-[35ch] leading-loose lg:max-w-[45ch]">At Artech 2000 we understand that your business needs are unique, which is why we ensure  that all services are tailored to your specific IT needs.</p>
            <Button href="/solutions">View Our Solutions</Button>
          </div>

          <div className="flex pt-20 md:pt-0 flex-col w-full min-h-[50vh] md:col-start-4 lg:col-start-6 col-end-13 row-start-2 ">


            <motion.div initial={isMobile ? " " : "initial"} whileHover={isMobile ? " " : "hovered"} className="gap-2 relative  w-max mx-auto  flex overflow-hidden border-t md:px-4 min-h-max py-16 md:py-4 md:w-full flex-col border-border border-b justify-between md:flex-row">
              <svg className="md:hidden mb-2" width="60" height="60" viewBox="0 0 99 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.0805 0C38.4873 0.320526 39.9085 0.474672 41.3033 0.878387C44.2637 1.73965 47.0172 3.3594 49.2969 5.44159C62.6605 -2.42719 80.0835 5.10639 83.7701 20.2665C99.9834 25.4781 103.694 47.5381 89.4599 57.516C87.3845 58.9694 82.6446 61.147 80.1676 61.147H67.4053V72.6737H77.5776C80.4177 62.1893 95.4358 62.2211 97.9849 72.9037C100.952 85.3381 84.2174 91.7119 78.3111 80.4274C78.0706 79.965 77.77 78.6707 77.4574 78.563L64.2573 78.519C63.3748 78.5948 61.6481 77.0509 61.6481 76.29V61.1494H52.0505V78.9276C59.3779 80.9804 62.2493 90.2267 57.228 96.2115C52.9883 101.264 45.3554 101.262 41.1181 96.2115C36.0969 90.2292 38.9682 80.9829 46.2957 78.9276V61.1494H36.6981V76.29C36.6981 77.0509 34.9738 78.5948 34.0889 78.519L20.8888 78.563C20.3116 79.576 19.9774 80.6697 19.3136 81.6484C13.821 89.7521 1.68147 86.6667 0.0389795 77.1684V74.0414C2.06384 62.5832 17.4331 61.492 20.7685 72.6737H30.9409V61.147H18.1785C13.9701 61.147 7.7296 57.2077 5.02658 54.022C2.27306 50.7776 0.745999 46.7967 0.0413867 42.5883C0.13758 41.1349 -0.0884737 39.5274 0.0413867 38.0961C0.13277 37.0806 0.577658 35.3679 0.863831 34.3427C2.71314 27.7389 8.427 21.9474 14.9946 20.3008C15.235 11.2918 21.5285 3.05356 30.0944 0.797644C31.2343 0.496692 32.872 0.0978704 34.0143 0H37.0853H37.0805ZM35.4812 5.93339C27.6968 5.97744 21.1774 12.295 20.7685 20.22C20.6603 22.3291 21.5164 24.3771 18.9 25.3509C15.2278 26.7186 13.3521 26.4862 10.2306 29.6156C1.13798 38.7249 7.03941 54.2985 19.5132 55.2919H78.8354C92.1629 54.2887 97.4992 36.8115 86.8843 28.5243C84.4122 26.5938 82.9861 26.6305 80.4033 25.5491C78.15 24.6046 78.4313 22.4246 77.7772 20.406C74.396 9.96076 62.4273 5.19692 52.8152 10.2495C50.7398 11.3407 49.2753 13.418 46.8849 11.4092C46.4087 11.0104 46.2308 10.5137 45.822 10.1467C42.9097 7.52134 39.4588 5.90893 35.4812 5.93095V5.93339ZM9.78091 70.7701C4.31475 71.5555 4.66586 80.1412 10.3965 80.3932C17.1132 80.6868 16.8968 69.7473 9.78091 70.7701ZM86.9348 70.7701C81.4686 71.5555 81.8197 80.1412 87.5504 80.3932C94.2671 80.6868 94.0507 69.7473 86.9348 70.7701ZM48.3591 84.4475C42.8929 85.2329 43.244 93.8186 48.9747 94.0706C55.6914 94.3642 55.4749 83.4247 48.3591 84.4475Z" fill="#D01B22" />
              </svg>

              <motion.h4 variants={{ initial: { color: "#252525" }, hovered: { color: "#FFFFFF" }, }} transition={{ duration: 0.6, ease: "linear" }} className="text-md mb-3  font-medium tracking-tight" >Cloud Solutions</motion.h4>
              <motion.div className="flex gap-2 flex-col">
                <motion.p variants={{ hovered: { color: "#FFFFFF" } }} transition={{ duration: 0.4, ease: "linear" }} className="solution-paragraph max-w-[30ch] leading-looser md:max-w-[45ch]">
                  We offer a range of cloud solutions designed to give your business a competitive edge, including Dynamics 365, SharePoint, Office 365, and more.
                </motion.p>

                <motion.span className="pt-4 inline-block ">
                  <Link href="/solutions/cloud-solutions">
                    <motion.span variants={{ initial: { color: "#D01B22" }, hovered: { color: "#FFFFFF" } }} className="font-semibold underline   inline-block flex flex-row items-center gap-1">
                      Explore
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path variants={{ initial: { fill: "#D01B52" }, hovered: { fill: "#FFFFFF" } }} d="M11.8768 0.946404C11.8472 0.394915 11.3761 -0.0281345 10.8246 0.00149673L1.83759 0.484366C1.2861 0.513998 0.863053 0.985089 0.892684 1.53658C0.922315 2.08807 1.39341 2.51112 1.9449 2.48149L9.93337 2.05227L10.3626 10.0407C10.3922 10.5922 10.8633 11.0153 11.4148 10.9857C11.9663 10.956 12.3893 10.4849 12.3597 9.93344L11.8768 0.946404ZM1.74403 12.6683L11.6223 1.66821L10.1343 0.331906L0.255974 11.332L1.74403 12.6683Z" />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.span>

              </motion.div>
              <motion.div variants={{ initial: { translateX: "-50%", scaleX: 1, borderRadius: "100%", bottom: -200 }, hovered: { borderRadius: 0, scale: 10, bottom: -100 } }} transition={{ duration: 0.6, ease: "easeInOut", repeatType: "loop", repeat: 0 }} className="absolute left-1/2 -translate-x-1/2 -z-50 min-h-[100px] bg-primary w-[100px] ">

              </motion.div>
            </motion.div>

            <motion.div initial={isMobile ? " " : "initial"} whileHover={isMobile ? " " : "hovered"} className="gap-2 relative  w-max mx-auto  flex overflow-hidden border-t md:px-4 min-h-max py-16 md:py-4 md:w-full flex-col border-border border-b justify-between md:flex-row">
              <svg className="md:hidden mb-2" width="60" height="60" viewBox="0 0 85 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.6857 0L82.0977 15.9822C83.6633 16.5771 84.6575 17.7591 84.8975 19.4317C84.8245 33.5534 86.0117 46.8845 81.3853 60.453C75.851 76.683 61.5284 93.2392 45.2409 99.3111C42.7777 100.23 42.6394 100.23 40.1736 99.3111C23.8887 93.2392 9.56613 76.683 4.02912 60.453C-0.618094 46.8244 0.597857 33.4203 0.516968 19.2386C0.746589 17.6756 1.88165 16.5484 3.31678 15.9822L41.734 0H43.6884H43.6857ZM42.4672 8.23505L8.52501 22.3594L8.32409 22.9412C8.49891 32.6897 7.64305 42.386 9.79836 51.9596C13.7306 69.4447 26.2345 84.8111 42.7751 91.7519C59.2817 84.678 71.7882 69.3377 75.6605 51.7978C77.7819 42.1877 77.0069 32.2278 76.9939 22.4585L42.4672 8.23505Z" fill="#D01B52" />
                <path d="M57.1291 36.3585C61.1449 35.6748 63.4332 40.142 60.7013 43.054C54.0162 48.8311 47.9886 56.9435 41.267 62.4883C39.5813 63.8791 37.8801 64.1479 35.9909 62.8745C32.7762 58.9579 27.4532 55.2761 24.4629 51.3569C21.4465 47.4064 26.5086 42.6939 30.2321 45.9791L38.5037 54.0732L55.42 37.1883C55.8766 36.8203 56.5577 36.4576 57.1291 36.3611V36.3585Z" fill="#D01B52" />
              </svg>


              <motion.h4 variants={{ initial: { color: "#252525" }, hovered: { color: "#FFFFFF" }, }} transition={{ duration: 0.6, ease: "linear" }} className="text-md mb-3  font-medium tracking-tight" >Security</motion.h4>
              <motion.div className="flex gap-2 flex-col">
                <motion.p variants={{ hovered: { color: "#FFFFFF" } }} transition={{ duration: 0.4, ease: "linear" }} className="solution-paragraph max-w-[30ch] leading-looser md:max-w-[45ch]">
                  We operate IT management services that keep up with the constantly changing landscape of ICT and cyber threats so you can focus on running your business.
                </motion.p>

                <motion.span className="pt-4 inline-block ">
                  <Link href="/solutions/security">
                    <motion.span variants={{ initial: { color: "#D01B22" }, hovered: { color: "#FFFFFF" } }} className="font-semibold underline   inline-block flex flex-row items-center gap-1">
                      Explore
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path variants={{ initial: { fill: "#D01B52" }, hovered: { fill: "#FFFFFF" } }} d="M11.8768 0.946404C11.8472 0.394915 11.3761 -0.0281345 10.8246 0.00149673L1.83759 0.484366C1.2861 0.513998 0.863053 0.985089 0.892684 1.53658C0.922315 2.08807 1.39341 2.51112 1.9449 2.48149L9.93337 2.05227L10.3626 10.0407C10.3922 10.5922 10.8633 11.0153 11.4148 10.9857C11.9663 10.956 12.3893 10.4849 12.3597 9.93344L11.8768 0.946404ZM1.74403 12.6683L11.6223 1.66821L10.1343 0.331906L0.255974 11.332L1.74403 12.6683Z" />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.span>

              </motion.div>
              <motion.div variants={{ initial: { translateX: "-50%", scaleX: 1, borderRadius: "100%", bottom: -200 }, hovered: { borderRadius: 0, scale: 10, bottom: -100 } }} transition={{ duration: 0.6, ease: "easeInOut", repeatType: "loop", repeat: 0 }} className="absolute left-1/2 -translate-x-1/2 -z-50 min-h-[100px] bg-primary w-[100px] ">

              </motion.div>
            </motion.div>

            <motion.div initial={isMobile ? " " : "initial"} whileHover={isMobile ? " " : "hovered"} className="gap-2 relative  w-max mx-auto  flex overflow-hidden border-t md:px-4 min-h-max py-16 md:py-4 md:w-full flex-col border-border border-b justify-between md:flex-row">
              <svg className="md:hidden mb-2" width="60" height="60" viewBox="0 0 114 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 26.0976C0.774973 23.2747 2.24244 20.8673 4.78247 19.3026C5.35118 18.952 7.50517 17.9354 8.04441 17.9354H27.5513V9.22206C27.5513 4.51918 33.2502 0.579492 37.57 0.278932C50.0226 -0.590335 63.5331 0.900678 76.0947 0.349651C80.0226 0.443944 85.3031 5.29416 85.3031 9.22206V17.9354H104.81C108.552 17.9354 112.557 23.3101 112.863 26.8608C113.261 31.4635 113.226 39.891 112.863 44.5231C112.583 48.1151 110.742 51.1413 108.452 53.7845C108.258 66.6879 108.823 79.6768 108.163 92.5361C107.023 96.8382 103.284 99.6906 98.8695 100H13.7669C8.97852 99.5727 5.07123 96.0456 4.43475 91.2513L4.40234 53.7874C3.04687 52.0695 1.72971 50.5255 0.934106 48.4363L0 45.2922V26.1035V26.0976ZM78.6937 17.9383V10.109C78.6937 10.0118 78.122 8.79185 77.9953 8.60032C77.1113 7.25074 75.6969 7.00322 74.1823 6.90009C62.54 6.0986 49.9843 7.51889 38.2477 6.91482C36.8687 7.09162 35.6665 7.37745 34.862 8.60032C34.7353 8.79185 34.1637 10.0118 34.1637 10.109V17.9383H78.6907H78.6937ZM67.8941 59.8458C71.5863 59.6867 75.3139 59.2771 78.9618 58.6789C86.3668 57.4619 105.158 53.201 106.224 44.0517C106.658 40.3418 106.596 31.7493 106.257 27.9658C106.077 25.9562 104.96 24.5388 102.842 24.5477H9.80356C7.93538 24.6243 6.81566 25.965 6.61529 27.7536C6.98951 32.9191 6.11435 38.7742 6.61529 43.8542C7.32838 51.047 18.9441 55.084 24.8611 56.6958C31.3526 58.4638 38.2595 59.4833 44.9662 59.8458V56.2067C44.9662 55.3138 46.5485 53.7521 47.515 53.6843C53.0901 54.0674 59.4431 53.1274 64.9269 53.6578C66.1026 53.7727 67.8912 54.9514 67.8912 56.2067V59.8458H67.8941ZM11.0235 58.5227V90.6149C11.0235 92.0469 13.4663 93.5939 14.8719 93.3788H97.7704C99.2349 93.6499 101.837 92.1383 101.837 90.6149V58.5227C91.3202 63.9299 79.3773 65.6419 67.6996 66.7145C65.1626 78.4628 47.6947 78.4628 45.1577 66.7145C33.4506 65.6507 21.5755 63.9181 11.0205 58.5227H11.0235ZM61.2789 60.2878H51.5814V65.25C51.5814 65.3443 52.0853 66.4021 52.2031 66.6143C53.8798 69.6582 58.9834 69.6582 60.6601 66.6143C60.775 66.4051 61.2818 65.3472 61.2818 65.25V60.2878H61.2789Z" fill="#D01B22" />
              </svg>


              <motion.h4 variants={{ initial: { color: "#252525" }, hovered: { color: "#FFFFFF" }, }} transition={{ duration: 0.6, ease: "linear" }} className="text-md mb-3  font-medium tracking-tight" >Power Platform</motion.h4>
              <motion.div className="flex gap-2 flex-col">
                <motion.p variants={{ hovered: { color: "#FFFFFF" } }} transition={{ duration: 0.4, ease: "linear" }} className="solution-paragraph max-w-[30ch] leading-looser md:max-w-[45ch]">
                  Power Platform is a toolset that enables businesses to analyze data, automate processes, build apps, and create virtual agents.
                </motion.p>

                <motion.span className="pt-4 inline-block ">
                  <Link href="/solutions/power-platform">
                    <motion.span variants={{ initial: { color: "#D01B22" }, hovered: { color: "#FFFFFF" } }} className="font-semibold underline   inline-block flex flex-row items-center gap-1">
                      Explore
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path variants={{ initial: { fill: "#D01B52" }, hovered: { fill: "#FFFFFF" } }} d="M11.8768 0.946404C11.8472 0.394915 11.3761 -0.0281345 10.8246 0.00149673L1.83759 0.484366C1.2861 0.513998 0.863053 0.985089 0.892684 1.53658C0.922315 2.08807 1.39341 2.51112 1.9449 2.48149L9.93337 2.05227L10.3626 10.0407C10.3922 10.5922 10.8633 11.0153 11.4148 10.9857C11.9663 10.956 12.3893 10.4849 12.3597 9.93344L11.8768 0.946404ZM1.74403 12.6683L11.6223 1.66821L10.1343 0.331906L0.255974 11.332L1.74403 12.6683Z" />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.span>

              </motion.div>
              <motion.div variants={{ initial: { translateX: "-50%", scaleX: 1, borderRadius: "100%", bottom: -200 }, hovered: { borderRadius: 0, scale: 10, bottom: -100 } }} transition={{ duration: 0.6, ease: "easeInOut", repeatType: "loop", repeat: 0 }} className="absolute left-1/2 -translate-x-1/2 -z-50 min-h-[100px] bg-primary w-[100px] ">

              </motion.div>
            </motion.div>

            <motion.div initial={isMobile ? " " : "initial"} whileHover={isMobile ? " " : "hovered"} className="gap-2 relative  w-max mx-auto  flex overflow-hidden border-t md:px-4 min-h-max py-16 md:py-4 md:w-full flex-col border-border border-b justify-between md:flex-row">
              <svg className="mb-2 md:hidden" width="60" height="60" viewBox="0 0 88 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75.1799 0.0731954C79.3088 0.566147 83.342 4.26179 84.552 8.16357C87.5366 17.8045 77.9196 26.1817 68.7566 22.3158L56.2775 40.3189C57.7235 41.9501 58.9932 44.0863 59.5579 46.2075C59.7461 46.9185 59.9821 49.6432 60.2988 49.8075L69.2257 51.5702C70.1578 50.8382 70.6089 49.688 71.5769 48.8365C76.4078 44.5792 84.2293 46.4345 86.4551 52.4844C89.7623 61.486 79.1743 68.922 71.7711 62.8692C69.7366 61.2051 68.9 58.83 68.3623 56.3294L59.5011 54.6683C58.5033 57.4228 56.872 59.8189 54.724 61.7997L66.7908 79.5549C67.1822 79.7968 68.9329 79.1276 69.623 79.0649C81.2955 77.9894 85.8247 93.1663 76.0941 98.5977C67.702 103.279 58.2762 95.4876 60.8814 86.3217C61.3235 84.7712 62.3602 83.7285 62.8532 82.3273L50.4696 64.2734C47.7898 65.1786 45.1518 65.4594 42.3494 64.9665C41.713 64.853 39.1676 63.9298 38.9137 64.0792L28.8037 78.4734C29.1532 79.5937 30.0824 80.6842 30.5245 81.8523C36.0635 96.5034 14.8487 105.619 7.9683 91.9115C2.47413 80.968 14.3647 69.7675 25.0244 75.4678L34.9432 61.244C30.3572 56.906 28.9441 50.0495 31.4238 44.2088L31.2834 43.8503L14.8577 31.1739C14.3557 31.0066 13.9763 31.5653 13.4983 31.7595C4.29656 35.5418 -3.72211 25.871 1.82583 17.9479C7.19451 10.2818 19.4406 14.7243 18.5832 24.5535C18.4906 25.5991 18.0544 26.3908 17.8781 27.3737L34.1186 40.0381C34.4204 40.0919 35.5885 38.6997 35.9619 38.4099C40.7122 34.7411 47.1086 34.3975 52.4176 37.1103L64.7533 19.7733C64.5232 18.7187 63.5463 17.8643 63.0384 16.7798C59.773 9.82168 63.9825 1.0113 71.8578 0.0672206C72.6166 -0.0224069 74.4151 -0.0224069 75.177 0.0672206L75.1799 0.0731954ZM72.5987 5.0057C64.8907 5.89002 64.8668 17.3235 72.3985 18.3572C82.4696 19.7405 82.6698 3.8495 72.5987 5.0057ZM8.58075 19.0443C3.52277 19.7733 3.81556 27.8129 9.34259 27.8876C15.4641 27.9742 15.2102 18.0883 8.58075 19.0443ZM37.9696 43.0496C28.8156 52.1976 42.0865 66.3408 51.7603 57.9038C62.2497 48.7588 47.6075 33.4176 37.9696 43.0496ZM80.9639 52.6098C77.1577 48.8037 70.9047 53.9901 74.203 58.4864C77.8329 63.4398 85.4483 57.0912 80.9639 52.6098ZM17.5525 78.9155C14.529 79.3846 11.891 82.4409 11.5743 85.4225C10.7258 93.3575 21.2481 96.8799 25.2963 90.3609C28.8336 84.6606 24.152 77.8908 17.5525 78.9155ZM70.8211 83.8211C63.2804 83.9078 63.3402 95.8939 71.7621 95.0544C78.3796 94.3972 78.048 83.7375 70.8211 83.8211Z" fill="#D01B22" />
              </svg>



              <motion.h4 variants={{ initial: { color: "#252525" }, hovered: { color: "#FFFFFF" }, }} transition={{ duration: 0.6, ease: "linear" }} className="text-md mb-3  font-medium tracking-tight" >Network Infrastructure</motion.h4>
              <motion.div className="flex gap-2 flex-col">
                <motion.p variants={{ hovered: { color: "#FFFFFF" } }} transition={{ duration: 0.4, ease: "linear" }} className="solution-paragraph max-w-[30ch] leading-looser md:max-w-[45ch]">
                  Our expert IT specialist will help you with critical decisions including network design service, including installation and support across a range of environments.
                </motion.p>

                <motion.span className="pt-4 inline-block ">
                  <Link href="/solutions/network-infrastructure">
                    <motion.span variants={{ initial: { color: "#D01B22" }, hovered: { color: "#FFFFFF" } }} className="font-semibold underline   inline-block flex flex-row items-center gap-1">
                      Explore
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path variants={{ initial: { fill: "#D01B52" }, hovered: { fill: "#FFFFFF" } }} d="M11.8768 0.946404C11.8472 0.394915 11.3761 -0.0281345 10.8246 0.00149673L1.83759 0.484366C1.2861 0.513998 0.863053 0.985089 0.892684 1.53658C0.922315 2.08807 1.39341 2.51112 1.9449 2.48149L9.93337 2.05227L10.3626 10.0407C10.3922 10.5922 10.8633 11.0153 11.4148 10.9857C11.9663 10.956 12.3893 10.4849 12.3597 9.93344L11.8768 0.946404ZM1.74403 12.6683L11.6223 1.66821L10.1343 0.331906L0.255974 11.332L1.74403 12.6683Z" />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.span>

              </motion.div>
              <motion.div variants={{ initial: { translateX: "-50%", scaleX: 1, borderRadius: "100%", bottom: -200 }, hovered: { borderRadius: 0, scale: 10, bottom: -100 } }} transition={{ duration: 0.6, ease: "easeInOut", repeatType: "loop", repeat: 0 }} className="absolute left-1/2 -translate-x-1/2 -z-50 min-h-[100px] bg-primary w-[100px] ">

              </motion.div>
            </motion.div>



          </div>
        </div>
      </section >

      <section className="why-section min-h-max relative w-full">
        <div className="w-full pt-16 bg-secondary mx-auto min-h-max ">
          <h2 className="w-11/12 mx-auto text-xl md:text-3xl text-center text-white tracking-tightest mb-0 md:mb-0">Why Choose Us?</h2>
          <div className="card-container flex px-8 py-16 md:py-4 lg:pb-8 items-center gap-8 md:gap-4 lg:gap-8 md:justify-center flex-col justify-between  grow-0 shrink-0  md:flex-row lg:flex-row rounded rounded-xl w-full bg-secondary min-h-[70vh] md:min-h-[40vh] lg:min-h-[65vh]">

            <div className="card grid md:px-4 lg:px-8 px-8 py-6 border rounded rounded-xl border-solid text-white md:max-w-[33%] md:min-h-[300px] lg:min-h-[400px] lg:max-w-[25%] justify-between">
              <h4 className="text-4xl">1</h4>
              <div className="min-h-[210px]">
                <h5 className="font-semibold text-tightest md:text-base lg:text-md mb-4 ">Reliable</h5>
                <p className=" md:text-sm lg:text-base">We pride ourselves on being dependable in every interaction. Whether it&apos;s delivering on promises, meeting deadlines, or
                  providing consistent quality, you can count on us to be there when you need us most.</p>
              </div>
            </div>

            <div className="card grid grid-auto-row px-8 md:px-4 lg:px-8 py-6 border rounded rounded-xl border-solid text-white md:min-h-[300px] lg:min-h-[400px] md:max-w-[33%] lg:max-w-[25%] ">
              <h4 className="text-4xl text-tightest">2</h4>
              <div className="min-h-[210px]">
                <h5 className="font-semibold text-tightest md:text-base lg:text-md mb-4 ">Proven Experience</h5>
                <p className="md:text-sm lg:text-base">With years of expertise in our field, we bring a wealth of knowledge and a track record of success to every project. Our experience enables us to handle challenges effectively and deliver outstanding results.</p>
              </div>
            </div>

            <div className="card grid grid-auto-row px-8 md:px-4 lg:px-8 py-6 border rounded rounded-xl border-solid text-white lg:min-h-[400px] md:max-w-[33%] md:min-h-[300px] lg:max-w-[25%] ">
              <h4 className="text-4xl">3</h4>
              <div className="min-h-[210px]">
                <h5 className="font-semibold text-tightest  md:text-base lg:text-md mb-4 ">Innovation</h5>
                <p className=" md:text-sm lg:text-base">By staying on top of industry advancements, we provide innovative, cutting-edge solutions that set you up for success.</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="cta-section min-h-[80vh] overflow-hidden w-full">
        <div className="w-11/12 flex flex-col justify-center min-h-[80vh] items-center mx-auto">
          <div className="flex-col flex w-max h-max justify-center">
            <h2 className="text-3xl md:text-4xl leading-tightest tracking-xtra max-w-[10ch] md:max-w-[15ch] lg:max-w-[20ch] mb-8"><SlidingText>Get In Touch Now to future proof your business</SlidingText></h2>
            <Button href="/contact" >Contact</Button>
          </div>
        </div>

      </section>
      <Footer/>
    </div >
  );
}
