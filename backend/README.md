### 1. renombre el .env.example por .env

2. ```bash
   npm install
   ```

3. ```bash
   docker compose up -d
   ```

4. ```bash
   npm run dev
   ```

# rutas

1- localhost:4000/api/auth/register

```json
{
  "name": "test",
  "email": "test@gmail.com",
  "password": "123456"
}
```

2- localhost:4000/api/auth/login

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```
