import mongoose from 'mongoose';
import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.init();
  }

  async init() {
    try {
      this.connection = await mongoose.connect(databaseConfig.url, {
        writeConcern: { w: 'majority' }
      });
      console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
      process.exit(1); // Encerra o processo se a conexão falhar
    }
  }
}

export default new Database();
