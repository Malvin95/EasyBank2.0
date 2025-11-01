import { ContainerType, TemplateFormat } from "@components/molecules/sectionContainer/SectionContainer";


export default function ContainerTemplate({templateFormat, children, title, subtitle}: ContainerType) {
    const titleStyles = templateFormat === TemplateFormat.HERO ? 'text-4xl lg:text-6xl font-normal' : 'text-3xl font-light';
    return(
        <div className={templateFormat ? "mt-16 mb-14" : ""}>
            <div className="xl:w-2/3">
                <p className={`text-[hsl(233,26%,24%)] mb-6 ${titleStyles}`}>{title}</p>
                {subtitle && (<p className="text-[hsl(233,8%,62%)] text-xl xl:max-w-lg">{subtitle}</p>)}
            </div>
            <div className="mt-16 w-full sm:flex sm:flex-wrap justify-center md:justify-around xl:justify-between">
                {children}
            </div>
        </div>
    )
}
