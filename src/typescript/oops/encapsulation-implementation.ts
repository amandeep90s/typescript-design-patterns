import { now } from './abstraction-implementation';

console.log(`Current Date and Time: ${now.toString()}`);

// Encapsulation Implementation
now.setFullYear(2025);
console.log(`Updated Date and Time: ${now.toString()}`);
