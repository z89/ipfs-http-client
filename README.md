# ipfs-http-client 

to make the development server work, you must do the following:

### **IPFS daemon:**
before starting your IPFS daemon instance, run the following command:

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"`
```

this allows CORS to be enabled in the IPFS config so the browser doesn't enable it's cross origin policy & block the communication