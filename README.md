# UTFPRInquadra-webservice

-Inicializar o postgresql usando docker
docker run -itd -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -v /data:/var/lib/postgresql/data --name postgresql postgres


-Inicializar o projeto após clonagem
1- Adicionar um arquivo .env
DATABASE_URL="postgresql"
npm install
npx prisma generate
npx prisma migrate dev
