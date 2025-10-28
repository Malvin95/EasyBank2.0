import { TemplateFormat } from "@components/molecules/sectionContainer/SectionContainer";


export default function ContainerFrame({templateFormat, children}: {templateFormat?: TemplateFormat, children: React.ReactNode}) {
    const wrapperStyles = 'h-full w-2xs mt-16 mb-14 sm:w-[580px] md:w-2xl lg:w-4xl xl:w-6xl';
    const wrapper = templateFormat === TemplateFormat.LATEST || TemplateFormat.WHY || undefined ? wrapperStyles : '';
    const bgColorAndzIndex = templateFormat === TemplateFormat.WHY ? 'bg-gray-100' : 'bg-zinc-50';

    return(
        <div className={`flex w-full min-h-[660px] text-center justify-center xl:text-left ${bgColorAndzIndex}`}>
            <div className={wrapper}>
                {children}
            </div>
        </div>
    )
}