import IconNoticias from '../../assets/Icons/icons04.svg';
import IconLeis from '../../assets/Icons/icons07.svg';
import IconNormas from '../../assets/Icons/icons13.svg';
import IconRequerimentos from '../../assets/Icons/icons09.svg';
import LogoIcon from '../../assets/logo-icon.svg';
import IconMultimidia from '../../assets/Icons/icons10.svg';
import IconMatLegislativa from '../../assets/Icons/icons11.svg';

export const categories = [
    {
        id: 1,
        path: 'News',
        title: 'Notícias',
        image: IconNoticias
    },
    {
        id: 2,
        path: 'Bills',
        title: 'Proj. de Lei',
        image: IconLeis
    },
    {
        id: 3,
        path: 'LegalNorms',
        title: 'Normas  ',
        image: IconNormas
    },
    {
        id: 4,
        path: 'LegislativeMatters',
        title: 'Mat. legislativa',
        image: IconMatLegislativa
    },
    {
        id: 6,
        path: 'Requirements',
        title: 'Requerimentos',
        image: IconRequerimentos
    },
    {
        id: 7,
        path: 'https://camaracatalao.go.gov.br/p/sessao-ao-vivo',
        title: 'Sessões ao vivo',
        image: IconMultimidia
    },
]