import ContainerFrame from "@components/atoms/container-frame/ContainerFrame";
import ContainerTemplate from "@components/atoms/container-template/ContainerTemplate";
import React from "react";

export enum TemplateFormat {
    HERO,
    WHY,
    LATEST
}

export type ContainerType = {
    templateFormat?: TemplateFormat,
    title: string,
    subtitle?: string,
    children: React.ReactNode
}

export default function SectionContainer({templateFormat, title, subtitle, children}: ContainerType) {
    return(
        <ContainerFrame templateFormat={templateFormat}>
            <ContainerTemplate 
                templateFormat={templateFormat} 
                title={title}
                subtitle={subtitle}
            >
                {children}
            </ContainerTemplate>
        </ContainerFrame>
    )
}
