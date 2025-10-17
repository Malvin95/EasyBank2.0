import styles from './heroSection.module.css';
import Image from 'next/image';

import imageMockup from 'app/public/images/image-mockups.png';
import InviteButton from '@components/atoms/invite-button/InviteButtonComponent';
import ContainerFrame from '@components/atoms/container-frame/ContainerFrame';
import ContainerTemplate from '@components/atoms/container-template/ContainerTemplate';
import { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';


const title = 'Next generation digital banking'
const subtitle = 'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.'

export function ResponsiveHeroSection() {
    return(
        <ContainerFrame templateFormat={TemplateFormat.HERO}>
            <div className='flex flex-wrap-reverse h-full'>
                <div className='h-1/2'>
                    <ContainerTemplate 
                        templateFormat={TemplateFormat.HERO} 
                        title={title} 
                        subtitle={subtitle}
                    >
                        <InviteButton />
                    </ContainerTemplate>
                </div>
                <div className='w-full bg-[url(/images/bg-intro-desktop.svg)] bg-no-repeat bg-position-[30%_-350px] bg-size-[240%]'>
                    <Image src={imageMockup} alt='imgMockups' className='relative z-1 -top-[115px] -mb-24'/>
                </div>
            </div>
        </ContainerFrame>
    )
}

export function HeroSection() {
    return(
        <div className={styles.heroSectionContainer}>
            <div className={styles.leftHeroContainer}>
                <div className={styles.lfhSubject}>
                    <div className={styles.lfhSubItem}>
                        <p className={styles.heroSecHeader}>Next generation digital banking</p>
                        <p className={styles.heroSecSubtitle}>
                            Take your financial life online. Your Easybank account will be a one-stop-shop 
                            for spending, saving, budgeting, investing, and much more.
                        </p>
                        <div className={styles.btnContainer}>
                            <InviteButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightHeroContainer}>
                <Image className={styles.mockupOverlay} src={imageMockup} alt='imgMockups' />
            </div>
        </div>
    )
}