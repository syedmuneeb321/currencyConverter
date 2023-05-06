export type typeConvertion={
    from:"USD"|"PKR"|"LIRA";
    to:"usd"|"pkr"|"lira";
    amount:number;
};

export type typeCurrency={
    USD:{
        usd:number;
        pkr:number;
        lira:number;
    },
    PKR:{
        
        pkr:number,
        usd:number,
        lira:number,
    },
    LIRA:{
        lira:number,
        usd:number,
        pkr:number,
    }
}