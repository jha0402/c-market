# C-Market

## Project Setup

-   React v18
-   TailwindCSS v3

```shell
npx create-next-app@latest --typescript
yarn add next@latest react@rc react-dom@rc
npx tailwindcss init -p
```

### Prisma

-   VS Code Prisma extension installed
-   Prisma installed as devDependency, install prisma client

```shell
yarn add prisma -D
yarn add @prisma/client
```

#### Setting up Prisma

```shell
npx prisma init
```

-   Setting .env
-   schema.prisma :

```js
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["referentialIntegrity"]
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  referentialIntegrity = "prisma"
}
```

-   Pushing db

```shell
npx prisma db push
```

-   DB visual server command:

```shell
npx prisma studio
```

#### Prisma Client

-   Create prisma client in node modules

```shell
npx prisma generate
```

-   Setup prisma client

```js
// libs/client.ts
import { PrismaClient } from '@prisma/client';

export default new PrismaClient();
```

-   Set prisma client in api

```js
// pages/api/hello.ts
// Example:
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/client';

type Data = {
    name: string,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    await client.user.create({
        data: {
            email: 'hi',
            name: 'hi',
        },
    });
    res.status(200).json({ name: 'John Doe' });
}
```

### Planetscale

-   Install planetscale cli
-   Install mysql client

```shell
brew install planetscale/tap/pscale
brew install mysql-client
```

#### Connecting planetscale

```shell
pscale auth login
```

-   Select Asia Pacific - Tokyo region

```shell
pscale region list
pscale database create c-market --region ap-northeast
pscale connect c-market
```
