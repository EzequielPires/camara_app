import { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { api } from "../../services/api";
import { HeaderPage } from "../../components/HeaderPage";
import { Container, FooterList } from "./styles";
import { NewCard } from "../../components/cards/NewCard";
import { useNavigation } from '@react-navigation/native';

export function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation: any = useNavigation();

    const findNews = async () => {
        try {
            setLoading(true);
            const { data } = await api.get('/news');
            if (data) setNews(data);
        } catch (error) {
            alert('Parece que algo deu errado.')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        findNews();
    }, [])

    return (
        <Container>
            <HeaderPage title="Noticias" />
            <ScrollView style={{ paddingHorizontal: 24, flex: 1 }}>
                {loading &&
                    <FooterList>
                        <ActivityIndicator size={24} color={'#121212'} />
                    </FooterList>
                }
                {news.map(item => (
                    <NewCard
                        key={item.id}
                        id={item.id}
                        date={item.created_at}
                        onPress={() => navigation.navigate('NewDetail', { newDetail: item })}
                        subtitle={item.state}
                        title={item.title}
                        thumbnail={item.thumbnail}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}