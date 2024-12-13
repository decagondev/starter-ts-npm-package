import { myHelloFunction, add, ExampleType } from '../src/index';

describe('Package Utilities', () => {
  // Mock console.log to test myHelloFunction
  const originalConsoleLog = console.log;
  let consoleLogMock: jest.Mock;

  beforeEach(() => {
    consoleLogMock = jest.fn();
    console.log = consoleLogMock;
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  describe('myHelloFunction', () => {
    it('should log the greeting to console', () => {
      const greeting = 'Hello, World!';
      myHelloFunction(greeting);
      
      expect(consoleLogMock).toHaveBeenCalledWith(greeting);
    });

    it('should handle different types of greetings', () => {
      const greetings = [
        'Hi there!', 
        '👋 Hello!', 
        'Greetings from TypeScript-land'
      ];

      greetings.forEach(greeting => {
        myHelloFunction(greeting);
        expect(consoleLogMock).toHaveBeenCalledWith(greeting);
      });
    });
  });

  describe('add function', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
    });

    it('should add negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
      expect(add(-10, 5)).toBe(-5);
    });

    it('should add zero correctly', () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
    });

    it('should handle floating point numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('ExampleType', () => {
    it('should only allow specific string literals', () => {
      const validTypes: ExampleType[] = ['bob', 'dave', 'joe'];
      const invalidTypes = ['alice', 'charlie', ''];

      // Verify valid types
      validTypes.forEach(type => {
        const testVar: ExampleType = type;
        expect(testVar).toBe(type);
      });

      // These lines would cause compile-time errors if uncommented
      // invalidTypes.forEach(type => {
      //   const testVar: ExampleType = type; // TypeScript error
      // });
    });
  });
});