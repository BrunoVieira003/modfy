## Running locally

First, install the dependencies:

```bash
npm install
```

Set the database connection url variable replacing `username`, `password`, `host`, `port` according to your enviroment
```env
DATABASE_URL=postgres://username:password@host:port/modfy
```

Run prisma script
```bash
npx prisma db push
```

Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
