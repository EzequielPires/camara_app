import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 30.5%;
    height: 112px;

    align-items: center;
    justify-content: center;

    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 8px;
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.main};  
    margin-top: 8px;
`