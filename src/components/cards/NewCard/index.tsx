import {useState, useEffect} from "react";
import { Container, ContentButton, DateText, Subtitle, Title, Image } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    onPress: () => void;
    thumbnail?: string;
}

export function NewCard({ date, id, onPress, subtitle, title, thumbnail }: Props) {
    const theme = useTheme();
    const [dateFormated, setDateFormated] = useState<string>();
    
    useEffect(() => {
        if(date) {
            const split = date.split('T')[0];
            const [year, month, day] = split.split('-');
            setDateFormated(`${day}/${month}/${year}`);
        }
    }, [date]);

    return (
        <Container onPress={onPress}>
            {thumbnail && <Image source={{ uri: thumbnail.replace('www.', '') }} />}
            <ContentButton>
                <Title numberOfLines={3}>{title}</Title>
                <DateText>{dateFormated ?? ''}</DateText>
            </ContentButton>
        </Container>
    )
}