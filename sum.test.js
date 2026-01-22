const express = require('express');
const router = require('./sum'); 

describe('POST /sum (probando el router completo con Jest puro)', () => {

  let app;
  let mockReq;
  let mockRes;

  beforeEach(() => {
    app = express();
    app.use(express.json());          
    app.use(router);                   

    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      _getJson: function () { return this.json.mock.calls[0]?.[0]; },
      _getStatus: function () { return this.status.mock.calls[0]?.[0]; }
    };

    mockReq = {
      method: 'POST',
      url: '/sum',
      body: {},
      headers: {}
    };
  });

  test('devuelve 200 y la suma correcta con body válido', () => {
    mockReq.body = { num1: 7, num2: 8 };

    const next = jest.fn();
    router(mockReq, mockRes, next);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledTimes(1);
    expect(mockRes._getJson()).toEqual({ suma: 15 });
    expect(next).not.toHaveBeenCalled(); 
  });


  test('devuelve 500 cuando body es null (fuerza error)', () => {
    mockReq.body = null;

    const next = jest.fn();
    router(mockReq, mockRes, next);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ message: "No se pudo hacer la suma" });
  });

});