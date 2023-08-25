interface Params {
    id: number;
}
interface ICouncilor {
    nome_completo: string;
    fotografia: string;
    telefone: string;
    email: string;
    numero_gab_parlamentar: string;
    biografia: string;
    data_nascimento: string;
}
export interface IMetters {
    id: number;
    __str__: string;
    ementa: string;
    texto_original: string;
    autores: Array<number>
}
interface IMandates {
    id: number;
    __str__: string;
    tipo_causa_fim_mandato: any;
    data_inicio_mandato: string;
    data_fim_mandato: string;
    votos_recebidos: number;
    data_expedicao_diploma: string;
    titular: boolean;
    observacao: string;
    parlamentar: number;
    tipo_afastamento: any;
    legislatura: number;
    coligacao: any;
}
export interface IAuthors {
    id: number,
    __str__: string,
    metadata?: {
        additionalProp1?: string,
        additionalProp2?: string,
        additionalProp3?: string
    },
    autor_related?: string,
    object_id?: number,
    nome: string,
    cargo?: string,
    tipo: number,
    content_type?: number,
    operadores?: Array<number>
}