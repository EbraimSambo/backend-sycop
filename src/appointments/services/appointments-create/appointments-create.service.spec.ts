import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsCreateService } from './appointments-create.service';

describe('AppointmentsCreateService', () => {
  let service: AppointmentsCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentsCreateService],
    }).compile();

    service = module.get<AppointmentsCreateService>(AppointmentsCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
