let method = "POST";
let str = (p, params) => JSON.stringify({ method: p.toLowerCase(), params });

export default ({ host, port, wallet, user, password }) => {
  let u = `http://${host}:${port}/wallet/${wallet}`;
  let token = btoa(`${user}:${password}`);
  let headers = { authorization: `Basic ${token}` };
  let post = (body) => fetch(u, { method, headers, body }).then((r) => r.json());
  let get = (_, prop) => (...params) => post(str(prop, params)).then((r) => r.result);

  return new Proxy({}, { get });
};
