import styled from "styled-components/native";

export const Container = styled.ScrollView`
    
`
export const Header = styled.View`
    height: 120px;
    position: relative;

    flex-direction: row;
    align-items: center;

    padding: 48px 24px 24px;
    background-color: ${({ theme }) => theme.colors.main};
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
`
export const Avatar = styled.View`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.main_light};
    border-radius: 8px;
    margin-right: 12px;
`
export const Content = styled.View`
    margin-left: 8px;
`
export const Search = styled.View`
    height: 48px;

    flex-direction: row;
    align-items: center;

    position: absolute;
    left: 24px;
    right: 24px;
    bottom: -24px;
`
export const Input = styled.TextInput`
    height: 48px;
    width: 100%;

    padding: 12px;
    padding-left: 48px;

    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, .15);
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semibold};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.light};
`
export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.light};
`
export const City = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semibold};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.light};
`
export const Section = styled.View`
    padding: 16px 24px;
`
export const SectionHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left-width: 4px;
    border-color: ${({ theme }) => theme.colors.main};
    padding-left: 8px;
`
export const SectionTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
`
export const SectionMore = styled.TouchableOpacity`
    
`
export const TextSectionMore = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semibold};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.main};   
`
export const Highlights = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const HighlightsCard = styled.TouchableOpacity`
    width: 30.5%;
    height: 112px;

    align-items: center;
    justify-content: center;

    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 8px;
`
export const HighlightsCardText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.main};  
    margin-top: 8px;
`
export const Services = styled.View`
    margin-top: 16px;
`

export const ServiceButton = styled.TouchableOpacity`
    width: 100%;
    height: 72px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme}) => theme.colors.main};
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 12px;
`

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semibold};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.light};
`
export const Images = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 16px;
`
export const Image = styled.Image`
    width: 30.5%;
    height: 112px;

    align-items: center;
    justify-content: center;

    margin-bottom: 16px;
    border-radius: 8px;
`
export const Councilors = styled.ScrollView`
    margin-top: 16px;
`