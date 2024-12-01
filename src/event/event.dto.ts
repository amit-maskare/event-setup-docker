import { IsNotEmpty, IsString, IsDateString, IsDate, IsISO8601, Length, MaxLength } from 'class-validator';

export class EventDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    title: string;

    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    date: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    location: string;
}
