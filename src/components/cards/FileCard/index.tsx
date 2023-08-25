import {useState} from "react";
import { Author, Container, ContentButton, Date, Subtitle, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import * as FileSystem from "expo-file-system";
import { Linking } from "react-native";
import { IAuthors } from "../../../interfaces/types";

interface Props {
    title: string;
    subtitle?: string;
    onPress: () => void;
    author?: IAuthors;
    link?: string;
}

export function FileCard({ onPress, title, subtitle, author, link }: Props) {
    return (
        <Container onPress={() => link ? Linking.openURL(link) : null}>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {author && <Author>{author.nome}</Author>}
        </Container>
    )
}