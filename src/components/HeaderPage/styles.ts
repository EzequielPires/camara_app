import styled from "styled-components/native"

export const Header = styled.View`
    position: relative;

    flex-direction: row;
    align-items: center;

    padding: 48px 24px 8px 24px;
    margin-bottom: 24px;
    background-color: ${({ theme }) => theme.colors.main};
`
export const HeaderTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.light};
`