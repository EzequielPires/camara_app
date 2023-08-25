import { Image } from 'react-native';
import LogoIcon from '../../../assets/logo.png';
import LogoSvg from '../../../assets/logo-icon.svg';
import { Container, Content, Header, Highlights, Section, Subtitle, Title } from './styles';
import { categories } from '../../utils/categories';
import { HighlightsCard } from '../../components/cards/HighlightsCard';
import { ReactNode } from 'react';

export function Home() {
    return (
        <Container>
            <Header>
                <Image source={LogoIcon} style={{ width: 48, height: 82 }} />
                <Content>
                    <Subtitle>Seja bem vindo(a) ao aplicativo da</Subtitle>
                    <Title>Câmara Municipal de Catalão</Title>
                </Content>
            </Header>
            <Section>
                <Highlights>
                    {categories.map(category => <HighlightsCard id={category.id} image={category.image} path={category.path} title={category.title} key={category.id} />)}
                </Highlights>
            </Section>
        </Container>
    )
}