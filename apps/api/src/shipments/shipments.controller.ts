import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { ShipmentsService } from './shipments.service';
import { JwtAuthGuard } from 'src/guards/auth-guard';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Post()
  create(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentsService.create(createShipmentDto);
  }

  @Get('all')
  findAll() {
    return this.shipmentsService.findAll();
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAllByUser(@Req() req) {
    return this.shipmentsService.findAllByUser(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shipmentsService.findOne(id);
  }

  @Patch(':id/mark-delivered')
  @UseGuards(JwtAuthGuard)
  markDelivered(@Param('id') id: string) {
    return this.shipmentsService.markDelivered(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShipmentDto: UpdateShipmentDto,
  ) {
    return this.shipmentsService.update(id, updateShipmentDto);
  }

  @Post('reset-all-shipments')
  @UseGuards(JwtAuthGuard)
  resetAllShipments() {
    return this.shipmentsService.resetAllShipments();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipmentsService.remove(id);
  }
}
