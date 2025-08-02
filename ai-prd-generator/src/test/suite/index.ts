/**
 * @file index.ts
 * @description Test suite entry point for the VS Code extension.
 * This script uses Mocha and glob to discover and run all test files in the project.
 */

import * as path from 'path';
import Mocha from 'mocha';
import { glob } from 'glob';

/**
 * @function run
 * @description Runs the Mocha test suite.
 * @returns {Promise<void>} A promise that resolves when the tests complete or rejects on failure.
 */
export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'bdd',
    color: true,
    timeout: 15000 // Increased timeout for extension tests
  });

  const testsRoot = path.resolve(__dirname, '..');

  return new Promise((c, e) => {
    glob('**/**.test.js', { cwd: testsRoot })
      .then(files => {
        // Add files to the test suite
        files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

        try {
          // Run the mocha test
          mocha.run((failures: number) => {
            if (failures > 0) {
              e(new Error(`${failures} tests failed.`));
            } else {
              c();
            }
          });
        } catch (err) {
          console.error(err);
          e(err);
        }
      })
      .catch(err => {
        console.error(err);
        return e(err);
      });
  });
}
