import { Injectable } from '@angular/core';

@Injectable()
class CoreConstants {
  public static API_HOST = 'localhost';
  public static API_PORT = '3000';
  public static API_ENDPOINT = `http://${CoreConstants.API_HOST}:${CoreConstants.API_PORT}/api/`;
}

export { CoreConstants };
