class LinkedList{
    #head;
    #tail;
    #qtd;

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#qtd = 0;
    }

    isEmpty(){
        return this.#qtd === 0;
    }

    addFirst(novoDado){
        const novoNo = new No(novoDado);

        if(this.isEmpty()){
            this.#head = novoNo;
            this.#tail = novoNo;
        }else{
            novoNo.proximo = this.#head;
            this.#head.anterior = novoNo;
            this.#head = novoNo;
        }

        this.#qtd++;
        return true;
    }

    addLast(novoDado){
        const novoNo = new No(novoDado);

        if(this.isEmpty())
            this.#head = novoNo;
        else{
            novoNo.anterior = this.#tail;
            this.#tail.proximo = novoNo;
        }

        this.#tail = novoNo;
        this.#qtd++;
        return true;
    }

    add(indice, novoDado){

        if(indice < 0 || indice > this.#qtd)
            return false;

        if(indice === 0)
            return this.addFirst(novoDado);

        if(indice === this.#qtd)
            return this.addLast(novoDado);

        const novoNo = new No(novoDado);

        let atual = this.#head;

        for(let i = 0; i < indice; i++){
            atual = atual.proximo;
        }

        novoNo.proximo = atual;
        novoNo.anterior = atual.anterior;

        atual.anterior.proximo = novoNo;
        atual.anterior = novoNo;

        this.#qtd++;
        return true;
    }

    removeFirst(){
        const dadoRemovido = this.#head.dado;

        this.#head = this.#head.proximo;

        if(this.#head !== null)
            this.#head.anterior = null;
        else
            this.#tail = null;

        this.#qtd--;
        return dadoRemovido;
    }

    removeLast(){
        const dadoRemovido = this.#tail.dado;

        this.#tail = this.#tail.anterior;

        if(this.#tail !== null)
            this.#tail.proximo = null;
        else
            this.#head = null;

        this.#qtd--;
        return dadoRemovido;
    }

    get length(){
        return this.#qtd;
    }

    //-------------------------------------

    [Symbol.iterator]() {
        let noAtual = this.#head;

        return {
            next: function() {
                if (noAtual !== null) {
                    let valor = noAtual.dado;
                    noAtual = noAtual.proximo;
                    return { value: valor, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }

    //----------------
   toString() {
    let resultado = "";
    let atual = this.#head;

    while(atual !== null){
        resultado += atual.dado + " ";
        atual = atual.proximo;
    }

    return resultado.trim();
}
    //----------------
}