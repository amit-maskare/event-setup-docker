
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  BadRequestException,
  NotFoundException,
  Res
} from '@nestjs/common';
import { EventService } from './event/event.service';
import { EventList as EventListModel } from '@prisma/client';
import { EventDto } from './event/event.dto';

@Controller()
export class AppController {
  constructor(
    private readonly eventService: EventService
  ) { }

  @Get('events')
  async getEventList(): Promise<EventListModel[]> {
    return this.eventService.list({});
  }

  @Post('event')
  async createEvent(
    @Body() eventData: EventDto,
  ): Promise<EventListModel> {
    const { title, date, location } = eventData;
    return this.eventService.createEvent({
      title,
      date,
      location
    });
  }

  @Delete('event/:id')
  async deleteEvent(@Param('id') id: string): Promise<EventListModel> {
    const data = await this.eventService.deleteEvent({ id: id });

    if (!data) {
      throw new NotFoundException("Event not exist")
    }

    return data;
  }
}
