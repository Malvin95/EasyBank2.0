import InviteButton from '@components/atoms/invite-button/InviteButtonComponent';
import ContainerTemplate from '@components/atoms/container-template/ContainerTemplate';
import { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';
import ContainerWrapper from '@components/atoms/container-wrapper/ContainerWrapper';


const title = 'Next generation digital banking';
const subtitle = 'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.';

// const mobileStyles = "min-[375px]:-top-[54px] min-[375px]:-mb-20 min-[576px]:-top-[100px] min-[576px]:-mb-32"; // Custom breakpoint styles for smaller devices

export function ResponsiveHeroSection() {
    return(
        <ContainerWrapper templateFormat={TemplateFormat.HERO}>
            <div className='flex flex-wrap-reverse h-full lg:flex-nowrap'>
                <div className='flex h-[720px] lg:h-[800px] lg:w-1/2 xl:w-2/3 mt-20'>
                    <div className='mt-auto lg:m-auto'>
                        <ContainerTemplate 
                            templateFormat={TemplateFormat.HERO} 
                            title={title} 
                            subtitle={subtitle}
                        >
                            <div className='w-full flex justify-center lg:justify-start'>
                                <InviteButton />
                            </div>
                        </ContainerTemplate>
                    </div>
                </div>
                {/* Removed the styles: bg-[url(/images/bg-intro-desktop.svg)] bg-no-repeat bg-position-[30%_-350px] bg-size-[240%] */}
                {/* 
                    <div className='w-full lg:h-full lg:w-1/2'> 
                        <Image src={imageMockup} alt='imgMockups' className={`relative z-1 -top-8 -mb-16 ${mobileStyles} sm:-top-32 sm:-mb-36 md:-top-40 md:-mb-48`}/>
                    </div> 
                */}
            </div>
        </ContainerWrapper>
    )
}