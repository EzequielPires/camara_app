import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
    width: 100%;

    align-items: flex-start;
    justify-content: flex-start;

    background-color: ${({theme}) => theme.colors.light};
    border-radius: 8px;
    padding: 12px;
    
    border-width: .5px;
    border-color: #d3d3d3;

    margin-bottom: 8px;
`
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 16px;
    color: ${({theme}) => theme.colors.title};
`
export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.light};
    font-size: 12px;
    color: ${({theme}) => theme.colors.text_detail};
`
export const Author = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 14px;
    color: ${({theme}) => theme.colors.main};
`
export const Date = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
`
export const ContentButton = styled.View`
    flex-direction: row;
    align-items: center;
`