import { infoContent } from '@components/atoms/card/CardContent';
import Card, { CardFormat } from '@components/atoms/card/Card';
import SectionContainer, { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';

export default function WhySection() {
    let subtext = 'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.';
    
    return(
        <SectionContainer 
            templateFormat={TemplateFormat.WHY} 
            title={'Why choose Easybank?'} 
            subtitle={subtext}           
        >
            {infoContent.map((item, key) => (
                <Card
                    cardType={CardFormat.INFO}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    content={item.content}
                    alt={item.alt}
                    key={key}
                />
            ))}
        </SectionContainer>   
    )
}
