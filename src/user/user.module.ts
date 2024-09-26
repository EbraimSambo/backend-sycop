import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserCreateController } from './controllers/user-create/user-create.controller';
import { UserReadController } from './controllers/user-read/user-read.controller';
import { UserCreateService } from './services/user-create/user-create.service';
import { UserReadService } from './services/user-read/user-read.service';

@Module({
  controllers: [UserController, UserCreateController, UserReadController],
  providers: [UserService, UserRepository, DatabaseService, UserCreateService, UserReadService],
})
export class UserModule {}
