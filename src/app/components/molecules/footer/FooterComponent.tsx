import Image from 'next/image';

import footerlogo from '@images/footer-logo.svg';
import InviteButton from '@components/atoms/invite-button/InviteButtonComponent';
import LinkList from '@components/atoms/link-list/LinkList';
import IconBar from '@components/atoms/icon-bar/IconBar';

export default function Footer() {
    return(
        <div className="flex w-full content-center justify-center bg-[hsl(233,26%,24%)] center min-h-48">
            <div className='h-full w-2xs mt-auto mb-auto sm:w-[580px] md:flex md:w-2xl lg:w-4xl xl:w-6xl'>
                <div className="h-40 flex flex-col justify-evenly w-fit m-auto md:w-1/3">
                    <div className="w-fit">
                        <Image src={footerlogo} alt='logo'/>
                    </div>
                    <div className="w-fit flex">
                        <IconBar />
                    </div>
                </div>
                <div className="h-full w-fit m-auto md:w-1/5">
                    <LinkList list={['About Us', 'Contact', 'Blog']}/>
                </div>
                <div className="h-full w-fit m-auto md:w-1/5">
                    <LinkList list={['Careers', 'Support', 'Privacy Policy']} />
                </div>
                <div className="h-40 flex justify-evenly items-center flex-col md:w-1/3 md:items-end">
                    <InviteButton />
                    <p className='text-center md:text-end text-[hsl(233,8%,62%)]'>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}