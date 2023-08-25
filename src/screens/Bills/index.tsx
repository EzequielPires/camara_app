import { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { HeaderPage } from "../../components/HeaderPage";
import { Container, Content, FooterList, ListMatters } from "./styles";
import { IMetters } from "../../interfaces/types";
import { apiCamara } from "../../services/apiCamara";
import { FileCard } from "../../components/cards/FileCard";

export function Bills() {
    const theme = useTheme();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [matters, setMatters] = useState<IMetters[] | null>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const handleMatters = async () => {
        try {
            setLoading(true);
            if (totalPages && page <= totalPages) {
                const { data } = await apiCamara.get(`materia/materialegislativa?tipo=${1}&page=${page}`);
                if (data) {
                    setPage(page + 1);
                    setTotalPages(data.pagination.total_pages);
                    setMatters([...matters, ...data.results])
                }
            } else {
                const { data } = await apiCamara.get(`materia/materialegislativa?tipo=${1}`);
                if (data) {
                    setPage(page + 1);
                    setTotalPages(data.pagination.total_pages);
                    setMatters([...matters, ...data.results])
                }
            }
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleMatters();
    }, []);
    return (
        <Container>
            <HeaderPage title="Prejetos de Leis" />
            <Content>
                <ListMatters>
                    <FlatList
                        data={matters}
                        keyExtractor={(item, index) => item.id.toString() + index}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <FileCard
                                key={item.id}
                                onPress={async () => { }}
                                title={item.__str__.split(' - ')[1] ?? item.__str__}
                                subtitle={item.ementa}
                                link={item.texto_original}
                            />
                        }
                        onEndReached={handleMatters}
                        onEndReachedThreshold={.1}
                        ListFooterComponent={
                            loading &&
                            <FooterList>
                                <ActivityIndicator size={24} color={'#121212'} />
                            </FooterList>
                        }
                    />
                </ListMatters>
            </Content>
        </Container>
    )
}