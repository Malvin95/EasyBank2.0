import { TemplateFormat } from "@components/molecules/sectionContainer/SectionContainer";

export default function ContainerWrapper({templateFormat, children}: {templateFormat?: TemplateFormat, children: React.ReactNode}) {

    const wrapperStyles = 'h-full m-auto w-full max-w-[375px] min-[375px]:max-w-[375px] min-[576px]:max-w-[500px] sm:max-w-[580px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl';
    const wrapper = templateFormat === TemplateFormat.LATEST || TemplateFormat.WHY || undefined ? wrapperStyles : '';
    const bgColorAndzIndex = templateFormat === TemplateFormat.WHY ? 'bg-gray-100' : 'bg-zinc-50';
    // const backgroundStyles = templateFormat === TemplateFormat.HERO ? "bg-[url(/images/bg-intro-desktop.svg)] bg-no-repeat bg-position-[-167px_-291px] bg-size-[240%] sm:bg-position-[-160px_-410px] sm:bg-size-[200%] md:bg-position-[-220px_-527px] lg:bg-position-[475px_-70px] lg:bg-size-[110%] desktop:bg-position-[630px_-175px] desktop:bg-size-[1250px]" : '';

    return(
        <div className={`${templateFormat ? 'min-h-[660px]' : ''} flex w-full text-center justify-center xl:text-left ${bgColorAndzIndex} overflow-x-clip overflow-y-visible`}>                            
            <div className={wrapper}>
                {children}
            </div>    
        </div>
    )
}