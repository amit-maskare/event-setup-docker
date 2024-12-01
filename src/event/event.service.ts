
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { EventList, Prisma } from '@prisma/client';

@Injectable()
export class EventService {
    constructor(private prisma: PrismaService) { }

    async user(
        eventWhereUniqueInput: Prisma.EventListWhereUniqueInput,
    ): Promise<EventList | null> {
        return this.prisma.eventList.findUnique({
            where: eventWhereUniqueInput,
        });
    }

    async list(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EventListWhereUniqueInput;
        where?: Prisma.EventListWhereInput;
        orderBy?: Prisma.EventListOrderByWithRelationInput;
    }): Promise<EventList[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.eventList.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createEvent(data: Prisma.EventListCreateInput): Promise<EventList> {
        return this.prisma.eventList.create({
            data,
        });
    }

    async deleteEvent(where: Prisma.EventListWhereUniqueInput): Promise<EventList> {
        return this.prisma.eventList.delete({
            where,
        }).catch(() => null);
    }
}
