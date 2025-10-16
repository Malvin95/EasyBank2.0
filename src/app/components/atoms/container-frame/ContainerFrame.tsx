import { TemplateFormat } from "@components/molecules/sectionContainer/SectionContainer";


export default function ContainerFrame({templateFormat, children}: {templateFormat?: TemplateFormat, children: React.ReactNode}) {
    const wrapperStyles = 'h-full ml-5 mr-5 mt-16 mb-14 sm:ml-16 sm:mr-16 md:ml-8 md:mr-8 lg:ml-4 lg:mr-4 xl:w-7xl';
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