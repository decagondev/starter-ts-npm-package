# 🚀 Starter TypeScript NPM Package 

## 📦 Overview

This is a lightweight TypeScript NPM package providing utility functions and type definitions for your project. Perfect for developers looking for a simple, clean starting point for their TypeScript npm packages.

## ✨ Features

- 🔢 Type-safe utility functions
- 🏷️ Custom type definitions
- 🧪 Fully typed and documented

## 🛠 Installation

Install the package using npm:

```bash
npm install starter-ts-npm-package
```

Or using yarn:

```bash
yarn add starter-ts-npm-package
```

## 💡 Usage

### ExampleType

A union type that can be one of three string literals:

```typescript
import { ExampleType } from 'starter-ts-npm-package';

const validType: ExampleType = 'bob'; // ✅ Valid
const invalidType: ExampleType = 'alice'; // ❌ Type Error
```

### myHelloFunction

Logs a greeting to the console:

```typescript
import { myHelloFunction } from 'starter-ts-npm-package';

myHelloFunction('Hello, World! 👋'); 
// Outputs: Hello, World! 👋
```

### add Function

Adds two numbers together:

```typescript
import { add } from 'starter-ts-npm-package';

const result = add(5, 3); 
console.log(result); // Outputs: 8
```

## 🧪 Running Tests

To run the package tests:

```bash
npm test
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Project Structure

```
starter-ts-npm-package/
│
├── src/                 # Source files
│   └── index.ts         # Main source file
│
├── dist/                # Compiled files
│   ├── index.js         # Compiled JavaScript
│   └── index.d.ts       # TypeScript declarations
│
├── tests/               # Unit tests
│   └── index.test.ts    # Test suite
│
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Support

Encounter any issues? [Open an issue](https://github.com/decagondev/starter-ts-npm-package/issues) on GitHub.

## 🌟 Acknowledgments

- TypeScript
- NPM
- The amazing open-source community