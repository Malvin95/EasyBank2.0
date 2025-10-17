import { TemplateFormat } from "@components/molecules/sectionContainer/SectionContainer";


export default function ContainerWrapper({templateFormat, children}: {templateFormat?: TemplateFormat, children: React.ReactNode}) {
    const wrapperStyles = 'h-full m-auto w-full max-w-[375px] min-[375px]:max-w-[375px] min-[576px]:max-w-[500px] sm:max-w-[580px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl';
    const wrapper = templateFormat === TemplateFormat.LATEST || TemplateFormat.WHY || undefined ? wrapperStyles : '';
    const bgColorAndzIndex = templateFormat === TemplateFormat.WHY ? 'bg-gray-100' : 'bg-zinc-50';

    return(
        <div className={`${templateFormat ? 'min-h-[660px]' : ''} flex w-full text-center justify-center xl:text-left ${bgColorAndzIndex}`}>
            <div className={wrapper}>
                {children}
            </div>
        </div>
    )
}