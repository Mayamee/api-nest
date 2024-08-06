import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoConnectionString(configService),
  };
};

function getMongoConnectionString(configService: ConfigService) {
  const user = configService.get('MONGO_LOGIN');
  const password = configService.get('MONGO_PASSWORD');
  const host = configService.get('MONGO_HOST');
  const port = configService.get('MONGO_PORT');
  const db = configService.get('MONGO_AUTH_DB');

  return `mongodb://${user}:${password}@${host}:${port}/${db}`;
}
