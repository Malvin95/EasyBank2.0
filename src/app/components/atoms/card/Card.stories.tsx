import Card, { CardFormat } from "./Card";
import { Meta, StoryObj } from '@storybook/nextjs/*';
import onlineImage from '../../../../../public/images/icon-online.svg';

const meta = {
    title: 'Atoms/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const InfoCard: Story = {
    args: {
        cardType: CardFormat.INFO,
        imageUrl: onlineImage,
        title: 'Test Info Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tortor et ultricies tristique.',
        alt: 'test alt tag'
    }
}

export const BlogCard: Story = {
    args: {
        cardType: CardFormat.BLOG,
        imageUrl: '/images/image-currency.jpg',
        author: 'John Doe',
        title: 'Test Blog Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tortor et ultricies tristique.',
        alt: 'test alt tag'
    }
}
