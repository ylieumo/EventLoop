// Part 3: Deferred Execution


    // Cache the HTML element
    const resultElement = "document.getElementById('result')";

    // Function to check if a number is prime
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }

    // Function to add prime numbers up to n to the HTML element with delays
    function addPrimesToElement(n, current = 2) {
      if (current <= n) {
        if (isPrime(current)) {
          // Append the prime number to the HTML element
          resultElement.innerHTML += `${current}, `;
        }

        // Use setTimeout for deferred execution
        setTimeout(() => {
          addPrimesToElement(n, current + 1);
        }, 0);
      } else {
        // All numbers are rendered, show the alert
        setTimeout(() => {
          alert("Calculation is finished!");
        }, 0);
      }
    }


    // Run the function with n equal to 10,000
    addPrimesToElement(10000);
