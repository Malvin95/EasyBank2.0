import React from "react";

export enum ContainerFormat {
    HERO,
    WHY,
    LATEST
}

export type ContainerType = {
    containerFormat?: ContainerFormat,
    title: string,
    subtitle?: string,
    children: React.ReactNode
}

export default function SectionContainer({containerFormat, children, title, subtitle}: ContainerType) {
    const wrapperStyles = 'h-full ml-5 mr-5 mt-16 mb-14 sm:ml-16 sm:mr-16 md:ml-8 md:mr-8 lg:ml-4 lg:mr-4 xl:w-7xl';
    const wrapper = containerFormat === ContainerFormat.LATEST || ContainerFormat.WHY || undefined ? wrapperStyles : '';
    
    const bgColorAndzIndex = containerFormat === ContainerFormat.WHY ? 'bg-gray-100' : 'bg-zinc-50';
    const titleStyles = containerFormat === ContainerFormat.HERO ? 'text-6xl font-bold' : 'text-3xl font-light';

    return(
        <div className={`flex w-full min-h-[660px] text-center justify-center xl:text-left ${bgColorAndzIndex}`}>
            <div className={wrapper}>
                <div className="xl:w-2/3">
                    <p className={`text-[hsl(233,26%,24%)] mb-6 ${titleStyles}`}>{title}</p>
                    {subtitle && (<p className="text-[hsl(233,8%,62%)] text-xl xl:max-w-lg">{subtitle}</p>)}
                </div>
                <div className="mt-16 w-full sm:flex sm:flex-wrap sm:justify-between md:justify-around xl:justify-between">
                    {children}
                </div>
            </div>
        </div>
    )
}
