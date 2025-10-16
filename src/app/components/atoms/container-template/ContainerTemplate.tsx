import { ContainerType, TemplateFormat } from "@components/molecules/sectionContainer/SectionContainer";


export default function ContainerTemplate({templateFormat, children, title, subtitle}: ContainerType) {
    const titleStyles = templateFormat === TemplateFormat.HERO ? 'text-6xl font-bold' : 'text-3xl font-light';
    return(
        <>
            <div className="xl:w-2/3">
                <p className={`text-[hsl(233,26%,24%)] mb-6 ${titleStyles}`}>{title}</p>
                {subtitle && (<p className="text-[hsl(233,8%,62%)] text-xl xl:max-w-lg">{subtitle}</p>)}
            </div>
            <div className="mt-16 w-full sm:flex sm:flex-wrap sm:justify-between md:justify-around xl:justify-between">
                {children}
            </div>
        </>
    )
}
