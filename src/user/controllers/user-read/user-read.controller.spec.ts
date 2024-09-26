import { Test, TestingModule } from '@nestjs/testing';
import { UserReadController } from './user-read.controller';

describe('UserReadController', () => {
  let controller: UserReadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserReadController],
    }).compile();

    controller = module.get<UserReadController>(UserReadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
