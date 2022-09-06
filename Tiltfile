local_resource(
    'utfinquadra-postgres',
    'sudo docker pull postgres:13.4',
    deps=['docker-compose.yml'],
    serve_cmd='sudo docker-compose up',
)

local_resource(
    'utfinquadra-webservice',
    'yarn install --frozen-lockfile',
    deps=['fpackage.json', 'yarn.lock'],
    serve_cmd='yarn dev',
)