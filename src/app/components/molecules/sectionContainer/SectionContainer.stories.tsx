import { Meta, StoryObj } from "@storybook/nextjs/*";
import SectionContainer, { ContainerFormat } from "./SectionContainer";

const meta = {
    title: 'Molecule/Section Container',
    component: SectionContainer,
    tags: ['autodocs']
} satisfies Meta<typeof SectionContainer>;

export default meta;
type Story = StoryObj<typeof SectionContainer>;

export const StandardContainer: Story = {
    args: {
        containerFormat: ContainerFormat.LATEST,
        title: 'Test Title',
    },
    render: (args) => {
        return(
            <SectionContainer title={args.title}>
                <p className="text-gray-400">A Test Child Element</p>
            </SectionContainer>              
        )
    }
}

export const SectionSubtitleContainer: Story = {
    args: {
        containerFormat: ContainerFormat.LATEST,
        title: 'Test Title',
        subtitle: 'Here is a subtitle for the container'
    },
    render: (args) => {
        return(
            <SectionContainer title={args.title} subtitle={args.subtitle}>
                <p className="text-gray-400">A Test Child Element</p>
            </SectionContainer>              
        )
    }
}