import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
    width: 100%;

    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    background-color: ${({theme}) => theme.colors.light};
    border-radius: 8px;
    padding: 12px;
    
    border-width: .5px;
    border-color: #d3d3d3;

    margin-bottom: 8px;
`
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 16px;
    color: ${({theme}) => theme.colors.text};
    margin-bottom: 8px;
`
export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 12px;
    color: ${({theme}) => theme.colors.text_detail};
`
export const DateText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
`
export const ContentButton = styled.View`
    flex: 1;
    justify-content: space-between;
`
export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 4px;
    margin-right: 12px;
`