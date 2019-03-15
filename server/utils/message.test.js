var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
      var from = 'Saurabh'
      var text = 'Hello World'
      var message = generateMessage(from, text);

      expect(typeof message.createdAt).toBe('number');
      expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
    var from = 'Anshu';
    var longitude = 23;
    var latitude = 20;
    var url = 'https://google.com/maps/?q=20,23';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});

