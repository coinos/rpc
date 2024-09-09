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
```
