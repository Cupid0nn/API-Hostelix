import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from '../Entityes/room.entity';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Room> {
    return this.roomService.findOne(id);
  }

  @Post(':hotelId')
  create(@Body() room: Room, @Param('hotelId') hotelId: number): Promise<Room> {
    return this.roomService.create(room, hotelId);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() room: Partial<Room>): Promise<Room> {
    return this.roomService.update(id, room);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.roomService.remove(id);
  }
}
