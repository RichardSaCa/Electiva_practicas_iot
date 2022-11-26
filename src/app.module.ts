import { Module } from '@nestjs/common';
import { PortatilController } from './portatiles/adapters/portatiles.controller';
import { PortatilService } from './portatiles/domain/services/portatil.service';

@Module({
  imports: [],
  controllers: [PortatilController],
  providers: [PortatilService],
})
export class AppModule {}
