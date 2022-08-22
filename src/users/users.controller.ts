import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Patch,
  Param,
  Query,
  Res,
  Req,
  HttpStatus,
  HttpCode,
  HttpException,
  NotFoundException,
  Body,
  UploadedFiles,
  UseInterceptors,
  HttpVersionNotSupportedException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/users.interface';
import { CreateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //FIND ALL USERS
  @Get()
  getAllUsers(): Promise<UserInterface[]> {
    return this.userService.getAllUsers();
  }

  //FIND USER FOR NAME
  @Get('/name')
  getUsersWithName(@Query() query): Promise<UserInterface[]> {
    return this.userService.getUsersWithName(query);
  }

  //FIND USER FOR ID
  @Get(':id')
  getOneUserforId(@Param('id') id: string): Promise<UserInterface> {
    return this.userService.getOneUserforId(id);
  }

  //DELETE USER FOR ID
  @Delete(':id')
  deleteOneUserforId(@Param('id') id: string): Promise<UserInterface> {
    return this.userService.deleteOneUserforId(id);
  }

  //UPDATE USER FOR ID
  @Put(':id')
  updateOneUserforId(
    @Param('id') id: string,
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserInterface> {
    return this.userService.updateOneUserforId(id, createUserDto);
  }

  //CREATE USER
  @Post()
  createCar(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return this.userService.createUser(createUserDto);
  }

  //LOGIN USER
  @Post('/login')
  loginUser(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return this.userService.loginUser(createUserDto);
  }
}
