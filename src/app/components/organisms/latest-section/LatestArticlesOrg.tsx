import Card, { CardFormat } from '@components/atoms/card/Card';

import { blogContent } from '@components/atoms/card/CardContent';
import SectionContainer, { ContainerFormat } from '@components/molecules/sectionContainer/SectionContainer';

export default function LatestSection() {
    return(
        <SectionContainer 
            containerFormat={ContainerFormat.LATEST}
            title={'Latest Articles' }
        >
            {blogContent.map((item, key) => (
                    <Card
                        cardType={CardFormat.BLOG}
                        imageUrl={item.imageUrl}
                        author={item.author}
                        title={item.title}
                        content={item.content}
                        alt={item.alt}
                        key={key}
                    />
                )
            )}
        </SectionContainer>
    )
}