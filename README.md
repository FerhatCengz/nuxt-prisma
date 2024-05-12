# 🚀 Prisma Nedir?

Prisma, veritabanı işlemlerini kolaylaştıran bir ORM (Object-Relational Mapping) aracıdır. Bu araç, veritabanı işlemlerini daha anlaşılır bir yapıya çevirir ve bunu otomatik olarak arkada gerçekleştirir. Artık karmaşık SQL sorgularıyla uğraşmak yerine, basit ve okunabilir Prisma komutları kullanarak veritabanı işlemlerini gerçekleştirebilirsiniz.

## 🛠️ Nasıl Kullanılır?

### 1. İlk adım olarak, projenize Prisma'yı ekleyin:

```bash
npm install prisma --save-dev
```

### 2. Daha sonra, Prisma'nın standart dosya yapısını oluşturun:

```bash
npx prisma init --datasource-provider sqlite veya mysql vs. 
```

Bu komutla birlikte, schema.prisma adında bir dosya oluşturulur. Bu dosyada, veritabanı bağlantı bilgileri ve tablolar tanımlanır.

### 3. schema.prisma dosyasında model tanımlamalarını yapın:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```



### 4. Prisma Client ile veritabanı işlemlerini gerçekleştirin:
Prisma Client, veritabanı işlemlerini gerçekleştiren bir yapıdır. Örneğin, `server/prismaClient.js` dosyasında şu şekilde kullanılabilir:

```typescript
import { PrismaClient } from '@prisma/client'

export default new PrismaClient()

```
### Bonus 🎁
Prisma Studio ile tabloları görüntüleyin ve üzerinde işlemler yapın:
Prisma Studio, oluşturulan tabloları görmemizi sağlar ve üzerinde işlemler yapmamızı kolaylaştırır.

```bash
npx prisma studio
```


