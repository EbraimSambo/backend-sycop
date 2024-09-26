import { Test, TestingModule } from '@nestjs/testing';
import { UserReadService } from './user-read.service';

describe('UserReadService', () => {
  let service: UserReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserReadService],
    }).compile();

    service = module.get<UserReadService>(UserReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
