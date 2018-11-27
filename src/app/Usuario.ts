export class Usuario{
    id: number;
    nome: string;
    email: string;
    profissao:{
        id: number;
        profissao: string;
    };
    login: string;
    senha: string;
    ativo: boolean;
    numeroCRMV: string;
    permissao:[{
        id: number;
        authority: string;
        permissao: string;
    }];
    funcao: string;
    
}