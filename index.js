let method = "POST";
let s = (p, params) => JSON.stringify({ method: p.toLowerCase(), params });

export default ({ host, port, wallet, user, password }) => {
  let u = `http://${host}:${port}/wallet/${wallet}`;
  let token = btoa(`${user}:${password}`);
  let headers = { authorization: `Basic ${token}` };
  let p = (body) => fetch(u, { method, headers, body }).then((r) => r.json());

  let get =
    (_, prop) =>
    (...params) =>
      p(s(prop, params)).then((r) => r.result);

  return new Proxy({}, { get });
};
