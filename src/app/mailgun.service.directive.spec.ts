import { Mailgun.ServiceDirective } from './mailgun.service.directive';

describe('Mailgun.ServiceDirective', () => {
  it('should create an instance', () => {
    const directive = new Mailgun.ServiceDirective();
    expect(directive).toBeTruthy();
  });
});
