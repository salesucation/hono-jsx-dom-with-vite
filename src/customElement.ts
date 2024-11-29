class CurrentYear extends HTMLElement{
    async connectedCallback(){
        this.innerHTML = String(new Date().getFullYear());
    }
}

customElements.define("x-year", CurrentYear);

class GetTimeJson extends HTMLElement{
    async connectedCallback(){
        //const response = await client.api.clock.$get()
        const response = await fetch(import.meta.url.replace(/(src\/|static\/)customElement.(j|t)s/, "api/clock"));
        const data = await response.json()
        const headers = Array.from(response.headers.entries()).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
        const fullResponse = {
          url: response.url,
          status: response.status,
          headers,
          body: data
        }
        this.innerHTML = `<pre>${JSON.stringify(fullResponse, null, 2)}</pre>`;
    
    }
}

customElements.define("x-time", GetTimeJson);