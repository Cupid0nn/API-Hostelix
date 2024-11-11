import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HotelModule } from './hotel/hotel.module';
import { RoomModule } from './room/room.module';
import 'dotenv/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATAHOST'),
        port: parseInt(configService.get<string>('DATAPORTT'), 10),
        username: configService.get<string>('DATAUSER'),
        password: configService.get<string>('DATAPASS'),
        database: configService.get<string>('DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
        dropSchema: true,
      }),
    }),
    HotelModule,
    RoomModule,
  ],
})
export class AppModule {}
