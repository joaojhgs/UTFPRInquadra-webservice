# UTFPRInquadra-webservice

# Passo a passo inicial

**Dependencias**

Instale as dependencias de dev:

`apt install curl git docker docker-compose`

**Instale o Node Version Manager (NVM)**

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

`
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
`

**Instale a versão do node a ser utilizada**

`
nvm install 14.18.0
`

`nvm use 14.18.0`

**Instale o Tilt:**

`curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash`

Adicione o yarn package manager ao seu computador:
`npm install --global yarn`

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

# Desenvolvimento

Sempre que forem desenvolver algo ou testar, basta rodar o `tilt up` na pasta do projeto.

Para ver/editar os dados do banco local basta executar o comando `yarn prisma studio`.
