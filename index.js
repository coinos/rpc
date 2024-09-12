let method = "POST";
let str = (p, params) => JSON.stringify({ method: p.toLowerCase(), params });
let f = (a) => (a.length === 1 && typeof a[0] === "object" && !Array.isArray(a[0]) ? a[0] : a);
let h = (r) => { if (!r) return; if (r.error) throw r.error; return r.result; };

export default ({ host, port, wallet, user, password }) => {
  let u = `http://${host}:${port}/wallet/${wallet}`;
  let token = btoa(`${user}:${password}`);
  let headers = { authorization: `Basic ${token}` };
  let p = (body) => fetch(u, { method, headers, body }).then((r) => r.json());
  let get = (_, prop) => (...args) =>  p(str(prop, f(args))).then(h);
  return new Proxy({}, { get });
};
