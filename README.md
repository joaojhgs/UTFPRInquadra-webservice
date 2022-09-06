# UTFPRInquadra-webservice

# Passo a passo inicial

**Dependencias**

Instale as dependencias de dev:
`apt install git docker docker-compose`

Instale o Tilt:
`curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash`

Adicione o yarn package manager ao seu computador:
`npm i -g corepack`

**Clone esse projeto**

`git clone git@github.com:joaojhgs/UTFPRInquadra-webservice.git`

**Enviroments**
Basta renomear o arquivo `.env.example` para `.env`

# Inicialização
Abra a pasta clonada com o terminal e execute o tilt para subir uma instancia PostgreSQL e do webservice:
`tilt up`
(Não se deve cancelar a execução do tilt)

Por fim, execute os seguintes comandos em outro terminal para realizar as alterações necessarias no banco automaticamente:
`yarn prisma migrate deploy && yarn prisma generate`
