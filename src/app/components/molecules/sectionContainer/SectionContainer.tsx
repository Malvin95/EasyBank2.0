import ContainerWrapper from "@components/atoms/container-wrapper/ContainerWrapper";
import ContainerTemplate from "@components/atoms/container-template/ContainerTemplate";
import React from "react";

export enum TemplateFormat {
    HERO = 'Hero',
    WHY = 'Why',
    LATEST = 'Latest'
}

export type ContainerType = {
    templateFormat?: TemplateFormat,
    title: string,
    subtitle?: string,
    children: React.ReactNode
}

export default function SectionContainer({templateFormat, title, subtitle, children}: ContainerType) {
    return(
        <ContainerWrapper templateFormat={templateFormat}>
            <ContainerTemplate 
                templateFormat={templateFormat} 
                title={title}
                subtitle={subtitle}
            >
                {children}
            </ContainerTemplate>
        </ContainerWrapper>
    )
}
