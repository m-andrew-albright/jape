import { TemplatesClient } from 'clients/templates-client';

describe('Templates Client Constructor', () => {
  it('should fail when no configuration is passed in.', () => {
    expect(new TemplatesClient()).toThrow(Error);
  });
});
