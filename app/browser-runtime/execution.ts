export const runJs = (codeContent) => {
    return new Promise((resolve) => {
        try {
            // Store the original console.log function
            const originalConsoleLog = console.log;

            // Create an array to collect log outputs
            let logOutputs = [];

            // Override console.log
            console.log = (...args) => {
                // Push the arguments to logOutputs as a string
                logOutputs.push(args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' '));
            };

            const exec_code = new Function(codeContent); // Create a function from the code string

            // Execute in a safe asynchronous environment
            setTimeout(() => {
                try {
                    exec_code(); // Execute the code
                    // Resolve with the result and logs as a string
                    resolve(`Execution completed\n> Logs\n${logOutputs.join('\n')}`);
                } catch (innerError) {
                    // Resolve with the error message and logs as a string
                    resolve(`Error: ${innerError.message}\n> Logs\n${logOutputs.join('\n')}`);
                } finally {
                    // Restore original console.log after execution
                    console.log = originalConsoleLog;
                }
            }, 0);
        } catch (outerError) {
            // Resolve with the error message and no logs, all as a string
            resolve(`Error: ${outerError.message}\n> Logs\n`);
        }
    });
};

let pyodide: any;
const loadPyodide = async () => {
  if (!pyodide) {
    // Dynamically load the Pyodide script if it's not already loaded
    pyodide = await (window as any).loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/",
    });
  }
};
export const runPython = async (pythonCode: string): Promise<string> => {
  await loadPyodide();

  try {
    // Create a custom output handler to capture print statements
    await pyodide.runPython(`
      import sys
      from io import StringIO
      from typing import List
      captured_output = StringIO()  # Create a string buffer to capture output
      sys.stdout = captured_output  # Redirect stdout to the buffer
    `);

    // Run the user's Python code
    pyodide.runPython(pythonCode);

    // Get the captured output
    const capturedOutput = pyodide.runPython('captured_output.getvalue()');

    // Return the captured output
    return capturedOutput as string;
  } catch (error) {
    console.error('Error executing Python code:', error);
    return `Error: ${error.message}`;
  }
};