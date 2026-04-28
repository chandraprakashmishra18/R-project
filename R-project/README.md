# Context API  |
----------------
1. create a context
```
const userContext = createContext()
```

2.Provider
```
<userContext.Provider value={value}>
</userContext.Provider>
```

3. Use the context(consumer)
```
useContext(userContext)
```


