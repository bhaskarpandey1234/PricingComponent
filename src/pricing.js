import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';

function Pricing() {
  const [mode, setMode] = useState('dark');

  // On component mount, check the saved mode preference in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Toggle mode between light and dark
  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <div id="pricing-section" className={`pricing-section ${mode}`}>

      <button id="mode-toggle" onClick={toggleMode}>
        Toggle Mode
      </button>
      <div>
      <h2>API Pricing</h2>
      <p>Our API pricing is based on the model used and the number of tokens processed. Here’s a breakdown of the costs:</p>
      </div>
      <div id="myTable">
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>Model</th>
            <th>Price per 1k Tokens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OpenAI</td>
            <td>GPT-3.5</td>
            <td>$0.002</td>
          </tr>
          <tr>
            <td>OpenAI</td>
            <td>GPT-4</td>
            <td>$0.03</td>
          </tr>
          <tr>
            <td>Together AI</td>
            <td>Llama-2-70b</td>
            <td>$0.0008</td>
          </tr>
          <tr>
            <td>Together AI</td>
            <td>Llama-2-13b</td>
            <td>$0.0006</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div>
      <h4>Token Estimation</h4>
      <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
      </div>
      <div><section>
      <h4>Billing</h4>
      <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly.</p>
      </section>
      </div>
    </div>
  );
}

export default Pricing;
