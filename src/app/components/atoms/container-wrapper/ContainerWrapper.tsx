'use client';

import { TemplateFormat } from "@components/molecules/sectionContainer/SectionContainer";
import { useMediaQuery } from "usehooks-ts";

export default function ContainerWrapper({templateFormat, children}: {templateFormat?: TemplateFormat, children: React.ReactNode}) {
    const mdDeviceCheck = useMediaQuery('(min-width:1024px)');

    const wrapperStyles = 'h-full m-auto w-full max-w-[375px] min-[375px]:max-w-[375px] min-[576px]:max-w-[500px] sm:max-w-[580px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl';
    const wrapper = templateFormat === TemplateFormat.LATEST || TemplateFormat.WHY || undefined ? wrapperStyles : '';
    const bgColorAndzIndex = templateFormat === TemplateFormat.WHY ? 'bg-gray-100' : 'bg-zinc-50';
    const smBgStyles = "bg-[url(/images/bg-intro-mobile.svg)] bg-no-repeat bg-top bg-contain md:bg-cover md:bg-position-[0px_-280px]"; // Removed styles: sm:bg-position-[-160px_-410px] sm:bg-size-[200%] md:bg-position-[-220px_-527px];
    const lgBgStyles = "bg-[url(/images/bg-intro-desktop.svg)] bg-no-repeat lg:bg-position-[475px_-70px] lg:bg-size-[110%] xl:bg-position-[580px_-220px] desktop:bg-position-[630px_-175px] desktop:bg-size-[1250px] 2xl:bg-position-[700px_-175px] 3xl:bg-position-[1210px_-150px]";
    const bgStyles = mdDeviceCheck ? lgBgStyles : smBgStyles;

    return(
        <div className={`${templateFormat ? 'min-h-[660px]' : ''} flex w-full text-center justify-center xl:text-left ${bgColorAndzIndex} overflow-x-clip overflow-y-visible ${templateFormat === TemplateFormat.HERO ? bgStyles : ''}`}>                            
            <div className={wrapper}>
                {children}
            </div>    
        </div>
    )
}