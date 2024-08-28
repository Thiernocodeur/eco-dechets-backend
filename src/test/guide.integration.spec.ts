import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';

describe('GuideController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/guides (GET)', () => {
    return request(app.getHttpServer())
      .get('/guides')
      .expect(200)
      .expect((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/guides (POST)', () => {
    return request(app.getHttpServer())
      .post('/guides')
      .send({ name: 'New Guide' }) // Change this according to your DTO
      .expect(201)
      .expect((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name', 'New Guide');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
