import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentsModule } from './shipments/shipments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ShipmentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
