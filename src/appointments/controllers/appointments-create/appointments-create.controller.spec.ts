import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsCreateController } from './appointments-create.controller';

describe('AppointmentsCreateController', () => {
  let controller: AppointmentsCreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentsCreateController],
    }).compile();

    controller = module.get<AppointmentsCreateController>(AppointmentsCreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
