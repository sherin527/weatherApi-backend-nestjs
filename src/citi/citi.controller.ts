import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CitiService } from './citi.service';
import { CreateCitiDto } from './dto/create-citi.dto';
import { UpdateCitiDto } from './dto/update-citi.dto';

@Controller('citi')
export class CitiController {
  constructor(private readonly citiService: CitiService) {}

  @Post()
  addCities(@Query('apiKey') apiKey: string,@Body() createCitiDto: CreateCitiDto) {
    return this.citiService.addCities(createCitiDto,apiKey);
  }


  @Get()
  findAll() {
    return this.citiService.findAll();
  }

  @Post("name")
  createdcity(@Body() createCitiDto: CreateCitiDto) {

    return this.citiService.createdcity(createCitiDto);
  }
  @Get("getAll")
  getWeatherFromALLCities() {
    return this.citiService.getWeatherFromALLCities();
  }

  
}
