import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from '../Entityes/room.entity';
import { Hotel } from '../Entityes/hotel.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}

  findAll(): Promise<Room[]> {
    return this.roomRepository.find({ relations: ['hotel'] });
  }

  findOne(id: number): Promise<Room> {
    return this.roomRepository.findOne({ where: { id }, relations: ['hotel'] });
  }

  async create(room: Room, hotelId: number): Promise<Room> {
    const hotel = await this.hotelRepository.findOneBy({ id: hotelId });
    room.hotel = hotel;
    return this.roomRepository.save(room);
  }

  async update(id: number, room: Partial<Room>): Promise<Room> {
    await this.roomRepository.update(id, room);
    return this.roomRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.roomRepository.delete(id);
  }
}
