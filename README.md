# @coinos/rpc

A simple wrapper for making bitcoin RPC calls

```javascript
  import rpc from "@coinos/rpc";

  let config = {
      host: "localhost",
      wallet: "demo",
      user: "user",
      password: "123",
      network: "regtest",
      port: 18443,
  }

  let bc = rpc(config);

  let info = await bc.getWalletInfo();

  console.log(info);

  // positional params
  let a = await bc.getRawTransaction("4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b");

  // named params
  let b = await bc.getRawTransaction({ txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b" });
  
```
