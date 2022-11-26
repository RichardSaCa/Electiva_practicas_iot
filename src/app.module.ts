import { Module } from '@nestjs/common';
import { PortatilController } from './portatiles/adapters/portatiles.controller';
import { PortatilService } from './portatiles/domain/services/portatil.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [PortatilController],
  providers: [PortatilService],
})
export class AppModule {}