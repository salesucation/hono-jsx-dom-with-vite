## Hono microfrontend

TLDR;

```sh
pip install -r requirements.txt
ansible-playbook playbook.yml
npm install
npm run dev
```
This is a microfrontend written with Hono. It can be deployed directly on Cloudflare. Instrument this using the example at [https://github.com/rhildred/node-otel](https://github.com/rhildred/node-otel). You will also need to use the [instructions](https://opentelemetry.io/docs/languages/js/) and [exporters](https://opentelemetry.io/docs/languages/js/exporters/) to make the otel collector http (4318) send CORS Headers.
