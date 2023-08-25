import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';
import { useEffect} from 'react';
import { Image, Svg } from 'react-native-svg';

interface Props {
    id: number;
    path: string;
    title: string;
    image: any;
}

export function HighlightsCard({id, image: Image, path, title}: Props) {
    const navigation: any = useNavigation();

    return (
        <Container onPress={() => navigation.navigate(path)}>
            <Image />
            <Title>{title}</Title>
        </Container>
    )
}