class CurrentYear extends HTMLElement{
    async connectedCallback(){
        this.innerHTML = String(new Date().getFullYear());
    }
}

customElements.define("x-year", CurrentYear);