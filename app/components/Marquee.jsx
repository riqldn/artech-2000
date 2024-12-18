import Cisco from "../assets/partners/cisco-logo.png";
import Citrix from "../assets/partners/citrix-logo.png";
import Interguard from "../assets/partners/interguard-logo.png"
import Mcafee from "../assets/partners/mcafee-logo.png"
import Microsoft from "../assets/partners/microsoft-logo.png"
import Image from "next/image";
import { useEffect } from "react";
export default function Marquee() {

    useEffect(() => {
        const marquee = document.querySelector('.marquee')
        const marqueeContent = Array.from(marquee.children)

        marqueeContent.forEach(item => {
            const duplicateItem = item.cloneNode(true)
            duplicateItem.setAttribute("aria-hidden", true)
            marquee.appendChild(duplicateItem)
        })
    })

    return (
        <section className="marquee-section relative min-h-[40vh] w-full">
            <div className="w-11/12 mx-auto flex align-center flex-row justify-center items-center  gap-4 h-[40vh]">
                <div>
                    <h2 className="mb-8 font-semibold tracking-tight text-md">Our Partners</h2>
                    <div className="marquee-outer max-w-[75vw] h-max  overflow-hidden  justify-center items-center">
                        <div className="marquee w-max shrink-0 grow-0 flex align-center flex-nowrap flex-row justify-center items-center z-50  h-full">
                            <Image src={Cisco}  className="w-[120px]" loading="eager" sizes="10vw" alt="cisco logo" aria-description="decoration" />
                            <Image src={Citrix}  className="w-[120px]" loading="eager" sizes="10vw" alt="citrix logo" aria-description="decoration" />
                            <Image src={Interguard} className="w-[140px]" loading="eager" sizes="10vw" alt="interguard logo" aria-description="decoration" />
                            <Image src={Mcafee} className="w-[140px]" loading="eager" sizes="10vw" alt="Mcafee logo" aria-description="decoration" />
                            <Image src={Microsoft} className="w-[140px]" loading="eager" sizes="10vw" alt="Microsoft logo" aria-description="decoration" />
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}
