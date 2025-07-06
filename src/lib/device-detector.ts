
import * as UAParserNS from 'ua-parser-js';

export function detectDevice(userAgent: string) {
  const parser = new UAParserNS.UAParser(userAgent);
  const device = parser.getDevice();
  const os = parser.getOS();
  const browser = parser.getBrowser();

  return {
    type: device.type || 'desktop',
    model: device.model || '',
    vendor: device.vendor || '',
    os: os.name || '',
    osVersion: os.version || '',
    browser: browser.name || '',
    browserVersion: browser.version || '',
  };
}
