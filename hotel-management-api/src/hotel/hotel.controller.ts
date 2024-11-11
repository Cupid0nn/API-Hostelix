import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from '../Entityes/hotel.entity';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Hotel> {
    return this.hotelService.findOne(id);
  }

  @Post()
  create(@Body() hotel: Hotel): Promise<Hotel> {
    return this.hotelService.create(hotel);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() hotel: Partial<Hotel>): Promise<Hotel> {
    return this.hotelService.update(id, hotel);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.hotelService.remove(id);
  }
}
