import React from "react";

export enum ContainerFormat {
    HERO,
    WHY,
    LATEST
}

export type ContainerType = {
    containerFormat: ContainerFormat,
    children: React.ReactNode
}

export default function SectionContainer({containerFormat,children}: ContainerType) {
    const wrapperStyles = 'h-full max-w-[1440px] m-auto ml-24 mr-24 flex flex-wrap';
    const bgColorAndzIndex = containerFormat === ContainerFormat.WHY ? 'bg-gray-100' : 'bg-zinc-50';
    const wrapper = containerFormat === ContainerFormat.LATEST || ContainerFormat.WHY ? wrapperStyles : '';

    return(
        <div className={`flex w-full min-h-[660px] justify-center ${bgColorAndzIndex}`}>
            <div className={wrapper}>
                {children}
            </div>
        </div>
    )
}
